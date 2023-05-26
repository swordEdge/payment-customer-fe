import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISubscription, IUser } from "new_models";

import * as AppActionTypes from "../types";

type SubscriptionState = {
  subscriptionId?: number;
  subscription?: ISubscription;
  subscriptions: ISubscription[];
};

const initialState: SubscriptionState = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {
    getSubscriptionsRequest(
      _state: SubscriptionState,
      _action: PayloadAction<AppActionTypes.Subscription.IGetSubscriptionsRequestAction>
    ) {},
    getSubscriptionsSuccess(
      state: SubscriptionState,
      action: PayloadAction<AppActionTypes.Subscription.IGetSubscriptionsSuccessAction>
    ) {
      state.subscriptions = action.payload.subscriptions;
    },
    getSubscriptionsFailure(_state: SubscriptionState) {},
    getSubscriptionRequest(
      _state: SubscriptionState,
      _action: PayloadAction<AppActionTypes.Subscription.IGetSubscriptionRequestAction>
    ) {},
    getSubscriptionSuccess(
      state: SubscriptionState,
      action: PayloadAction<AppActionTypes.Subscription.IGetSubscriptionSuccessAction>
    ) {
      state.subscription = action.payload.subscription;
    },
    getSubscriptionFailure(_state: SubscriptionState) {},
    selectSubscriptionRequest(
      _state: SubscriptionState,
      _action: PayloadAction<AppActionTypes.Subscription.ISelectSubscriptionRequestAction>
    ) {},
    selectSubscriptionSuccess(
      state: SubscriptionState,
      action: PayloadAction<AppActionTypes.Subscription.ISelectSubscriptionSuccessAction>
    ) {
      state.subscription = action.payload.subscription;
    },
    selectSubscriptionFailure(_state: SubscriptionState) {},
  },
});

export const reducer = subscriptionSlice.reducer;
export const actions = subscriptionSlice.actions;
