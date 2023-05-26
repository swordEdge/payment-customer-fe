import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterViews } from 'components/view';
import { AppDispatch, AppActionTypes, AppActions } from 'new_redux/store';
import { useTimedNotification } from 'hooks';

export const CheckEmailPhoneContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [errorContent, setErrorContent] = useState<string>("");

  const {
    isShowing: isNotificationShowing,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  const resendSignUpCode = (data: AppActionTypes.Auth.IResendSignUpCodeRequestAction) => {
    dispatch(AppActions.auth.resendSignUpCodeRequest({
      ...data,
      errorAction: (errorMsg: string) => {
        setErrorContent(errorMsg);
        notificationShow();
      }
    }));
  }

  const verifySignUpCode = (data: AppActionTypes.Auth.IVerifySignUpCodeRequestAction) => {
    dispatch(AppActions.auth.verifySignUpCodeRequest({
      ...data,
      errorAction: (errorMsg: string) => {
        setErrorContent(errorMsg);
        notificationShow();
      }
    }));
  }

  return (
    <RegisterViews.CheckEmailPhoneView
      resendSignUpCode={resendSignUpCode}
      verifySignUpCode={verifySignUpCode}
    />
  );
};
