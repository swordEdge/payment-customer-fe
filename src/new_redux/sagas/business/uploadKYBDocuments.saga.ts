import { AppActions } from "new_redux/store";
import { call, put, takeLatest } from "redux-saga/effects";
import { makeAPIRequst } from "utils";
import { PayloadAction } from "@reduxjs/toolkit";

import * as AppActionTypes from "../../types";
import { AxiosError } from "axios";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* uploadKYBDocumentsRequestSaga(
  action: PayloadAction<AppActionTypes.Business.IUploadKYBDocumentsRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());
    // console.log("files: ", action.payload.files);

    const formData: FormData = new FormData();
    formData.append('incorporation', action.payload.files.incorporation);
    formData.append('operation', action.payload.files.operation);

    // console.log("formData: ", formData);

    action.payload.files.incorporation = formData.get('incorporation');
    action.payload.files.operation = formData.get('operation');

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst("business-customer-corporation/kyb", "POST", formData);
    });

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.business.uploadKYBDocumentsSuccess(result.data));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeLatest(
    "business/uploadKYBDocumentsRequest",
    uploadKYBDocumentsRequestSaga
  );
})();
