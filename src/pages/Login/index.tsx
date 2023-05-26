import React from 'react';
import { Navigate } from 'react-router-dom';
import { Outlet, Route, Routes } from 'react-router-dom';

import { TwoFactorPage } from './TwoFactor';
import { LoginByEmailPage } from './LoginByEmail';
import { LoginByPhonePage } from './LoginByPhone';

import { withLogoLayout } from 'components';

import { PATH } from 'consts';

export const LoginPage = withLogoLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path={PATH.INDEX} element={<LoginByEmailPage />} />
        <Route path={PATH.LOGIN_BY_EMAIL} element={<LoginByEmailPage />} />
        <Route path={PATH.LOGIN_BY_PHONE} element={<LoginByPhonePage />} />

        <Route path={PATH.LOGIN_CHECK_EMAIL} element={<TwoFactorPage />} />
        <Route
          path={PATH.LOGIN_CHECK_AUTHENTICATOR}
          element={<TwoFactorPage />}
        />
        <Route path={PATH.LOGIN_CHECK_SMS} element={<TwoFactorPage />} />

        <Route path={PATH.ALL} element={<Navigate to={PATH.LOGIN_BY_EMAIL} />} />
      </Routes>
    </>
  );
});
