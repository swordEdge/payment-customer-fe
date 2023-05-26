import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';

import { OrderDetailView } from './OrderDetail';
import { OrderTableView } from './OrderTable';
import { ServiceOrdersViewStyle } from './index.style';

import {
  AccountSelectComponent,
  MobileHeaderComponent,
} from 'components/common';

import { PATH } from 'consts';

import { IOrder } from 'models';

type ServiceOrdersViewProps = {};

const values = ['EUR Account', 'USD Account'];
const standingData: IOrder[] = [
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
];

const futurePayments: IOrder[] = [
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'John Smith',
    nextDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
];

export const ServiceOrdersView: React.FC<ServiceOrdersViewProps> = () => {
  const navigate = useNavigate();

  const [isOrderDetail, setIsOrderDetail] = useState<boolean>(false);
  const [, setCurrentStanding] = useState<number>(0);
  const [, setCurrentFuture] = useState<number>(0);

  const onStandingClicked = (index: number) => {
    setCurrentStanding(index);
    setIsOrderDetail(true);
  };

  const onFutureClicked = (index: number) => {
    setCurrentFuture(index);
    setIsOrderDetail(true);
  };

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  return (
    <ServiceOrdersViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Standing Orders'
          backPath={PATH.SERVICES}
          prevAction={onMobileHeaderPrevClick}
        />
      </Box>

      <Box className='mobile-container'></Box>

      <Box className='main-container'>
        <Link className='back-button' to={PATH.SERVICES_ALL}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back
        </Link>

        {!isOrderDetail && (
          <>
            <Box className='title-container'> Standing Orders </Box>

            <Box className='account-container'>
              <AccountSelectComponent
                values={values}
                accountNumber='5642 4562 1308'
                accountBalance='673.00 EUR'
              />
            </Box>

            <Box className='order-table'>
              <Box className='table-title'>Standing Orders</Box>
              <br />
              <OrderTableView
                data={standingData}
                rowClicked={onStandingClicked}
              />
            </Box>

            <Box className='order-table'>
              <Box className='table-title'>Future Payments</Box>
              <br />
              <OrderTableView
                data={futurePayments}
                rowClicked={onFutureClicked}
              />
            </Box>
          </>
        )}

        {isOrderDetail && <OrderDetailView />}
      </Box>
    </ServiceOrdersViewStyle>
  );
};
