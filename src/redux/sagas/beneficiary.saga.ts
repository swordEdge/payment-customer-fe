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

export function* getBeneficiariesSaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () => await AppApiInstances.mainApiInstance.get('/api/beneficiary')
    );

    if (result) {
      yield put(AppActions.beneficiary.getBeneficiariesSuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.beneficiary.getBeneficiariesError(error));
  }
}

export function* createBeneficiarySaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.post(
          '/api/beneficiary',
          action.payload
        )
    );

    if (result) {
      yield put(AppActions.beneficiary.createBeneficiarySuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.beneficiary.createBeneficiaryError(error));
  }
}

export function* updateBeneficiarySaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.patch(
          `/api/beneficiary/${action.payload.id}`
        )
    );

    if (result) {
      yield put(AppActions.beneficiary.updateBeneficiarySuccess(result.data!));
    }
  } catch (error) {
    yield put(AppActions.beneficiary.updateBeneficiaryError(error));
  }
}

export function* deleteBeneficiarySaga(action: any) {
  try {
    const result: ResponseGenerator = yield call(
      async () =>
        await AppApiInstances.mainApiInstance.patch(
          `/api/beneficiary/delete/${action.payload.id}`
        )
    );

    if (result) {
      yield put(AppActions.beneficiary.deleteBeneficiarySuccess(result.data));
    }
  } catch (error) {
    yield put(AppActions.beneficiary.deleteBeneficiaryError(error));
  }
}
