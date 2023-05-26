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

export function* getCurrenciesSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.mainApiInstance.get('/api/currency')
    );

    if (result) {
      yield put(AppActions.currency.getCurrenciesSuccess(result));
    }
  } catch (error) {
    yield put(AppActions.currency.getCurrenciesError(error));
  }
}
