import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFee } from 'models';

type StateType = {
  subscriptionID: number;
  subscriptions: IFee[];
  gettingSubscription: boolean;
  gotSubscription: boolean;
  updatingSubscription: boolean;
  updatedSubscription: boolean;
  error?: any;
  deleted: boolean;
};

const intialState: StateType = {
  subscriptionID: 0,
  subscriptions: [],
  gettingSubscription: false,
  gotSubscription: false,
  updatingSubscription: false,
  updatedSubscription: false,
  deleted: false,
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: intialState,
  reducers: {
    /**
     * getsubscriptions
     */

    getSubscriptions(state: StateType) {
      state.gettingSubscription = true;
      state.gotSubscription = false;
    },
    getSubscriptionsSuccess(state, action) {
      state.gettingSubscription = false;
      state.gotSubscription = true;
      state.subscriptions = action.payload;
    },
    getSubscriptionsError(state, action) {
      state.gettingSubscription = false;
      state.gotSubscription = false;
      state.error = action.payload;
    },
    /**
     * getSubscription
     */
    getSubscription(state) {
      state.gettingSubscription = true;
      state.gotSubscription = false;
    },
    getSubscriptionSuccess(state, action) {
      state.gettingSubscription = false;
      state.gotSubscription = true;
      state.subscriptionID = action.payload;
    },
    getSubscriptionError(state, action) {
      state.gettingSubscription = false;
      state.gotSubscription = false;
      state.error = action.payload;
    },
    /**
     * updateSubscription
     */
    updateSubscription(state: StateType, payload: PayloadAction<number>) {
      state.updatingSubscription = true;
      state.updatedSubscription = false;
    },
    updateSubscriptionSuccess(state, action) {
      state.updatingSubscription = false;
      state.updatedSubscription = true;
      // state.subscriptionID = action.payload;
    },
    updateSubscriptionError(state, action) {
      state.updatingSubscription = false;
      state.updatedSubscription = false;
      state.error = action.payload;
    },
  },
});

export const actions = subscriptionSlice.actions;
export const reducer = subscriptionSlice.reducer;
