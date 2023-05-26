import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PasswordResetViews } from 'components';

import { IUser } from 'models';

import { AppActions, RootState } from 'redux/store';

export const ConfirmContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, error } = useSelector((state: RootState) => state.user);

  const handleVerifyUser = (
    emailAddress: string,
    code: string,
    newPassword: string
  ) => {
    dispatch(
      AppActions.user.verifyUser({
        emailAddress,
        code,
        next: () => {
          dispatch(
            AppActions.user.resetPwd({
              emailAddress,
              newPassword,
              next: () => navigate('/login'),
            })
          );
        },
      })
    );
  };

  const handleVerifyEmail = (user: IUser) => {
    dispatch(AppActions.user.verifyEmail({ user, next: () => {} }));
  };

  return (
    <PasswordResetViews.ConfirmView
      verifyUser={handleVerifyUser}
      verifyEmail={handleVerifyEmail}
      user={user}
      error={error}
    />
  );
};
