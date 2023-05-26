import { AppActions } from "../../store";

import { call, put } from "redux-saga/effects";

import { makeAPIRequst } from "utils";

import { takeLatest } from "redux-saga/effects";
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

function* signUpRequestSaga(
	action: PayloadAction<AppActionTypes.Auth.ISignUpRequestAction>
) {
	try {
		yield put(AppActions.loading.setLoading());

		const result: ResponseGenerator = yield call(async () => {
			return await makeAPIRequst(
				"auth/sign-in",
				"POST",
				{
					saasUserCorporationId: action.payload.saasUserCorporationId,
					...(action.payload.email && { email: action.payload.email }),
					...(action.payload.countryCode &&
						action.payload.phoneNumber && {
						phone: action.payload.countryCode + action.payload.phoneNumber,
					}),
					password: action.payload.password,
				},
				false
			);
		});

		yield put(AppActions.loading.finishLoading());

		if (action.payload.next) {
			action.payload.next(result.data.mfaSetting);
		}
	} catch (error: unknown) {
		yield put(AppActions.loading.finishLoading());

		if (error instanceof AxiosError) {
			const reasonCode: string = error.response?.data.reason;
			if (action.payload.errorAction) {
				action.payload.errorAction(error.response?.data.message);
			}
			if (reasonCode && action.payload.errors) {
				const errorHandler: () => void = action.payload.errors[reasonCode];
				errorHandler();
			}
		}
	}
}

export default (function* () {
	yield takeLatest("auth/signInRequest", signUpRequestSaga);
})();
