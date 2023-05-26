import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BusinessVeriffViews } from 'components/view';

import { AppActions, RootState } from 'new_redux/store';

export const KYCRejectContainer = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  return <BusinessVeriffViews.KYCRejectView />;
};