import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { SessionPage } from './Session';
import { KYCPendingPage } from './KYCPending';
import { KYCRejectPage } from './KYCReject';

import { withLogoLayout } from 'components';

import { PATH } from 'consts';

export const VeriffPage = withLogoLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route
          path={PATH.VERIFF_SESSION}
          element={<SessionPage />}
        ></Route>
        <Route
          path={PATH.VERIFF_PENDING}
          element={<KYCPendingPage />}
        ></Route>
        <Route
          path={PATH.VERIFF_REJECT}
          element={<KYCRejectPage />}
        ></Route>
        <Route
          path={PATH.ALL}
          element={
            <Navigate to={`${PATH.VERIFF_INDEX}/${PATH.VERIFF_SESSION}`} />
          }
        />
      </Routes>
    </>
  );
});
