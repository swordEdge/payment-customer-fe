import { AppActions } from "new_redux/store";
import { call, put, takeEvery } from "redux-saga/effects";
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

function* getTransactionsRequestSaga(
	action: PayloadAction<AppActionTypes.Transaction.IGetTransactionsRequestAction>
) {
	try {
		yield put(AppActions.loading.setLoading());

		const result: ResponseGenerator = yield call(async () => {
			return await makeAPIRequst("transaction", "POST", {
				accountId: action.payload.accountId,
			});
		});

		yield put(AppActions.loading.finishLoading());
		yield put(AppActions.transaction.getTransactionsSuccess(result.data));

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
	yield takeEvery(
		"transaction/getTransactionsRequest",
		getTransactionsRequestSaga
	);
})();