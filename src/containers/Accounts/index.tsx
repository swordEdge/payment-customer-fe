import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAccount, ICurrency, ITransaction, IUser } from 'new_models';
import { AccountViews } from 'components';
import { RootState, AppActions, AppDispatch } from 'new_redux/store';


type ICreateAccount = Partial<
  Pick<IAccount, "name" | "currencyId" | "color">
>;

export const AccountsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { currencies } = useSelector((state: RootState) => state.currency);
  const { accounts, overviewAccounts } = useSelector((state: RootState) => state.account);
  const { user } = useSelector((state: RootState) => state.auth);
  const { recentTransactions } = useSelector((state: RootState) => state.transaction);
  const { business } = useSelector((state: RootState) => state.business);

  const handleCreateAccount = (newAccount: ICreateAccount) => {
    dispatch(AppActions.account.createAccountRequest({ account: newAccount }))
  }

  useEffect(() => {
    if (user) {
      dispatch(AppActions.currency.getCurrenciesRequest({}));
      dispatch(AppActions.account.getAccountsRequest({}));
      dispatch(AppActions.account.getAccountOverviewRequest({}));
      dispatch(AppActions.transaction.getRecentTransactionsRequest({}));
    }
  }, [dispatch, user]);

  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);

  return (
    <AccountViews.AccountsView
      user={user ?? {} as IUser}
      business={business}
      currencies={currencies}
      accounts={accounts}
      overviewAccounts={overviewAccounts}
      recentTrans={recentTransactions}
      createAccount={handleCreateAccount}
    />
  );
};
