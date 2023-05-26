import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { VeriffViews } from 'components/view';

import { AppActions, RootState } from 'new_redux/store';

export const KYCPendingContainer = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  return <VeriffViews.KYCPendingView />;
};