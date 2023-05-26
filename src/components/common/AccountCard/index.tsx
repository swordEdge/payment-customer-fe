import React from 'react';

import { Box } from '@mui/material';
import { IAccount } from 'new_models';

import { AccountCardComponentStyle } from './index.style';

type AccountCardComponentProps = {
  account: IAccount;
  onAccountClicked: (id: number) => void;
};

export const AccountCardComponent: React.FC<AccountCardComponentProps> = ({
  account,
  onAccountClicked,
}) => {
  const AccountClick = () => {
    onAccountClicked(account.id);
  };
  return (
    <AccountCardComponentStyle onClick={AccountClick} color={account.color}>
      <Box className='card-header'> {account.name} </Box>
      <Box className='card-content'> {account.accountNumber} </Box>
      <Box className='card-footer'>
        {`${account.currencySymbol} ${Number(account.totalBalance).toFixed(2)}`}
        <Box className='currency-container'>{account.currencyCode}</Box>
      </Box>
    </AccountCardComponentStyle>
  );
};
