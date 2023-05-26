import { ISubscription } from "new_models";
import { IAction } from "../action";

export type IGetSubscriptionsRequestAction = IAction & {};

export type IGetSubscriptionsSuccessAction = {
  subscriptions: ISubscription[];
};

export type ISelectSubscriptionRequestAction = IAction & {
  subscriptionId: number;
};

export type ISelectSubscriptionSuccessAction = {
  subscription: ISubscription;
};

export type IGetSubscriptionRequestAction = IAction & {};

export type IGetSubscriptionSuccessAction = {
  subscription: ISubscription;
};
