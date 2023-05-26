import React from 'react';
import { useDispatch } from 'react-redux';

import { RegisterViews } from 'components/view';

import { AppActions, AppActionTypes, AppDispatch } from 'new_redux/store';

export const RegisterByEmailContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const signUp = (data: AppActionTypes.Auth.ISignUpRequestAction) => {
    dispatch(AppActions.auth.signUpRequest(data));
  };

  return <RegisterViews.RegisterByEmailView signUp={signUp} />;
};
