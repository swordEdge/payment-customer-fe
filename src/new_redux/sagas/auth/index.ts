import signUp from "./signUp.saga";
import resendSignUpCode from "./resendSignUpCode.saga";
import verifySignUpCode from "./verifySignUpCode.saga";
import signIn from "./signIn.saga";
import resendMFACode from "./resendMFACode.saga";
import verifyMFACode from "./verifyMFACode.saga";
import getMe from "./getMe.saga";
import checkGACode from "./checkGACode.saga";

export default [
	signUp,
	resendSignUpCode,
	verifySignUpCode,
	signIn,
	resendMFACode,
	verifyMFACode,
	getMe,
	checkGACode
];
