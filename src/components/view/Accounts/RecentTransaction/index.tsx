import React from 'react';

import { Box } from '@mui/material';
// import { Transaction } from 'models';
import { ITransaction } from 'new_models';

import { TransactionViewStyle } from './index.style';

import { TableComponent, MobileTableElementComponent } from 'components/common';

const columns = [
  {
    value: 'DATE & TIME',
    align: 'left',
    width: '20%',
  },
  {
    value: 'NAME',
    align: 'left',
    width: '20%',
  },
  {
    value: 'DESCRIPTION',
    align: 'left',
    width: '44%',
  },
  {
    value: 'AMOUNT',
    align: 'left',
    width: '15%',
  },
];

type TransactionViewProps = {
  recentTrans: Pick<
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
  >[];
};

const mockTransactions = [
  {
    id: 1,
    create_at: '18 Aug 2022, 06:30 PM',
    amount: 1.297,
    currencySymbol: '$',
    inOuts: false
  },
  {
    id: 2,
    title: 'Transfer between members',
    create_at: '18 Aug 2022, 06:30 PM',
    amount: 1234,
    currencySymbol: '$',
    inOuts: true
  },
  {
    id: 3,
    title: 'Transfer between members',
    create_at: '18 Aug 2022, 06:30 PM',
    amount: 1.297,
    currencySymbol: '€',
    inOuts: true
  }
];

export const RecentTransactionView: React.FC<TransactionViewProps> = ({
  recentTrans,
}) => {
  const onClicked = (id: string) => {
  };

  return (
    <TransactionViewStyle>
      <Box className='title-container'> Recent Transactions </Box>
      <Box className='transaction-table-container'>
        <TableComponent
          columns={columns}
          rows={recentTrans ? recentTrans : []}
          onClicked={onClicked}
        />
      </Box>
      <Box className="mobile-transaction-table">
        {
          mockTransactions.map((transaction, index) => (
            <MobileTableElementComponent
              key={index}
              elementId={transaction.id}
              create_at={transaction.create_at}
              inOuts={transaction.inOuts}
              amount={transaction.amount}
              currencySymbol={transaction.currencySymbol}
            />
          ))
        }
        <Box sx={{ height: '3rem' }}></Box>
      </Box>
    </TransactionViewStyle>
  );
};
