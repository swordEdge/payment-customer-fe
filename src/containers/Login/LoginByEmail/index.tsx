import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginViews } from 'components';
import { AppActions, AppActionTypes, AppDispatch } from 'new_redux/store';
import { useTimedNotification } from 'hooks';

export const LoginByEmailContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [errorContent, setErrorContent] = useState<string>("");

  const signIn = (data: AppActionTypes.Auth.ISignInRequestAction) => {
    dispatch(AppActions.auth.signInRequest({
      ...data,
      errorAction: (errorMsg: string) => {
        setErrorContent(errorMsg);
        notificationShow();
      }
    }));
  }

  const {
    isShowing: isNotificationShowing,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  return (
    <LoginViews.LoginByEmailView
      signIn={signIn}
      isError={isNotificationShowing}
      errorContent={errorContent}
      closeError={notificationClose}
    />
  );
};
