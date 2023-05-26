import React, { useRef } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
// import { Account, ICurrency } from 'models';
import { IAccountOverview } from 'new_models';
import { type Swiper as SwiperRef } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { CurrencyBalanceOverviewViewStyle } from './index.style';

import { CurrencyBalanceCardComponent } from 'components/common';

type CurrencyBalanceOverviewViewProps = {
  overviewAccounts: IAccountOverview[];
};

export const CurrencyBalanceOverviewView: React.FC<
  CurrencyBalanceOverviewViewProps
> = ({ overviewAccounts }) => {
  const swiperRef = useRef<SwiperRef>();

  const onOverviewPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const onOverviewNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <CurrencyBalanceOverviewViewStyle>
      <Box className='title-container'>
        <Typography className='title-typo'> Account Overview </Typography>
      </Box>

      <Box className='card-container'>
        <Box className='left-button' onClick={onOverviewPrev}>
          <ArrowBackIosIcon className='backward-icon' />
        </Box>
        <Swiper
          className='card-array-container'
          onSwiper={(swiper: SwiperRef) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={20}
          slidesPerView={4}
          breakpoints={{
            1100: {
              slidesPerView: 3,
            },
            321: {
              slidesPerView: 2,
            },
            250: {
              slidesPerView: 1,
            },
          }}
        >
          {overviewAccounts.length > 0 &&
            overviewAccounts.map((card, index) => {
              return (
                <SwiperSlide key={index} className='each-card'>
                  <CurrencyBalanceCardComponent account={card} />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <Box className='right-button' onClick={onOverviewNext}>
          <ArrowForwardIosIcon className='forward-icon' />
        </Box>
      </Box>
    </CurrencyBalanceOverviewViewStyle>
  );
};
