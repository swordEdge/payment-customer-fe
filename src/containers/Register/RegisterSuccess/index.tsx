import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RegisterViews } from 'components/view';

import { PATH } from 'consts';

import { RootState } from 'redux/store';
import { AppActions } from 'redux/store';

export const RegisterSuccessContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  const handleGetVendor = (emailAddress: string) => {
    dispatch(
      AppActions.user.getVendor({
        emailAddress,
        next: () => navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION)
      })
    );
  };

  return <RegisterViews.RegisterSuccessView user={user} getVendor={handleGetVendor} />;
};
