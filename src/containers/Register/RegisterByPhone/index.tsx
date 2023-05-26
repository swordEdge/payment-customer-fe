import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RegisterViews } from 'components/view';
import { IUser } from 'models';
import { AppActions, AppActionTypes } from 'new_redux/store';

export const RegisterByPhoneContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = (data: AppActionTypes.Auth.ISignUpRequestAction) => {
    dispatch(AppActions.auth.signUpRequest(data));
  };

  return (
    <RegisterViews.RegisterByPhoneView signUp={signUp} />
  );
};
