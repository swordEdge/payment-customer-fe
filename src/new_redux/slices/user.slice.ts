import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserProfile, IMFASetting } from "new_models";

import * as AppActionTypes from "../types";

type UserState = {
  user: IUser;
  userProfile: IUserProfile;
  mfaSetting: IMFASetting;
};

const initialState: UserState = {
  user: {} as IUser,
  userProfile: {} as IUserProfile,
  mfaSetting: {} as IMFASetting
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // Get Currencies
    getUserRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IGetUserRequestAction>
    ) { },
    getUserSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IGetUserSuccessAction>
    ) {
      state.user = action.payload.user;
    },
    getUserFaiure(_state: UserState) { },

    // Get User Profile
    getUserProfileRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IGetUserProfileRequestAction>
    ) { },
    getUserProfileSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IGetUserProfileSuccessAction>
    ) {
      state.userProfile = {
        ...state.userProfile,
        firstName: action.payload.personalInfo[0].first_name,
        lastName: action.payload.personalInfo[0].last_name,
        birthday: action.payload.personalInfo[0].kyc_info_birthday,
        // firstName: action.payload.personalInfo.user_avatar,
      } as IUserProfile;
    },
    getUserProfileFailure(_state: UserState) { },

    // Change Password
    changePasswordRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IChangePasswordRequestAction>
    ) { },
    changePasswordSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IChangePasswordSuccessAction>
    ) {
      state.user = action.payload.user;
    },
    changePasswordFailure(_state: UserState) { },

    // Get Address
    getAddressRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IGetAddressRequestAction>
    ) { },
    getAddressSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IGetAddressSuccessAction>
    ) {
      // state.user = { ...state.user, ...action.payload.address } as IUser;
      state.userProfile = {
        ...state.userProfile,
        address1: action.payload.address.address1,
        address2: action.payload.address.address2,
        city: action.payload.address.city,
        countryName: action.payload.address.countryName,
        postCode: action.payload.address.postCode,
        state: action.payload.address.state,
      } as IUserProfile;
    },
    getAddressFailure(_state: UserState) { },

    // Update Address
    updateAddressRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IUpdateAddressRequestAction>
    ) { },
    updateAddressSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IUpdateAddressSuccessAction>
    ) {
      state.user = { ...state.user, ...action.payload.address };
    },
    updateAddressFailure(_state: UserState) { },

    // Finish KYC
    finishKYCRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IFinishKYCRequestAction>
    ) { },
    finishKYCSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IFinishKYCSuccessAction>
    ) { },
    finishKYCFailure(_state: UserState) { },

    // Update Notification Setting
    updateNotificationSettingRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IUpdateNotificationSettingRequestAction>
    ) { },
    updateNotificationSettingSuccesss(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IUpdateNotificationSettingSuccessAction>
    ) { },
    updateNotificationSettingFailure(_state: UserState) { },

    // UPdate TwoFactor Setting
    updateTwoFactorSettingRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IUpdateTwoFactorSettingRequestAction>
    ) { },
    updateTwoFactorSettingSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IUpdateTwoFactorSettingSuccessAction>
    ) {
      state.user = action.payload.user;
    },
    updateTwoFactorSettingFailure(_state: UserState) { },

    // Update Google Authenticator MFA Setting
    updateGAMFASettingRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IUpdateGAMFASettingRequestAction>
    ) { },
    updateGAMFASettingSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IUpdateGAMFASettingSuccessAction>
    ) {
      state.user = action.payload.user;
      state.mfaSetting = action.payload.mfaSetting;
    },
    updateGAMFASettingFailure(_state) { },

    // Verify Google Authenticator Token
    verifyGATokenRequest(
      _state: UserState,
      _action: PayloadAction<AppActionTypes.User.IVerifyGATokenRequestAction>
    ) { },
    verifyGATokenSuccess(
      state: UserState,
      action: PayloadAction<AppActionTypes.User.IVerifyGATokenSuccessAction>
    ) { },
    verifyGATokenFailure(_state: UserState) { }
  }
});

export const reducer = userSlice.reducer;
export const actions = userSlice.actions;