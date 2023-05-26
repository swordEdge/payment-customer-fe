import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { ChangePasswordPage } from './ChangePassword';
import { LanguagePage } from './Language';
import { MessagesPage } from './Messages';
import { NotificationsPage } from './Notifications';
import { OverviewPage } from './Overview';
import { PersonalInfoPage } from './PersonalInfo';
import { TwoFactorPage } from './TwoFactor';
import { BusinessProfilePage } from './BusinessProfile';
import { NewDirectorShareholderPage } from './NewDirectorShareholder';

import { withDashboardLayout } from 'components/common/layout';

import { PATH } from 'consts';

export const ProfilePage = withDashboardLayout(() => {
  return (
    <>
      <Outlet />
      <Routes>
        <Route path={PATH.PROFILE_OVERVIEW} element={<OverviewPage />}></Route>
        <Route path={PATH.BUSINESS_PROFILE} element={<BusinessProfilePage />}></Route>
        <Route path={PATH.PROFILE_INFO} element={<PersonalInfoPage />}></Route>
        <Route
          path={PATH.PROFILE_CHANGE_PASSWORD}
          element={<ChangePasswordPage />}
        ></Route>
        <Route path={PATH.PROFILE_MESSAGES} element={<MessagesPage />}></Route>
        <Route path={PATH.PROFILE_LANGUAGE} element={<LanguagePage />}></Route>
        <Route
          path={PATH.PROFILE_NOTIFICATIONS}
          element={<NotificationsPage />}
        ></Route>
        <Route
          path={PATH.PROFILE_TWO_FACTOR}
          element={<TwoFactorPage />}
        ></Route>
        <Route
          path={PATH.PROFILE_NEW_DIRECTOR}
          element={<NewDirectorShareholderPage />}
        ></Route>
        <Route
          path={PATH.PROFILE_NEW_SHAREHOLDER}
          element={<NewDirectorShareholderPage />}
        ></Route>
        <Route
          path={PATH.ALL}
          element={
            <Navigate to={`${PATH.PROFILE_INDEX}/${PATH.PROFILE_INFO}`} />
          }
        />
      </Routes>
    </>
  );
});
