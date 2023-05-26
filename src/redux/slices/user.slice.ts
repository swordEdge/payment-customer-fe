import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Error, IUser } from 'models';

import { UserMapper } from 'utils';

type IsMfaPass = {
  mail: string;
  password: string;
  isMfaSetting: boolean;
  firstName: string;
};

type StateType = {
  user: IUser;
  otherUser: IUser;
  isMfaPass: IsMfaPass;
  verifyState: boolean;
  creatingUser: boolean;
  createdUser: boolean;
  verifyingUser: boolean;
  verifiedUser: boolean;
  verifyingSignature: boolean;
  verifiedSignature: boolean;
  transactionVarified: boolean;
  gettingMe: boolean;
  gotMe: boolean;
  updatingMe: boolean;
  updatedMe: boolean;
  changingTwoFactorMethod: boolean;
  changedTwoFactorMethod: boolean;
  changingGenerateQrCode: boolean;
  changedgenerateQrCode: boolean;
  changingPwd: boolean;
  changedPwd: boolean;
  resettingPwd: boolean;
  resetPwd: boolean;
  changingsendVerifyCode: boolean;
  changedsendVerifyCode: boolean;
  startingSession: boolean;
  startedSession: boolean;
  signinEmailVerify: boolean;
  signinPhoneVerify: boolean;
  token: string;
  expired: boolean;
  error: Error;
  verificationId: string;
  vendorData: string;
  verify: string;
  userId: string;
};

const intialState: StateType = {
  user: {} as IUser,
  otherUser: {} as IUser,
  isMfaPass: {} as IsMfaPass,
  verifyState: false,
  creatingUser: false,
  createdUser: false,
  verifyingUser: false,
  verifiedUser: false,
  verifyingSignature: false,
  verifiedSignature: false,
  transactionVarified: false,
  gettingMe: false,
  gotMe: false,
  updatingMe: false,
  updatedMe: false,
  changingTwoFactorMethod: false,
  changedTwoFactorMethod: false,
  changingGenerateQrCode: false,
  changedgenerateQrCode: false,
  changingPwd: false,
  changedPwd: false,
  resettingPwd: false,
  resetPwd: false,
  changingsendVerifyCode: false,
  changedsendVerifyCode: false,
  startingSession: false,
  startedSession: false,
  signinEmailVerify: false,
  signinPhoneVerify: false,
  token: '',
  expired: false,
  error: {} as Error,
  verificationId: '',
  vendorData: '',
  verify: '',
  userId: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: intialState,
  reducers: {
    /**
     * signUp
     */
    signUp(state: StateType, _action: PayloadAction<void>) {
      state.creatingUser = true;
      state.createdUser = false;
    },
    signUpSuccess(
      state: StateType,
      action: PayloadAction<{ vendorData: string }>
    ) {
      state.creatingUser = false;
      state.createdUser = true;
      state.vendorData = action.payload.vendorData;
      state.error.message = '';
    },
    signUpError(state: StateType, _action) {
      state.creatingUser = false;
      state.createdUser = false;
    },

    /**
     * check duplicate user
     */
    checkDuplicateUser(
      state: StateType,
      action: PayloadAction<{ user: IUser; next: () => void }>
    ) {
      state.creatingUser = true;
      state.createdUser = false;
      state.error.res = true;
      state.user = action.payload.user;
    },
    checkDuplicateUserSuccess(
      state: StateType,
      action: PayloadAction<{ vendorData: string }>
    ) {
      state.creatingUser = false;
      state.createdUser = true;
      state.vendorData = action.payload.vendorData;
      state.error.message = '';
    },
    checkDuplicateUserError(state: StateType, action) {
      state.creatingUser = false;
      state.createdUser = false;
      state.error.message = action.payload.message;
      state.error.res = false;
    },

    /**
     * Verify user with email
     */
    verifyEmail(state: StateType, action) {
      state.verifiedSignature = false;
      state.verifyState = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyEmailSuccess(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.verifyState = action.payload.res;
      state.error.message = '';
    },
    verifyEmailError(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error = action.payload;
    },

    verifyPhone(state: StateType, action) {
      state.verifiedSignature = false;
      state.verifyState = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyPhoneSuccess(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.verifyState = action.payload.res;
      state.error.message = '';
    },
    verifyPhoneError(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error = action.payload;
    },
    /**
     * Verify User
     */
    verifyUser(state: StateType, action) {
      state.verifiedSignature = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyUserSuccess(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.signinEmailVerify = true;
      state.verifiedSignature = action.payload.res;
      state.error.message = '';
    },
    verifyUserError(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error.message = action.payload.message;
      state.error.res = false;
    },
    /**
     * Verify User with Phone
     */
    verifyUserPhone(state: StateType, action) {
      state.verifiedSignature = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyUserPhoneSuccess(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.verifiedSignature = action.payload.res;
      state.signinPhoneVerify = true;
      state.error.message = '';
    },
    verifyUserPhoneError(state: StateType, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error.message = action.payload.message;
      state.signinPhoneVerify = false;
      state.error.res = false;
    },
    /**
     * signIn
     */
    signIn(state: StateType, action) {
      state.verifyingSignature = true;
      state.verifiedSignature = false;
    },
    signInSuccess(state: StateType, action) {
      state.verifyingSignature = false;
      state.verifiedSignature = true;
      state.isMfaPass = action.payload;
      state.error.message = '';
      if (action.payload.token) {
        localStorage.setItem('token', action.payload.token);
      }
    },
    signInError(state: StateType, action) {
      state.verifyingSignature = false;
      state.verifiedSignature = false;
      state.error.message = action.payload.response.data.message;
    },
    /**
     * getMe
     */
    getMe(state) {
      state.gettingMe = true;
      state.gotMe = false;
    },

    getMeSuccess(state: StateType, action) {
      state.gettingMe = false;
      state.gotMe = true;
      state.user = UserMapper.map(action.payload);
      state.error.message = '';
    },
    getMeError(state: StateType, action) {
      state.gettingMe = false;
      state.gotMe = false;
      state.user = UserMapper.map({});
      localStorage.removeItem('token');
    },

    updateMe(state: StateType, action) {
      state.updatingMe = true;
      state.updatedMe = false;
    },
    updateMeSuccess(state: StateType, action) {
      state.updatingMe = false;
      state.updatedMe = true;
      state.user = UserMapper.map(action.payload);
      state.error.message = '';
    },
    updateMeError(state: StateType, action) {
      state.updatingMe = false;
      state.updatedMe = false;
    },

    changePwd(state: StateType, action) {
      state.changingPwd = true;
      state.changedPwd = false;
    },
    changePwdSuccess(state: StateType, action) {
      state.changingPwd = false;
      state.changedPwd = true;
      state.user = UserMapper.map(action.payload);
      state.error.message = '';
    },
    changePwdError(state: StateType, action) {
      state.changingPwd = false;
      state.changedPwd = false;
    },

    changeTwoFactorMethod(state: StateType, action) {
      state.changingTwoFactorMethod = true;
      state.changedTwoFactorMethod = false;
    },
    changeTwoFactorMethodSuccess(state: StateType, action) {
      state.changingTwoFactorMethod = false;
      state.changedTwoFactorMethod = true;
      state.error.message = '';
      // state.user = UserMapper.map(action.payload);
    },
    changeTwoFactorMethodError(state: StateType, action) {
      state.changingTwoFactorMethod = false;
      state.changedTwoFactorMethod = false;
    },

    generateQrCode(state: StateType, action) {
      state.changingGenerateQrCode = true;
      state.changedgenerateQrCode = false;
    },
    generateQrCodeSuccess(state: StateType, action) {
      state.changingGenerateQrCode = false;
      state.changedgenerateQrCode = true;
      // state.user = UserMapper.map(action.payload);
      state.error.message = '';
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
    generateQrCodeError(state: StateType, action) {
      state.changingGenerateQrCode = false;
      state.changedgenerateQrCode = false;
    },

    sendVerifyCode(state: StateType, action) {
      state.changingsendVerifyCode = true;
      state.changingsendVerifyCode = false;
    },
    sendVerifyCodeSuccess(state: StateType, action) {
      state.changingsendVerifyCode = false;
      state.changingsendVerifyCode = true;
      state.error.message = '';
      if (localStorage.getItem('expireTime')) {
        state.verify = action.payload.message;
      } else {
        state.token = action.payload.token;
        state.expired = false;
        localStorage.setItem('token', state.token);
        const expireTime: number =
          Math.floor(new Date().getTime() / 1000) +
          action.payload.expirationTime;
        localStorage.setItem('expireTime', expireTime.toString());
      }
    },
    sendVerifyCodeError(state: StateType, action) {
      state.changingsendVerifyCode = false;
      state.changingsendVerifyCode = false;
      state.verify = action.payload.message;
    },
    setDefaultVerify(state) {
      state.verify = '';
    },

    // Veriff
    // Start Session
    startSession(state: StateType, action) {
      state.startingSession = true;
      state.startedSession = false;
      state.error.res = true;
    },
    startSessionSuccess(state: StateType, action) {
      state.startingSession = false;
      state.startedSession = true;
      state.verificationId = action.payload.verificationId;
      state.error.message = '';
    },
    startSessionError(state: StateType, action) {
      state.startingSession = false;
      state.startedSession = false;
      state.error.message = action.payload.messages;
      state.error.res = false;
    },
    // Get VendorData
    getVendor(state: StateType, action) {
      state.startingSession = true;
      state.startedSession = false;
    },
    getVendorSuccess(state: StateType, action) {
      state.startingSession = false;
      state.startedSession = true;
      state.vendorData = action.payload.vendorData;
      state.error.message = '';
    },
    getVendorError(state: StateType, action) {
      state.startingSession = false;
      state.startedSession = false;
    },

    resetPwd(state: StateType, action) {
      state.resettingPwd = true;
      state.resetPwd = false;
    },
    resetPwdSuccess(state: StateType, action) {
      state.resettingPwd = false;
      state.resetPwd = true;
      state.user = UserMapper.map(action.payload);
      state.error.message = '';
    },
    resetPwdError(state: StateType, action) {
      state.resettingPwd = false;
      state.resetPwd = false;
    },

    logouts(state: StateType, action) {
      state.user = UserMapper.map({});
      localStorage.removeItem('token');
      localStorage.removeItem('wallet_connection');
      action.payload?.next && action.payload.next();
    },

    checkExpire(state) {
      const expireTime: any = localStorage.getItem('expireTime');
      const nowTime: number = Math.floor(new Date().getTime() / 1000);
      if (parseFloat(expireTime) - nowTime < 0) {
        localStorage.removeItem('token');
        localStorage.removeItem('expireTime');
        state.expired = true;
      }
    },

    resetUpdateState(state) {
      state.updatingMe = false;
      state.updatedMe = false;
    },

    /**
     * register user with Email
     */
    registerUser(state: StateType, action) {
      state.creatingUser = true;
      state.createdUser = false;
      state.error.res = true;
      state.user = action.payload.user;
    },
    registerUserSuccess(state: StateType, action) {
      state.creatingUser = false;
      state.createdUser = true;
      state.vendorData = action.payload.vendorData;
      state.userId = action.payload.userId;
      state.error.message = '';
      localStorage.setItem('userId', action.payload.userId);
    },
    registerUserError(state: StateType, action) {
      state.creatingUser = false;
      state.createdUser = false;
      state.error.message = action.payload.message;
      state.error.res = false;
    },

    /**
     * register user with Email
     */
    registerUserWithPhone(state: StateType, action) {
      state.creatingUser = true;
      state.createdUser = false;
      state.error.res = true;
      state.user = action.payload.user;
    },
    registerUserWithPhoneSuccess(state: StateType, action) {
      state.creatingUser = false;
      state.createdUser = true;
      state.vendorData = action.payload.vendorData;
      state.userId = action.payload.userId;
      state.error.message = '';
      localStorage.setItem('userId', action.payload.userId);
    },
    registerUserWithPhoneError(state: StateType, action) {
      state.creatingUser = false;
      state.createdUser = false;
      state.error.message = action.payload.message;
      state.error.res = false;
    },
    /**
     * Verify email in Register
     */
    verifyEmailInRegister(state, action) {
      state.verifiedSignature = false;
      state.verifyState = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyEmailInRegisterSuccess(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.verifyState = action.payload.res;
      state.error.message = '';
    },
    verifyEmailInRegisterError(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error = action.payload;
    },
    /**
     * Verify phone number in Register
     */
    verifyPhoneInRegister(state, action) {
      state.verifiedSignature = false;
      state.verifyState = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.error.res = true;
    },
    verifyPhoneInRegisterSuccess(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.verifyState = action.payload.res;
      state.error.message = '';
    },
    verifyPhoneInRegisterError(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error = action.payload;
    },
    /**
     * Verify User In Register
     */
    verifyUserInRegister(state, action) {
      state.verifiedSignature = false;
      state.verifyingUser = true;
      state.verifiedUser = false;
      state.signinEmailVerify = false;
      state.signinPhoneVerify = false;
      state.error.res = true;
    },
    verifyUserInRegisterSuccess(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = true;
      state.signinEmailVerify = true;
      state.signinPhoneVerify = true;
      state.verifiedSignature = action.payload.res;
      state.createdUser = true;
      state.vendorData = action.payload.vendorData;
      state.userId = action.payload.userId;
      localStorage.setItem('userId', action.payload.userId);
      state.error.message = '';
    },
    verifyUserInRegisterError(state, action) {
      state.verifyingUser = false;
      state.verifiedUser = false;
      state.error.message = action.payload.message;
      state.error.res = false;
    },

    setError(state) {
      state.error.res = true;
    },
  },
});

export const reducer = userSlice.reducer;
export const actions = userSlice.actions;
