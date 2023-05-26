import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { ServiceBeneficiaryPage } from './Beneficiary';
import { ServiceDebitsPage } from './Debits';
import { ServiceOrdersPage } from './Orders';
import { ServiceOverviewPage } from './Overview';
import { ServiceReferralsPage } from './Referrals';
import { ChangeSubscriptionPage, ServiceSubscriptionPage } from './Subscription';

import { withDashboardLayout } from 'components/common/layout';

import { PATH } from 'consts';

export const ServicesPage = withDashboardLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route
          path={PATH.SERVICES_BENEFICIARY}
          element={<ServiceBeneficiaryPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_DEBITS}
          element={<ServiceDebitsPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_ORDERS}
          element={<ServiceOrdersPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_REFERRALS}
          element={<ServiceReferralsPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_SUBSCRIPTION}
          element={<ServiceSubscriptionPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_SUBSCRIPTION_CHANGE}
          element={<ChangeSubscriptionPage />}
        ></Route>
        <Route
          path={PATH.SERVICES_OVERVIEW}
          element={<ServiceOverviewPage />}
        ></Route>
        <Route
          path={PATH.ALL}
          element={
            <Navigate to={`${PATH.SERVICES_INDEX}/${PATH.SERVICES_OVERVIEW}`} />
          }
        />
      </Routes>
    </>
  );
});
