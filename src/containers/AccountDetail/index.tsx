import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { IAccount, ICurrency, ITransaction } from 'new_models';

import { AccountDetailViews } from 'components';

import { DetailTransaction } from 'models';

import { AppActions, RootState } from 'new_redux/store';

const newCorrencies: ICurrency[] = [
  {
    id: 1,
    code: 'USD',
    symbol: '$',
    avatar: '',
  },
  {
    id: 2,
    code: 'EUR',
    symbol: '€',
    avatar: '',
  },
  {
    id: 3,
    code: 'GBP',
    symbol: '£',
    avatar: '',
  },
];

const newAccount: IAccount = {
  id: 1,
  name: 'USD Account',
  accountNumber: '60412839007',
  totalBalance: 3814.23,
  availableBalance: 1234,
  currencyId: 0,
  currencyCode: 'USD',
  currencySymbol: '$',
  color: 'gradientBlue',
  status: 1,
  bankName: 'Clear Bank',
  bankAddress: 'Singapore, Singapore',
  sortCode: '4232DFDF3432',
  iban: '231123423234',
  bicSwift: 'SDEd3433Ddf',
  type: 1,
};

const accountTransactions: Pick<
  ITransaction,
  | 'id'
  | 'name'
  | 'create_at'
  | 'inOuts'
  | 'amount'
  | 'accountName'
  | 'accountNumber'
  | 'cpDisplayName'
  | 'currencySymbol'
>[] = [
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: true,
      amount: 3423.34,
      accountName: 'EUR Account',
      accountNumber: '643434',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Money Out',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: true,
      amount: 3423.34,
      accountName: 'EUR Account',
      accountNumber: '643434',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Money Out',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Transfer Between Members',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: true,
      amount: 3423.34,
      accountName: 'EUR Account',
      accountNumber: '643434',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
    {
      id: 1,
      name: 'Money Out',
      create_at: '18 Aug 2022, 10:20am',
      inOuts: false,
      amount: 399.34,
      accountName: 'EUR Account',
      accountNumber: '123123',
      cpDisplayName: 'Eoin Cornan',
      currencySymbol: '€',
    },
  ];

const detailTransaction: ITransaction = {
  id: 1,
  name: 'Transfer Between Member',
  email: 'eoin@gmail.com',
  displayName: 'Eoin Cronne',
  accountName: 'USD account',
  accountNumber: '14121223',
  cpAccountEmail: 'nakao@gmail.com',
  cpAccountName: '$ account',
  cpAccountNumber: '33423432',
  cpDisplayName: 'Nakao AKira',
  inOuts: true,
  amount: 100121,
  description: 'This is the bouns of this month work',
  type: 1,
  currencyCode: 'USD',
  currencySymbol: '$',
  feeAmount: 100,
  feeCurrencyCode: 'USD',
  feeCurrencySymbol: '$',
  rate: 10,
  comment: 'This is the comment',
  status: 1,
  create_at: '01/02/2023',
  updatedAt: '01/21/2023',
};

export const AccountDetailContainer = () => {
  const dispatch = useDispatch();

  const { currencies } = useSelector((state: RootState) => state.currency);
  const { account } = useSelector((state: RootState) => state.account);
  const { transactions, transaction } = useSelector((state: RootState) => state.transaction);
  // const { expired } = useSelector((state: RootState) => state.user);
  // const { accountTrans, transactinoById } = useSelector(
  //   (state: RootState) => state.transaction
  // );

  const [transactionId, setTransactionId] = useState<string>('');

  const { id } = useParams<{ id: string }>();

  const handleDeleteAccount = (id: string) => {
    // dispatch(AppActions.account.deleteAccount({ id: id }));
  };

  useEffect(() => {
    if (id) {
      dispatch(AppActions.account.getAccountRequest({ accountId: parseInt(id) }));
      dispatch(AppActions.transaction.getTransactionsRequest({ accountId: parseInt(id) }));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (transactionId) {
      dispatch(AppActions.transaction.getDetailTransactionRequest({ transactionId: parseInt(transactionId) }));
    }
  }, [transactionId])

  useEffect(() => {
    sessionStorage.removeItem("step");
    sessionStorage.removeItem("transfer");
  }, []);

  return (
    <AccountDetailViews.AccountDetailView
      id={id || ''}
      account={account}
      currencies={newCorrencies}
      accountTrans={transactions}
      // expired={expired}
      expired={false}
      transactionById={transaction}
      deleteAccount={handleDeleteAccount}
      setTransactionId={setTransactionId}
    />
  );
};
