import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

import { ConfirmPage } from './Confirm';
import { RecoveryPage } from './Recovery';

import { withLogoLayout } from 'components';

import { PATH } from 'consts';

export const PasswordResetPage = withLogoLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path='*' element={<RecoveryPage />} />
        <Route path={PATH.PASSWORD_RESET_CONFIRM} element={<ConfirmPage />} />
      </Routes>
    </>
  );
});
