import React from 'react';
import { Box } from '@mui/material';
import { MobileHeaderComponent } from 'components/common';
import { MobileSelectAccountViewStyle } from './index.style';
import { CheckedSvg } from 'assets/icons';
import { IAccount } from 'new_models';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance' | 'imgLink' | 'currencySymbol'
>;

type MobileSelectAccountViewProps = {
  accounts: ISubAccountType[];
  currentAccount?: ISubAccountType;
  setCurrentAccount: (account: ISubAccountType) => void;
  closeSelectAccount: (close: boolean) => void;
};

export const MobileSelectAccountView: React.FC<MobileSelectAccountViewProps> = (props) => {
  const { accounts, currentAccount, setCurrentAccount, closeSelectAccount } = props;

  return <MobileSelectAccountViewStyle>
    <Box className='mobile-header-container'>
      <MobileHeaderComponent
        title='Select Account'
        backPath="ASD"
        prevAction={() => closeSelectAccount(false)}
      />
      <Box sx={{ height: '6rem' }}> </Box>
    </Box>
    {
      accounts.map((account, index) => (
        <Box className="account-item" onClick={() => setCurrentAccount(account)}>
          <Box> {account.name} </Box>
          <Box> {account.id === currentAccount?.id ? <img src={CheckedSvg} /> : ''} </Box>
        </Box>
      ))
    }
  </MobileSelectAccountViewStyle>
};