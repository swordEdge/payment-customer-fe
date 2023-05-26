import { AppActions } from "../store";

import { call, put } from "redux-saga/effects";

import { AppApiInstances } from "utils";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getRecentTransSaga() {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.get("/api/transfer/recent")
    );

    if (result.data) {
      yield put(AppActions.transaction.getRecentTransSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.transaction.getRecentTransError());
  }
}

export function* getAccountTransSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.get(
          `/api/transfer/${action.payload.id}`
        )
    );

    if (result) {
      yield put(AppActions.transaction.getAccountTransSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.transaction.getAccountTransError());
  }
}

export function* sendTransferSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.post(
          `/api/transfer`,
          action.payload.transfer
        )
    );

    if (result) {
      yield put(AppActions.transaction.sendTransferSuccess(result.data!));
      action.payload.next();
    }
  } catch (error) {
    yield put(AppActions.transaction.sendTransferError());
  }
}

export function* getTransactionSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.get(
          `/api/transfer/detail/${action.payload.transactionId}`
        )
    );

    if (result) {
      yield put(AppActions.transaction.getTransactionSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.transaction.getTransactionError());
  }
}

export function* getFeeSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.mainApiInstance.post("/api/v2/fee/fee")
    );

    if (result.data) {
      yield put(AppActions.transaction.getFeeSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.transaction.getFeeError());
  }
}
