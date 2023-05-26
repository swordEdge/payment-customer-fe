import React, { useEffect, useState } from 'react';

import ClearIcon from '@mui/icons-material/Clear';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Box, Button, Typography } from '@mui/material';
// import { Account, ICurrency } from 'models';
import { IAccount, ICurrency } from 'new_models';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AccountInfoViewStyle } from './index.style';

type AccountInfoViewProps = {
  onCloseAccount: () => void;
  id: string;
  currencies: ICurrency[];
  account: IAccount;
};

export const AccountInfoView: React.FC<AccountInfoViewProps> = ({
  onCloseAccount,
  currencies,
  account,
}) => {
  const [currencySymbol, setCurrencySymbol] = useState<string>('');
  const [currencyUnit, setCurrencyUnit] = useState<string>('');

  const onCloseAccountClick = () => {
    onCloseAccount();
  };

  // useEffect(() => {
  //   if (account.currency) {
  //     const currency = currencies.find((curr) => {
  //       if (curr.id === account.currency) {
  //         return curr;
  //       }
  //     });
  //     setCurrencySymbol(currency?.symbol || '');
  //     setCurrencyUnit(currency?.unit || '');
  //   }
  // }, [account]);

  return (
    <AccountInfoViewStyle>
      <Box className='title-container'>
        <Typography className='title-typo'>{account?.name}</Typography>
        <Box className='action-bar-container'>
          <Button
            onClick={() => { }}
            className='close-button'
            variant='outlined'
          >
            <ContentCopyIcon sx={{ fontSize: '1rem' }} />
            Copy Account Detail
          </Button>

          <Button
            onClick={onCloseAccountClick}
            className='close-button'
            variant='outlined'
          >
            <ClearIcon sx={{ fontSize: '1.2rem' }} />
            Close Account
          </Button>
        </Box>
      </Box>

      <Box className='card-container'>
        <Swiper
          className='card-array-container'
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            250: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide key={0} className='balance-card'>
            <Box className='card-header'> Account balance </Box>
            <Box className='card-content'>
              {account.currencySymbol} {account.totalBalance}
              <Box className="currency-unit"> {account.currencyCode} </Box>
            </Box>
            <Box className='card-footer'> {account.currencyCode} </Box>
            <Box className='detail-info'>
              <Box className='each-info'>
                <Box> Account Number </Box>
                <Box> {account.accountNumber} </Box>
              </Box>
              <Box className='each-info'>
                <Box> Rewards Rate </Box>
                <Box> 2.00% </Box>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide key={1} className='detail-card'>
            <Box className='card-header'>

              <Box>Account detail</Box>
            </Box>
            <Box className='card-content'>

              <Box>Account Number: {account.accountNumber} </Box>
              <Box>IBAN: {account.iban} </Box>
              {/* <Box>
                Account Number: {account.accountNumber}
              </Box> */}
            </Box>
            {/* <Box className='card-footer'> Rewards Rate: 2.00% </Box> */}
          </SwiperSlide>
        </Swiper>
      </Box>
    </AccountInfoViewStyle>
  );
};
