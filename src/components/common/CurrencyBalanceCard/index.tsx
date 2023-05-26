import React from 'react';

import { Box } from '@mui/material';
import { IAccountOverview } from 'new_models';

import { CurrencyBalanceCardComponentStyle } from './index.style';

type CurrencyBalanceCardComponentProps = {
  account: IAccountOverview;
};

export const CurrencyBalanceCardComponent: React.FC<
  CurrencyBalanceCardComponentProps
> = ({ account }) => {
  return (
    <CurrencyBalanceCardComponentStyle>
      <Box className='card-header'>{account.code} Balance</Box>
      <Box className='card-content'>
        {`${account.symbol} ${Number(account.balance).toFixed(2)}`}
      </Box>
      <Box className='card-footer'>{account.code}</Box>
    </CurrencyBalanceCardComponentStyle>
  );
};
