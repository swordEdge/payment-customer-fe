import React from 'react';

import { Box } from '@mui/material';

import { DropDownComponent } from '../DropDown';
import { AccountSelectComponentStyle } from './index.style';

type Props = {
  values: string[];
  accountNumber: string;
  accountBalance: string;
};

export const AccountSelectComponent: React.FC<Props> = ({
  values,
  accountNumber,
  accountBalance,
}) => {
  const onChangeValue = (value: string) => {
  };
  return (
    <AccountSelectComponentStyle>
      <Box className='account-select-container'>
        Select an account
        <Box className='select-container'>
          <DropDownComponent
            required={false}
            label=''
            values={values}
            onChangeValue={onChangeValue}
          />
        </Box>
        <Box className='account-number'>Account Number: {accountNumber}</Box>
        <Box className='account-balance'>Account Balance: {accountBalance}</Box>
      </Box>
    </AccountSelectComponentStyle>
  );
};
