import { PayloadAction } from '@reduxjs/toolkit';

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

export function* getSubscriptionsSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.feeApiInstance.get('/api/feemodel')
    );

    if (result) {
      yield put(AppActions.subscription.getSubscriptionsSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.subscription.getSubscriptionsError(error));
  }
}

export function* getSubscriptionSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.feeApiInstance.get('/api/feemodel/usage')
    );

    if (result) {
      yield put(AppActions.subscription.getSubscriptionSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.subscription.getSubscriptionError(error));
  }
}

export function* updateSubscriptionSaga(action: PayloadAction<number>) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.feeApiInstance.patch(
          `/api/feemodel/usage/${action.payload}`
        )
    );

    if (result) {
      yield put(AppActions.subscription.updateSubscriptionSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.subscription.updateSubscriptionError(error));
  }
}
