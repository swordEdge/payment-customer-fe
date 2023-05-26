import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ServiceViews } from 'components';

import { AppActions, RootState } from 'redux/store';

// import { setDefaultVerify } from "../../../redux/slices/user.slice";

export const DebitsContainer = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setDefaultVerify());
  // }, []);

  return <ServiceViews.ServiceDebitsView />;
};
