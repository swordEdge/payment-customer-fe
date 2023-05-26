import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  authReducer,
  authActions,
  currencyActions,
  currencyReducer,
  accountActions,
  accountReducer,
  userActions,
  userReducer,
  beneficiaryActions,
  beneficiaryReducer,
  saasUserCorporationActions,
  saasUserCorporationReducer,
  transactionActions,
  transactionReducer,
  businessActions,
  businessReducer,
  subscriptionReducer,
  subscriptionActions
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  currency: currencyReducer,
  account: accountReducer,
  user: userReducer,
  beneficiary: beneficiaryReducer,
  saasUserCorporation: saasUserCorporationReducer,
  transaction: transactionReducer,
  business: businessReducer,
  subscription: subscriptionReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
});


export const AppActions = {
  loading: loadingActions,
  auth: authActions,
  currency: currencyActions,
  account: accountActions,
  user: userActions,
  beneficiary: beneficiaryActions,
  saasUserCorporation: saasUserCorporationActions,
  transaction: transactionActions,
  business: businessActions,
  subscription: subscriptionActions,
};

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;