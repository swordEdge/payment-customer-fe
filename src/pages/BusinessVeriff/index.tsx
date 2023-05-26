import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { SessionPage } from './Session';
import { KYCPendingPage } from './KYCPending';
import { KYCRejectPage } from './KYCReject';

import { withLogoLayout } from '../../components/common';

import { PATH } from '../../consts';

export const BusinessVeriffPage = withLogoLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path={PATH.INDEX} element={<SessionPage />} />
        <Route
          path={PATH.BUSINESS_MEMBER_VERIFF_SESSION}
          element={<SessionPage />}
        ></Route>
        <Route
          path={PATH.BUSINESS_MEMBER_VERIFF_PENDING}
          element={<KYCPendingPage />}
        ></Route>
        <Route
          path={PATH.BUSINESS_MEMBER_VERIFF_REJECT}
          element={<KYCRejectPage />}
        ></Route>
        <Route path={PATH.ALL} element={<Navigate to={PATH.BUSINESS_MEMBER_VERIFF_INDEX} />} />
      </Routes>
    </>
  );
});
