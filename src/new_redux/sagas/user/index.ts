import getUser from "./getUser.saga";
import getAddress from "./getAddress.saga";
import getUserProfile from "./getUserProfile.saga";
import changePassword from "./changePassword.saga";
import updateAddress from "./updateAddress.saga";
import finishKYC from "./finishKYC.saga";
import updateNotificationSetting from "./updateNotificationSetting.saga";
import updateTwoFactorSetting from "./updateTwoFactorSetting.saga";
import updateGAMFASetting from "./updateGAMFASetting.saga";
import verifyGAToken from "./verifyGAToken.saga";

export default [
  getUser,
  getAddress,
  getUserProfile,
  changePassword,
  updateAddress,
  finishKYC,
  updateNotificationSetting,
  updateTwoFactorSetting,
  updateGAMFASetting,
  verifyGAToken
];