import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/material';

import { DebitTableView } from './DebitTable';
import { DeleteDebitModal } from './DeleteDebitModal';
import { ServiceDebitsViewStyle } from './index.style';

import { AccountSelectComponent, ToggleComponent } from 'components/common';

import { PATH } from 'consts';

import { IDebit, IToggleButton } from 'models';

type ServiceDebitsViewProps = {};

const buttons: IToggleButton[] = [
  {
    title: 'Active Direct Debits',
    path: '',
  },
  {
    title: 'Cancelled and Expired Direct Debits',
    path: '',
  },
];
const values = ['EUR Account', 'USD Account'];

const tableData: IDebit[] = [
  {
    payee: 'American Express',
    accountNumber: '3760 1423 4950',
    paymentDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'American Express',
    accountNumber: '3760 1423 4950',
    paymentDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'American Express',
    accountNumber: '3760 1423 4950',
    paymentDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
  {
    payee: 'American Express',
    accountNumber: '3760 1423 4950',
    paymentDate: '16 Aug 2022',
    amount: '€ 126.73',
  },
];

export const ServiceDebitsView: React.FC<ServiceDebitsViewProps> = () => {
  const navigate = useNavigate();

  const [currentButton, setCurrentButton] = useState<number>(0);
  const [isDeleteDebit, setIsDeleteDebit] = useState<boolean>(false);
  const [, setCurrentDebit] = useState<number>(0);

  const onCancelDelete = () => {
    setIsDeleteDebit(false);
  };

  const onConfirmDelete = () => {
    setIsDeleteDebit(false);
  };

  const onDebitDelete = (index: number) => {
    setCurrentDebit(index);
    setIsDeleteDebit(true);
  };

  return (
    <ServiceDebitsViewStyle>
      <Box className='main-container'>
        <Link className='back-button' to={PATH.SERVICES_ALL}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back
        </Link>

        <Box className='title-container'> Direct Debits </Box>

        <Box className='account-container'>
          <AccountSelectComponent
            values={values}
            accountNumber='5642 4562 1308'
            accountBalance='673.00 EUR'
          />
        </Box>

        <Box className='filter-container'>
          <ToggleComponent
            buttons={buttons}
            width='16rem'
            setCurrentButtons={setCurrentButton}
            currentButtons={currentButton}
          />
        </Box>

        <Box className='subscription-table'>
          <DebitTableView data={tableData} deleteDebit={onDebitDelete} />
        </Box>
      </Box>

      {isDeleteDebit && (
        <DeleteDebitModal
          cancelDelete={onCancelDelete}
          confirmDelete={onConfirmDelete}
        />
      )}
    </ServiceDebitsViewStyle>
  );
};
