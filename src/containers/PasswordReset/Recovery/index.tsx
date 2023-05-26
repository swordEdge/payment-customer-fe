import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PasswordResetViews } from 'components';

import { PATH } from 'consts';

import { AppActions, RootState } from 'redux/store';

export const RecoveryContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error } = useSelector((state: RootState) => state.user);

  const verifyEmailHandler = (emailAddress: string) => {
    dispatch(
      AppActions.user.checkDuplicateUser({
        user: {
          emailAddress,
          isRecovery: true,
        },
        next: () =>
          dispatch(
            AppActions.user.verifyEmail({
              user: {
                firstName: 'User',
                emailAddress: emailAddress,
              },
              next: () => navigate(PATH.PASSWORD_RESET_CONFIRM),
            })
          ),
      })
    );
  };

  return <PasswordResetViews.RecoveryView veifyEmail={verifyEmailHandler} error={error} />;
};
