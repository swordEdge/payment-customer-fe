import React from 'react';
import { Box, Typography, BoxProps } from '@mui/material';
import { MobileAccountTableComponentStyle } from './index.style';
import { IAccount } from 'new_models';
import { CheckedSvg } from 'assets/icons';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance' | 'imgLink'
>;

type MobileAccountTableComponentProps = BoxProps & {
  accounts: ISubAccountType[];
  seleted: ISubAccountType;
  setCurrentAccount: (index: ISubAccountType) => void;
};

export const MobileAccountTableComponent: React.FC<MobileAccountTableComponentProps> = (props) => {
  const { accounts, seleted, setCurrentAccount } = props;

  return <MobileAccountTableComponentStyle>
    {
      accounts.map((account, index) => (
        <Box className="each-field bg-color-white" key={index} onClick={() => setCurrentAccount(account)}>
          <Box className="field-info">
            <img className="avatar" src={account.imgLink ?? '/asset/Avatars/sample2.jpg'} alt="" />
            <Box>
              <Typography> {account.name} </Typography>
              <Typography className="account-number"> {account.accountNumber} </Typography>
            </Box>
          </Box>
          <Box className="field-value">
            {
              account.id === seleted.id
                ? <img src={CheckedSvg} />
                : <></>
            }
          </Box>
        </Box>
      ))
    }
  </MobileAccountTableComponentStyle >
}