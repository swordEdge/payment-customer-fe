import { IAccount, IAccountOverview } from "new_models";
import { IAction } from "../action";

type ICreateAccount = Partial<
  Pick<IAccount, "name" | "currencyId" | "color">
>;

// Get Accounts Request
export type IGetAccountsRequestAction = IAction;
export type IGetAccountsSuccessAction = IAction & {
  accounts: IAccount[]
};

// Get Account Request
export type IGetAccountRequestAction = IAction & {
  accountId: number
}
export type IGetAccountSuccessAction = IAction & {
  account: IAccount
};

// Get Account Overview
export type IGetAccountOverviewRequestAction = IAction;
export type IGetAccountOverviewSuccessAction = IAction & {
  accountOverview: IAccountOverview[]
}

// Create Account
export type ICreateAccountRequestAction = IAction & {
  account: ICreateAccount
};
export type ICreateAccountSuccessAction = IAction;