import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileViews } from 'components';
import { AppActions, RootState, AppDispatch } from 'new_redux/store';
import { VERIFY_METHOD } from 'consts';

export const TwoFactorContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user } = useSelector((state: RootState) => state.auth);
  const { mfaSetting } = useSelector((state: RootState) => state.user);

  const [isShowGA, setIsShowGA] = useState<boolean>(false);

  const handleChangeMethod = (mfaSetting: number) => {
    if (mfaSetting !== VERIFY_METHOD.AUTHENTICATOR) {
      dispatch(AppActions.user.updateTwoFactorSettingRequest({ mfaSetting }));
    } else {
      dispatch(AppActions.user.updateGAMFASettingRequest({
        mfaSetting,
        next: () => {
          setIsShowGA(true);
        }
      }));
    }
  }

  const handleVerifyGACode = (token: string) => {
    dispatch(AppActions.user.verifyGATokenRequest({
      gaCode: token,
      next: () => {
        setIsShowGA(false);
      }
    }));
  }

  return (
    <ProfileViews.TwoFactorView
      user={user}
      mfaSetting={mfaSetting}
      isShowGA={isShowGA}
      // verify={verify}
      verify=""
      // changeTwoFactorMethod={handleChangeTwoFactorMethod}
      // generateQRCode={handleGenerateQRCode}
      // sendVerifyCode={handleSendVerifyCode}
      changeTwoFactorMethod={handleChangeMethod}
      verifyGAToken={handleVerifyGACode}
    />
  );
};
