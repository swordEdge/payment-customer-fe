import { IUser } from "new_models";
import { UserType } from "types";
import { IAction } from "../action";

type ISignUpUser = Partial<
	Pick<IUser, "email" | "countryCode" | "phoneNumber" | "mfaSetting" | "businessName">
>;

/** Sign Up Workflow */
// Sign Up Request
export type ISignUpRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
		password: string;
		userType: UserType;
	};
// Resend Sign Up Code Request
export type IResendSignUpCodeRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
	};
// Verify Sign Up Code Request
export type IVerifySignUpCodeRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
		code: string;
	};

/** Sign In Workflow */
// Sign In Request
export type ISignInRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
		password: string;
	};
// Resend MFA Code Request
export type IResendMFACodeRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
	};
// Verify MFA Code Request
export type IVerifyMFACodeRequestAction = IAction &
	ISignUpUser & {
		saasUserCorporationId: number;
		code: string;
	};
export type IVerifyMFACodeSuccessAction = {
	user: IUser;
	token: string;
};

// Get Me Request
export type IGetMeRequestAction = IAction;
export type IGetMeSuccessAction = {
	user: IUser;
};

// Check Google Authenticator code
export type ICheckGACodeRequestAction = IAction & ISignUpUser & {
	saasUserCorporationId: number;
	code: string;
};
export type ICheckGACodeSuccessAction = {
	user: IUser;
	token: string;
};