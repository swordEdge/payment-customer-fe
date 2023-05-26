import { AppActions } from "new_redux/store";
import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "utils";
import { PayloadAction } from "@reduxjs/toolkit";
import * as AppActionTypes from "../../types";
import { AxiosError } from "axios";
import { NOTIFICATION } from "consts";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* checkGACodeRequestSaga(
  action: PayloadAction<AppActionTypes.Auth.ICheckGACodeRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst("auth/sign-in/verify-gacode", "POST",
        {
          saasUserCorporationId: action.payload.saasUserCorporationId,
          ...(action.payload.email && { email: action.payload.email }),
          ...(action.payload.countryCode &&
            action.payload.phoneNumber && {
            phone: action.payload.countryCode + action.payload.phoneNumber,
          }),
          code: action.payload.code,
        },
      );
    });

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.auth.checkGACodeSuccess(result.data));

    if (action.payload.next) {
      action.payload.next(result.data.user);
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;

      if (action.payload.errorAction) {
        action.payload.errorAction(NOTIFICATION[reasonCode]);
      }

      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest("auth/checkGACodeRequest", checkGACodeRequestSaga);
})();
