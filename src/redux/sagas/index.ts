//node_modules
//slices
import { AppActions } from "../store";
import {
  createAccountSaga,
  deleteAccountSaga,
  getAccountSaga,
  getAccountsSaga,
} from "./account.saga";
import {
  createBeneficiarySaga,
  deleteBeneficiarySaga,
  getBeneficiariesSaga,
  updateBeneficiarySaga,
} from "./beneficiary.saga";
import { getCurrenciesSaga } from "./currency.saga";
import {
  getSubscriptionSaga,
  getSubscriptionsSaga,
  updateSubscriptionSaga,
} from "./subscription.saga";
import {
  getAccountTransSaga,
  getFeeSaga,
  getRecentTransSaga,
  getTransactionSaga,
  sendTransferSaga,
} from "./transaction.saga";
//sagas
import {
  changePwdSaga,
  changeTwoFactorMethodSaga,
  checkDuplicateUserSaga,
  generateQrCodeSaga,
  getMeSaga,
  getVendorSaga,
  registerSaga,
  registerUserWithPhoneSaga,
  resetPwdSaga,
  sendVerifyCodeSaga,
  signInSaga,
  signUpSaga,
  startSessionSaga,
  updateMeSaga,
  verifyEmailInRegisterSaga,
  verifyEmailSaga,
  verifyPhoneInRegisterSaga,
  verifyPhoneSaga,
  verifyUserInRegisterSaga,
  verifyUserPhoneSaga,
  verifyUserSaga,
} from "./user.saga";

import { all, takeLatest } from "redux-saga/effects";

//sagas
function* rootSaga() {
  //users
  yield all([takeLatest(AppActions.user.signUp.type, signUpSaga)]);
  yield all([
    takeLatest(AppActions.user.checkDuplicateUser.type, checkDuplicateUserSaga),
  ]);
  yield all([takeLatest(AppActions.user.verifyUser.type, verifyUserSaga)]);
  yield all([
    takeLatest(AppActions.user.verifyUserPhone.type, verifyUserPhoneSaga),
  ]);
  yield all([takeLatest(AppActions.user.verifyEmail.type, verifyEmailSaga)]);
  yield all([takeLatest(AppActions.user.verifyPhone.type, verifyPhoneSaga)]);
  yield all([takeLatest(AppActions.user.signIn.type, signInSaga)]);
  yield all([takeLatest(AppActions.user.getMe.type, getMeSaga)]);
  yield all([takeLatest(AppActions.user.updateMe.type, updateMeSaga)]);
  yield all([takeLatest(AppActions.user.changePwd.type, changePwdSaga)]);
  yield all([
    takeLatest(
      AppActions.user.changeTwoFactorMethod.type,
      changeTwoFactorMethodSaga
    ),
  ]);
  yield all([
    takeLatest(AppActions.user.generateQrCode.type, generateQrCodeSaga),
  ]);
  yield all([
    takeLatest(AppActions.user.sendVerifyCode.type, sendVerifyCodeSaga),
  ]);
  yield all([takeLatest(AppActions.user.resetPwd.type, resetPwdSaga)]);
  yield all([takeLatest(AppActions.user.startSession.type, startSessionSaga)]);
  yield all([takeLatest(AppActions.user.getVendor.type, getVendorSaga)]);
  yield all([takeLatest(AppActions.user.registerUser.type, registerSaga)]);
  yield all([
    takeLatest(
      AppActions.user.registerUserWithPhone.type,
      registerUserWithPhoneSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.user.verifyEmailInRegister.type,
      verifyEmailInRegisterSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.user.verifyPhoneInRegister.type,
      verifyPhoneInRegisterSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.user.verifyUserInRegister.type,
      verifyUserInRegisterSaga
    ),
  ]);

  //account
  yield all([takeLatest(AppActions.account.getAccounts.type, getAccountsSaga)]);
  yield all([takeLatest(AppActions.account.getAccount.type, getAccountSaga)]);
  yield all([
    takeLatest(AppActions.account.createAccount.type, createAccountSaga),
  ]);
  yield all([
    takeLatest(AppActions.account.deleteAccount.type, deleteAccountSaga),
  ]);

  //subscription
  yield all([
    takeLatest(
      AppActions.subscription.getSubscriptions.type,
      getSubscriptionsSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.subscription.getSubscription.type,
      getSubscriptionSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.subscription.updateSubscription.type,
      updateSubscriptionSaga
    ),
  ]);

  //transactions
  yield all([
    takeLatest(AppActions.transaction.getRecentTrans.type, getRecentTransSaga),
  ]);
  yield all([
    takeLatest(
      AppActions.transaction.getAccountTrans.type,
      getAccountTransSaga
    ),
  ]);
  yield all([
    takeLatest(AppActions.transaction.sendTransfer.type, sendTransferSaga),
  ]);
  yield all([
    takeLatest(AppActions.transaction.getTransaction.type, getTransactionSaga),
  ]);
  yield all([takeLatest(AppActions.transaction.getFee.type, getFeeSaga)]);

  //beneficiary
  yield all([
    takeLatest(
      AppActions.beneficiary.getBeneficiaries.type,
      getBeneficiariesSaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.beneficiary.createBeneficiary.type,
      createBeneficiarySaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.beneficiary.deleteBeneficiary.type,
      deleteBeneficiarySaga
    ),
  ]);
  yield all([
    takeLatest(
      AppActions.beneficiary.updateBeneficiary.type,
      updateBeneficiarySaga
    ),
  ]);

  //currency
  yield all([
    takeLatest(AppActions.currency.getCurrencies.type, getCurrenciesSaga),
  ]);
}

export default rootSaga;
