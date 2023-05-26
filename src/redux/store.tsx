import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  userReducer,
  userActions,
  accountReducer,
  accountActions,
  beneficiaryReducer,
  beneficiaryActions,
  currencyReducer,
  currencyActions,
  subscriptionReducer,
  subscriptionActions,
  transactionReducer,
  transactionActions
} from "./slices";

const reducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  account: accountReducer,
  transaction: transactionReducer,
  beneficiary: beneficiaryReducer,
  subscription: subscriptionReducer,
  currency: currencyReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    ),
});


export const AppActions = {
  loading: loadingActions,
  user: userActions,
  account: accountActions,
  transaction: transactionActions,
  beneficiary: beneficiaryActions,
  subscription: subscriptionActions,
  currency: currencyActions,
};

sagaMiddleware.run(rootSaga);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
