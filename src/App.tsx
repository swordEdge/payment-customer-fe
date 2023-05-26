import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PATH } from './consts';
import {
  AccountDetailPage,
  AccountsPage,
  CardsPage,
  LandingPage,
  LoginPage,
  PasswordResetPage,
  ProfilePage,
  RegisterPage,
  ServicesPage,
  TransferPage,
  VeriffPage,
  BusinessVeriffPage,
} from './pages';

import { SessionPage } from './pages/BusinessVeriff/Session';

import { LoadingComponent } from './components/common';

import './styles/global.css';
import { PlatformContextProvider } from './contexts';

import { AppActions, AppDispatch, RootState } from './new_redux/store';

export const App: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const loadings = useSelector((state: RootState) => state.loading.status);
  const { token } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token) {
      dispatch(AppActions.auth.getMeRequest({
        errors: {
          USER_IS_NOT_EXIST: () => {
            dispatch(AppActions.auth.logout());
          },
          UNAUTHORIZED: () => {
            dispatch(AppActions.auth.logout());
          }
        }
      }));
    }
  }, [token, dispatch]);

  return (
    <PlatformContextProvider>
      {
        !!loadings.length && <LoadingComponent />
      }
      <Routes>
        {
          token && (
            <>
              <Route path={PATH.ACCOUNTS} element={<AccountsPage />}></Route>
              <Route
                path={PATH.ACCOUNT_DETAIL}
                element={<AccountDetailPage />}
              ></Route>
              <Route path={PATH.CARDS} element={<CardsPage />}></Route>
              <Route path={PATH.TRANSFER} element={<TransferPage />}></Route>
              <Route path={PATH.PROFILE_ALL} element={<ProfilePage />}></Route>
              <Route path={PATH.SERVICES_ALL} element={<ServicesPage />}></Route>
            </>
          )
        }
        {/* {
          !token && (
            <>
              <Route path={PATH.LOGIN_ALL} element={<LoginPage />}></Route>
              <Route path={PATH.REGISTER} element={<RegisterPage />}></Route>
              <Route
                path={PATH.PASSWORD_RESET}
                element={<PasswordResetPage />}
              ></Route>
              <Route path={PATH.LANDING} element={<LandingPage />}></Route>
              <Route path={PATH.VERIFF} element={<VeriffPage />}></Route>
              <Route path={PATH.BUSINESS_MEMBER_VERIFF_ALL} element={<BusinessVeriffPage />}></Route>
            </>
          )
        } */}
        <Route path={PATH.LOGIN_ALL} element={<LoginPage />}></Route>
        <Route path={PATH.REGISTER} element={<RegisterPage />}></Route>
        <Route
          path={PATH.PASSWORD_RESET}
          element={<PasswordResetPage />}
        ></Route>
        <Route path={PATH.LANDING} element={<LandingPage />}></Route>
        <Route path={PATH.VERIFF_ALL} element={<VeriffPage />}></Route>
        <Route path={PATH.BUSINESS_MEMBER_VERIFF_ALL} element={<BusinessVeriffPage />}></Route>
        <Route path={PATH.ALL} element={<Navigate to={PATH.LANDING} />} />
      </Routes>
    </PlatformContextProvider>
  );
};
