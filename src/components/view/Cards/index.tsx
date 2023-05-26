import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { OrderCardModelView } from './OrderCardModel';
import { CardsViewStyle } from './index.style';
import { ToggleComponent, MobileHeaderComponent } from 'components/common';
import { IToggleButton } from 'models';

const buttons: IToggleButton[] = [
  {
    title: 'All cards',
    path: '',
  },
  {
    title: 'Physical cards',
    path: '',
  },
  {
    title: 'Virtual cards',
    path: '',
  },
];

const background = [
  'linear-gradient(180deg, #D1F1F8 0%, #D1F1F8 100%)',
  '#F6D7DF',
  '#F6EDCB',
  '#D3D3FE',
  '#CCEDFF',
  '#D2F8D1',
];

type CardsViewProps = {};

export const CardsView: React.FC<CardsViewProps> = ({ }) => {
  const [currentButton, setCurrentButton] = useState<number>(0);
  const [orderCard, setorderCard] = useState<boolean>(false);
  const [orderText] = useState<string>('Order a Card');

  const onOrderCard = () => {
    setorderCard(true);
  };

  const onOrderCardCancel = () => {
    setorderCard(false);
  };

  const onOrderCardConfirm = () => {
    setorderCard(false);
  };

  return (
    <CardsViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent title='Cards' prevAction={() => { }} />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>
      <Box className='overview-container'>
        <Box sx={{ fontSize: '1.2rem' }}> Will be coming soon... </Box>
        {/* <p className='title-text'>My Cards</p>
        <Box className='action-bar-container'>
          <ToggleComponent
            buttons={buttons}
            currentButtons={currentButton}
            setCurrentButtons={setCurrentButton}
            width='10rem'
          />
          <Box className='action-bar-right'>
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
            <Box className='add-order-button' onClick={onOrderCard}>
              <AddIcon />
              <span>Order Card</span>
            </Box>
          </Box>
        </Box> */}

        {/* <Grid container className='visa-card-container' spacing={6}> */}
        {/* <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={true}
              currentBalance={8000.0}
              cashType={'Visa'}
              cardNumber={'5234 6234 8234 3234'}
              lastDate={'03/24'}
              bgColor={background[0]}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={true}
              currentBalance={9000.34}
              cashType={'Visa'}
              cardNumber={'1234-1234-1234-1234'}
              lastDate={'03/24'}
              bgColor={background[1]}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={false}
              currentBalance={555}
              cashType={'Visa'}
              cardNumber={'1234-1234-1234-1234'}
              lastDate={'03/24'}
              bgColor={background[2]}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={false}
              currentBalance={8000.0}
              cashType={'Visa'}
              cardNumber={'1234-1234-1234-1234'}
              lastDate={'03/24'}
              bgColor={background[3]}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={false}
              currentBalance={555}
              cashType={'Visa'}
              cardNumber={'1234-1234-1234-1234'}
              lastDate={'03/24'}
              bgColor={background[4]}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
            sx={{ paddingTop: '10px  !important' }}
          >
            <VisaCardView
              cardName={'Univeral Card'}
              status={false}
              currentBalance={555}
              cashType={'Visa'}
              cardNumber={'1234-1234-1234-1234'}
              lastDate={'03/24'}
              bgColor={background[5]}
            />
          </Grid> */}
        {/* </Grid> */}

        {/* <Box className='visa-card-paginetion'>
          <Box>
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='14' cy='14' r='13.5' stroke='#E6E9EB' />
              <path
                d='M15.5 10L12 13.5L15.5 17'
                stroke='#AAABAB'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Box>
          <Box>
            <svg
              width='28'
              height='28'
              viewBox='0 0 28 28'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.5 18L16 14.5L12.5 11'
                stroke='#2869FF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <circle
                cx='14'
                cy='14'
                r='13.5'
                transform='rotate(-180 14 14)'
                stroke='#2869FF'
              />
            </svg>
          </Box>
        </Box>

        {orderCard && (
          <OrderCardModelView
            title={orderText}
            onCancel={onOrderCardCancel}
            onConfirm={onOrderCardConfirm}
          />
        )} */}
      </Box>
    </CardsViewStyle>
  );
};
