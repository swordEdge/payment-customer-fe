import React, { useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, IconButton, InputAdornment, OutlinedInput } from '@mui/material';
import { IAccount, ITransfer } from 'new_models';

// sub component
import { SelectAccountTableComponent } from '../AccountTable';
import { SelectAccountStyle } from './index.style';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
>;

type SelectAccountProps = {
  transfer: ITransfer;
  onSelectedFrom: (item: ISubAccountType) => void;
  accounts: ISubAccountType[];
};

export const SelectAccountComponent: React.FC<SelectAccountProps> = ({
  transfer,
  onSelectedFrom,
  accounts,
}) => {

  const [isSelectAccount, setIsSelectAccount] = useState<boolean>(false);
  const onSelected = (item: ISubAccountType) => {
    onSelectedFrom(item);
  };

  return (
    <SelectAccountStyle>
      <Box className='transfer-amount-title'>
        <Box className='transfer-amount-title-content'>
          Select source of funds to transfer
        </Box>
        <Box>
          <OutlinedInput
            className='search-container'
            type='text'
            autoComplete='off'
            placeholder='Search'
            startAdornment={
              <InputAdornment position='start'>
                <IconButton
                  aria-label='toggle password visibility'
                  edge='start'
                >
                  <SearchOutlinedIcon className='search-icon' />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </Box>

      <Box className='select-account-body'>
        <SelectAccountTableComponent
          data={accounts}
          selectedId={transfer.fromAccountId}
          onSelected={onSelected}
        />
      </Box>
    </SelectAccountStyle>
  );
};
