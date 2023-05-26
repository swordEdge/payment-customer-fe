import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BusinessVeriffViews } from 'components/view';
import { AppActions, RootState, AppDispatch } from 'new_redux/store';
import { PATH } from 'consts';

export const SessionContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { user } = useSelector((state: RootState) => state.auth);

  const handleFinishKYC = (uuid: string) => {
    navigate(PATH.LANDING);
    dispatch(AppActions.user.finishKYCRequest({ uuid }))
  }

  return <BusinessVeriffViews.SessionView user={user} finishKYC={handleFinishKYC} />;
};
