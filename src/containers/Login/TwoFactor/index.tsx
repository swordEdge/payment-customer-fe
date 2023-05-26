import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginViews } from 'components';
import { AppDispatch, AppActionTypes, AppActions } from 'new_redux/store';
import { useTimedNotification } from 'hooks';
import { VERIFY_METHOD } from 'consts';

export const TwoFactorContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const resendMFACode = (data: AppActionTypes.Auth.IResendMFACodeRequestAction) => {
    dispatch(AppActions.auth.resendMFACodeRequest({
      ...data,
      errorAction: () => {
        notificationShow();
      }
    }));
  }

  const verifyMFACode = (data: AppActionTypes.Auth.IVerifyMFACodeRequestAction) => {
    if (data.mfaSetting === VERIFY_METHOD.AUTHENTICATOR) {
      dispatch(AppActions.auth.checkGACodeRequest({
        ...data,
        errorAction: () => {
          notificationShow();
        }
      }));
    } else {
      dispatch(AppActions.auth.verifyMFACodeRequest({
        ...data,
        errorAction: () => {
          notificationShow();
        }
      }));
    }
  }

  const {
    isShowing: isNotificationShowing,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  return (
    <LoginViews.TwoFactorView
      resendMFACode={resendMFACode}
      verifyMFACode={verifyMFACode}
      isInvalid={isNotificationShowing}
      notificationClose={notificationClose}
    />
  );
};
