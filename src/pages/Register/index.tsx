import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { CheckEmailPhonePage } from './CheckEmailPhone';
import { RegisterByEmailPage } from './RegisterByEmail';
import { RegisterByPhonePage } from './RegisterByPhone';
import { RegisterSuccessPage } from './RegisterSuccess';

import { withLogoLayout } from 'components';

import { PATH } from 'consts';

export const RegisterPage = withLogoLayout(() => {
  return (
    <>
      <Routes>
        <Route path={PATH.INDEX} element={<RegisterByEmailPage />} />
        <Route path={PATH.REGISTER_BY_EMAIL} element={<RegisterByEmailPage />} />
        <Route path={PATH.REGISTER_BY_PHONE} element={<RegisterByPhonePage />} />
        <Route path={PATH.REGISTER_CHECK_EMAIL} element={<CheckEmailPhonePage />} />
        <Route path={PATH.REGISTER_CHECK_SMS} element={<CheckEmailPhonePage />} />

        <Route path={PATH.REGISTER_SUCCESS} element={<RegisterSuccessPage />} />

        <Route
          path={PATH.ALL}
          element={<Navigate to={PATH.REGISTER_INDEX} />}
        />
      </Routes>
    </>
  );
});
