import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "new_models";

import * as AppActionTypes from "../types";

type AuthState = {
	token: string | null;
	user: IUser;
};

const intialState: AuthState = {
	token: localStorage.getItem("token"),
	user: {} as IUser,
};

const userSlice = createSlice({
	name: "auth",
	initialState: intialState,
	reducers: {
		/** Sign Up Workflow */
		// Sign Up
		signUpRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.ISignUpRequestAction>
		) { },
		signUpSuccess(_state: AuthState) { },
		signUpFailure(_state: AuthState) { },
		// Resend Sign Up Code
		resendSignUpCodeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.IResendSignUpCodeRequestAction>
		) { },
		resendSignUpCodeSuccess(_state: AuthState) { },
		resendSignUpCodeFailure(_state: AuthState) { },
		// Verify Sign Up Code
		verifySignUpCodeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.IVerifySignUpCodeRequestAction>
		) { },
		verifySignUpCodeSuccess(_state: AuthState) { },
		verifySignUpCodeFailure(_state: AuthState) { },

		/** Sign In Workflow */
		// Sign In
		signInRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.ISignInRequestAction>
		) { },
		signInSuccess(_state: AuthState) { },
		signInFailure(_state: AuthState) { },
		// Resend MFA Code
		resendMFACodeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.IResendMFACodeRequestAction>
		) { },
		resendMFACodeSuccess(_state: AuthState) { },
		resendMFACodeFailure(_state: AuthState) { },
		// Verify MFA Code
		verifyMFACodeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.IVerifyMFACodeRequestAction>
		) { },
		verifyMFACodeSuccess(
			state: AuthState,
			action: PayloadAction<AppActionTypes.Auth.IVerifyMFACodeSuccessAction>
		) {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		verifyMFACodeFailure(_state: AuthState) { },
		/** Authorization - Routing Workflow */
		// Get Me
		getMeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.IGetMeRequestAction>
		) { },
		getMeSuccess(
			state: AuthState,
			action: PayloadAction<AppActionTypes.Auth.IGetMeSuccessAction>
		) {
			state.user = action.payload.user;
		},
		getMeFailure(_state: AuthState) { },
		// Log out
		logout(state: AuthState) {
			state.token = "";
			localStorage.removeItem("token");
			state.user = {} as IUser;
		},

		// Check Google Authenticator Code
		checkGACodeRequest(
			_state: AuthState,
			_action: PayloadAction<AppActionTypes.Auth.ICheckGACodeRequestAction>
		) { },
		checkGACodeSuccess(
			state: AuthState,
			action: PayloadAction<AppActionTypes.Auth.ICheckGACodeSuccessAction>
		) {
			localStorage.setItem("token", action.payload.token);
			state.token = action.payload.token;
			state.user = action.payload.user;
		},
		checkGACodeFailure(_state: AuthState) { }
	},
});

export const reducer = userSlice.reducer;
export const actions = userSlice.actions;
