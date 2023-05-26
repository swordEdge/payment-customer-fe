import { AppActions } from '../store';

import { call, put } from 'redux-saga/effects';

import { AppApiInstances } from 'utils';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

export function* getAccountsSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.mainApiInstance.get('/api/account')
    );

    if (result) {
      yield put(AppActions.account.getAccountsSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.account.getAccountsError(error));
  }
}

export function* getAccountSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.get(
          `/api/account/${action.payload.id}`
        )
    );

    if (result) {
      yield put(AppActions.account.getAccountSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.account.getAccountError(error));
  }
}

export function* createAccountSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.post(
          '/api/account',
          action.payload
        )
    );

    if (result) {
      yield put(AppActions.account.createAccountSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.account.createAccountError(error));
  }
}

export function* deleteAccountSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.patch(
          `/api/account/${action.payload.id}`
        )
    );

    if (result) {
      yield put(AppActions.account.deleteAccountSuccess());
    }
  } catch (error) {
    yield put(AppActions.account.deleteAccountError(error));
  }
}
