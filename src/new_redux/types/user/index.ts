import { IUser, IUserProfile, IAddress, IMFASetting } from "new_models";
import { IAction } from "../action";

type IChangePasswordForm = {
  oldPassword: string;
  newPassword: string;
};

type IUpdateNotificationSettingForm = {
  isEmail: boolean;
  isPhone: boolean;
  isPushNotification: boolean;
};

// Get User Request
export type IGetUserRequestAction = IAction;
export type IGetUserSuccessAction = {
  user: IUser
};

// Get Profile Request
export type IGetUserProfileRequestAction = IAction;
export type IGetUserProfileSuccessAction = {
  personalInfo: any
};

// Change Password Request
export type IChangePasswordRequestAction = IAction & {
  change: IChangePasswordForm
};
export type IChangePasswordSuccessAction = {
  user: IUser
};

// Get Address
export type IGetAddressRequestAction = IAction;
export type IGetAddressSuccessAction = {
  address: IAddress
};

// Update Address
export type IUpdateAddressRequestAction = IAction & {
  address: IAddress
};
export type IUpdateAddressSuccessAction = {
  address: IAddress
};

// Finish KYC
export type IFinishKYCRequestAction = IAction & {
  uuid: string
};
export type IFinishKYCSuccessAction = IAction;

// Update Notification setting
export type IUpdateNotificationSettingRequestAction = IAction & {
  notificationSetting: IUpdateNotificationSettingForm
};
export type IUpdateNotificationSettingSuccessAction = {
  user: IUser
};

// Update TwoFactor setting
export type IUpdateTwoFactorSettingRequestAction = IAction & {
  mfaSetting: number;
};
export type IUpdateTwoFactorSettingSuccessAction = { user: IUser };

// Update Google Authenticator MFA Setting
export type IUpdateGAMFASettingRequestAction = IAction & {
  mfaSetting: number;
};
export type IUpdateGAMFASettingSuccessAction = {
  user: IUser;
  mfaSetting: IMFASetting;
};

// Verify Google Authenticator token
export type IVerifyGATokenRequestAction = IAction & {
  gaCode: string;
};
export type IVerifyGATokenSuccessAction = {
  mfaSetting: IMFASetting;
};