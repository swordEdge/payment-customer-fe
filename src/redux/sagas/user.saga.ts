import { AppActions } from "../store";

import { PATH } from "consts";

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

export function* signUpSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/signup",
					action.payload.user
				)
		);

		if (result.data) {
			yield put(AppActions.user.signUpSuccess(result.data));
			action.payload.next();
		}
	} catch (error: unknown) {
		yield put(AppActions.user.signUpError(error));
	}
}

export function* checkDuplicateUserSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/checkduplicateregister",
					action.payload.user
				)
		);

		if (result.data) {
			yield put(AppActions.user.checkDuplicateUserSuccess(result.data));
			action.payload.next();
		}
	} catch (error: any) {
		if (error.response) {
			yield put(AppActions.user.checkDuplicateUserError(error.response.data));
		}
	}
}

export function* verifyEmailSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/mfa/code",
					action.payload.user
				)
		);
		if (result) {
			yield put(AppActions.user.verifyEmailSuccess(result.data));
			action.payload.next();
		}
	} catch (error: any) {
		if (error) {
			yield put(AppActions.user.verifyEmailError(error.response.data));
		}
	}
}

export function* verifyPhoneSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/mfa/code",
					action.payload.user
				)
		);

		if (result) {
			yield put(AppActions.user.verifyPhoneSuccess(result.data));
			action.payload.next();
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(AppActions.user.verifyPhoneError(error.response.data));
		}
	}
}

export function* verifyUserPhoneSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/mfa/code/verify",
					action.payload.verifyInfo
				)
		);

		if (result.data) {
			yield put(AppActions.user.verifyUserPhoneSuccess(result.data));
			// action.payload?.next && action.payload.next();
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(AppActions.user.verifyUserPhoneError(error.response.data));
		}
	}
}

export function* verifyUserSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/mfa/code/verify",
					action.payload.verifyInfo
				)
		);

		if (result.data) {
			yield put(AppActions.user.verifyUserSuccess(result.data));
			action.payload?.next && action.payload.next();
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(AppActions.user.verifyUserError(error.response.data));
		}
	}
}

export function* signInSaga(action: any) {
	try {
		// const result: ResponseGenerator = await AppApiInstances.mainApiInstance.post("/api/user/signin", action.payload.signInfo);
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/signin",
					action.payload.signInfo
				)
		);

		if (result.data) {
			localStorage.setItem("userId", result.data.userId);
			yield put(AppActions.user.signInSuccess(result.data));
			if (result.data.token) {
				yield put(AppActions.user.getMe());
			}
			action.payload.next(result.data.mfaSetting, result.data);
		}
	} catch (error: any) {
		yield put(AppActions.user.signInError(error));
		if (error.response.data.code) {
			action.payload.next(error.response.data.code, {
				mail: error.response.data.mail,
				phoneNumber: error.response.data.phoneNumber,
				mobilePrefix: error.response.data.mobilePrefix,
			});
		}
	}
}

export function* getMeSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () => await AppApiInstances.mainApiInstance.get("/api/user/getme")
		);

		if (result) {
			yield put(AppActions.user.getMeSuccess(result));
		}
	} catch (error) {
		yield put(AppActions.user.getMeError(error));
	}
}

export function* updateMeSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.patch(
					"/api/user/user",
					action.payload
				)
		);

		if (result && result.data.user) {
			yield put(AppActions.user.updateMeSuccess(result.data.user));
		}
	} catch (error) {
		yield put(AppActions.user.updateMeError(error));
	}
}

export function* changePwdSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.patch(
					"/api/user/changepwd",
					action.payload
				)
		);

		if (result && result.data.user) {
			yield put(AppActions.user.changePwdSuccess(result.data.user));
		}
	} catch (error) {
		yield put(AppActions.user.changePwdError(error));
	}
}

export function* changeTwoFactorMethodSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.patch(
					"/api/user/twofactor",
					action.payload
				)
		);

		if (result && result.data.user) {
			yield put(AppActions.user.changeTwoFactorMethodSuccess(result.data.user));
		}
	} catch (error) {
		yield put(AppActions.user.changeTwoFactorMethodError(error));
	}
}

export function* generateQrCodeSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.commonApiInstance.post(
					"/api/user/generate",
					action.payload
				)
		);
		if (result) {
			yield put(AppActions.user.generateQrCodeSuccess(result));
		}
	} catch (error) {
		yield put(AppActions.user.generateQrCodeError(error));
	}
}

export function* sendVerifyCodeSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.commonApiInstance.post(
					"/api/user/verify",
					action.payload
				)
		);

		if (result) {
			yield put(AppActions.user.sendVerifyCodeSuccess(result));
			action.payload.next();
		}
	} catch (error) {
		yield put(AppActions.user.sendVerifyCodeError(error));
	}
}

export function* resetPwdSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.patch(
					"/api/user/resetpwd",
					action.payload
				)
		);

		if (result) {
			action.payload?.next && action.payload.next();
			yield put(AppActions.user.resetPwdSuccess(result.data.user));
		}
	} catch (error) {
		yield put(AppActions.user.resetPwdError(error));
	}
}

export function* startSessionSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.veriffApiInstance.post(
					"/api/veriff/start",
					action.payload
				)
		);

		if (result.data) {
			yield put(AppActions.user.startSessionSuccess(result.data));
			action.payload.next();
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(AppActions.user.startSessionError(error.response.data));
		}
	}
}

export function* getVendorSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/getvendor",
					action.payload
				)
		);

		if (result.data) {
			yield put(AppActions.user.getVendorSuccess(result.data));
		}
	} catch (error) {
		yield put(AppActions.user.getVendorError(error));
		action.payload?.next && action.payload.next();
	}
}

export function* registerSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/check-status",
					action.payload.user
				)
		);

		if (result.data) {
			yield put(AppActions.user.registerUserSuccess(result.data));
			action.payload.next({
				isSuccess: true,
				url: PATH.REGISTER_INDEX + "/" + PATH.REGISTER_CHECK_EMAIL,
			});
		}
	} catch (error: any) {
		yield put(AppActions.user.registerUserError(error));
		console.error(error);
		if (error.response.data.code) {
			localStorage.setItem("userId", error.response.data.userId);
			if (error.response.data.code == 4) {
				action.payload.next({ isSuccess: false, url: PATH.LOGIN_INDEX });
			} else if (error.response.data.code == 8)
				action.payload.next({
					isSuccess: false,
					// url: PATH.REGISTER_INDEX + "/" + PATH.REGISTER_VERIFY_START,
					url: PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION,
				});
		}
	}
}

export function* registerUserWithPhoneSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/register",
					action.payload.user
				)
		);

		if (result.data) {
			yield put(AppActions.user.registerUserSuccess(result.data));
			action.payload.next({ isSuccess: true, url: "/login/sms" });
		}
	} catch (error: any) {
		yield put(AppActions.user.registerUserError(error));
		console.error(error);
		if (error.response.data.code === 409) {
			localStorage.setItem("userId", error.response.data.userId);
			if (error.response.data.verifyStatus === "0")
				action.payload.next({ isSuccess: true, url: "/login/sms" });
			else action.payload.next({ isSuccess: false, url: "/login/phone" });
		}
	}
}

export function* verifyEmailInRegisterSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/signup/code",
					action.payload.user
				)
		);
		if (result) {
			yield put(AppActions.user.verifyEmailInRegisterSuccess(result.data));
			action.payload.next({
				isSuccess: true,
				url: PATH.REGISTER_INDEX + "/" + PATH.REGISTER_CHECK_EMAIL,
			});
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(
				AppActions.user.verifyEmailInRegisterError(error.response.data)
			);
		}
	}
}

export function* verifyPhoneInRegisterSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/signup/code",
					action.payload.user
				)
		);
		if (result) {
			yield put(AppActions.user.verifyPhoneInRegisterSuccess(result.data));
			action.payload.next({
				isSuccess: true,
				url: PATH.REGISTER_INDEX + "/" + PATH.REGISTER_CHECK_SMS,
			});
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(
				AppActions.user.verifyPhoneInRegisterError(error.response.data)
			);
		}
	}
}

export function* verifyUserInRegisterSaga(action: any) {
	try {
		const result: ResponseGenerator = yield call(
			async () =>
				await AppApiInstances.mainApiInstance.post(
					"/api/user/signup/code/verify",
					action.payload
				)
		);

		if (result.data) {
			yield put(AppActions.user.verifyUserInRegisterSuccess(result.data));
		}
	} catch (error: any) {
		if (error.response.data) {
			yield put(AppActions.user.verifyUserInRegisterError(error.response.data));
		}
	}
}
