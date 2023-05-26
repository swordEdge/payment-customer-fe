import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import { Box, Typography } from '@mui/material';
// import { Account, ICurrency } from 'models';
import { IAccount, ICurrency } from 'new_models';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { AccountOverviewViewStyle } from './index.style';

import { AccountCardComponent } from 'components/common';

type AccountViewProps = {
  currencies: ICurrency[];
  accounts: IAccount[];
  onNewAccount: () => void;
};

export const AccountOverviewView: React.FC<AccountViewProps> = ({
  currencies,
  accounts,
  onNewAccount,
}) => {
  const navigate = useNavigate();

  const onAccountClicked = (id: number) => {
    navigate(`/account/detail/${id}`);
  };

  return (
    <AccountOverviewViewStyle>
      <Box className='title-container'>
        <Typography className='title-typo'> Account List </Typography>
        <Box className='title-add' onClick={() => onNewAccount()}>
          
          <AddIcon />
        </Box>
      </Box>

      <Box className='card-container'>
        <Swiper
          className='card-array-container'
          autoplay
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            1100: {
              slidesPerView: 4,
            },
            321: {
              slidesPerView: 2,
            },
            250: {
              slidesPerView: 1,
            },
          }}
        >
          {accounts.length > 0 &&
            accounts.map((card, index) => {
              return (
                <SwiperSlide key={index} className='each-card'>
                  <Link to={`/account/${card.id}`}>
                    <AccountCardComponent
                      account={card}
                      onAccountClicked={onAccountClicked}
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Box>
    </AccountOverviewViewStyle>
  );
};
