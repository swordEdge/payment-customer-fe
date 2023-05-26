import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import { DashboardLayoutComponentStyle } from './index.style';

import {
  DesktopNavbarComponent,
  HeaderComponent,
  MobileNavbarComponent,
} from 'components/common';

import { AppActions } from 'redux/store';

type DashboardLayoutComponentProps = {
  children: React.ReactNode;
};

export const DashboardLayoutComponent: React.FC<
  DashboardLayoutComponentProps
> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AppActions.user.logouts({ logout: 'logout' }));
  };

  useEffect(() => {
    // if (!localStorage.getItem('token')) {
    //   navigate(PATH.LOGIN_ALL);
    // } else {
    // dispatch(AppActions.subscription.getSubscription());
    // dispatch(AppActions.subscription.getSubscriptions());
    //   dispatch(AppActions.user.getMe());
    // }
  }, []);

  return (
    <DashboardLayoutComponentStyle>
      <Box className='navbar-container'>
        <DesktopNavbarComponent
          currentPath={location.pathname}
          logout={handleLogout}
        />
      </Box>

      <Box className='mobile-navbar-container'>
        <MobileNavbarComponent currentPath={location.pathname} />
      </Box>

      <Box className='main-container'>
        <Box className='header-container'>
          <HeaderComponent />
        </Box>

        <Box className='body-container'>{children}</Box>
      </Box>
    </DashboardLayoutComponentStyle>
  );
};

export const withDashboardLayout =
  (Page: React.FC): React.FC =>
  () => {
    return (
      <DashboardLayoutComponent>
        <Page />
      </DashboardLayoutComponent>
    );
  };
