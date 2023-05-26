import React from 'react';

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { Box, Button } from '@mui/material';
// import { Transaction } from 'mod?els';
import { ICurrency, ITransaction } from 'new_models';

import { AccountTransactionViewStyle } from './index.style';

import { DropDownComponent, TableComponent } from 'components/common';

const transactionValues = ['All Transactions', 'Inbound', 'Outbound'];

const columns = [
  {
    value: 'DATE & TIME',
    align: 'left',
    width: '20%',
  },
  {
    value: 'NAME',
    align: 'left',
    width: '20%',
  },
  {
    value: 'DESCRIPTION',
    align: 'left',
    width: '47%',
  },
  {
    value: 'AMOUNT',
    align: 'left',
    width: '13%',
  },
];

type AccountTransactionViewProps = {
  id: string;
  onTransactionModal: (id: string) => void;
  accountTrans: Pick<
    ITransaction,
    | 'id'
    | 'name'
    | 'create_at'
    | 'inOuts'
    | 'amount'
    | 'accountName'
    | 'accountNumber'
    | 'cpDisplayName'
    | 'currencySymbol'
  >[];
  currencies: ICurrency[];
};

export const AccountTransactionView: React.FC<AccountTransactionViewProps> = ({
  onTransactionModal,

  accountTrans,
}) => {
  // pagination
  const [perPage, setPerpage] = React.useState<number>(15);
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [transactionType, setTransactionType] = React.useState<string>(
    transactionValues[0]
  );

  const onChangeValue = (value: string) => {
    setTransactionType(value);
  };
  const onClicked = (id: string) => {
    onTransactionModal(id);
  };

  return (
    <AccountTransactionViewStyle>
      <Box className='title-container'>
        Transactions
        <Box className='action-bar-container'>
          <Box className='left-container'>
            <Box className='dropdown-container'>
              <DropDownComponent
                required={true}
                label=''
                values={transactionValues}
                value={transactionType}
                onChangeValue={onChangeValue}
              />
            </Box>
          </Box>
          <Box className='right-container'>
            <Button className='statement-button' variant='outlined'>
              <SaveAltIcon sx={{ fontSize: '1.2rem', marginRight: '0.3rem' }} />
              Statements
            </Button>
          </Box>
        </Box>
        <Box className='transaction-table'>
          <TableComponent
            columns={columns}
            rows={accountTrans}
            onClicked={onClicked}
          />
        </Box>
        <Box className='transaction-footer'>
          <Box>
            Showing
            <select
              value={perPage}
              onChange={(e) => {
                setPerpage(Number(e.target.value));
                setPageNumber(0);
              }}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
            out of {10}
          </Box>
          <Box className='transaction-footer-right'>
            <Box
              onClick={() => {
                setPageNumber(pageNumber - 1 <= 0 ? 0 : pageNumber - 1);
              }}
              className='pagination-button'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='14'
                  cy='14'
                  r='13.5'
                  stroke={pageNumber - 1 < 0 ? '#E6E9EB' : '#2869FF'}
                />
                <path
                  d='M15.5 10L12 13.5L15.5 17'
                  stroke={pageNumber - 1 < 0 ? '#AAABAB' : '#2869FF'}
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Box>
            <Box>{pageNumber + 1} page</Box>
            <Box
              onClick={() => {
                setPageNumber(
                  pageNumber + 1 < 20 / perPage ? pageNumber + 1 : pageNumber
                );
              }}
              className='pagination-button'
            >
              <svg
                width='24'
                height='24'
                viewBox='0 0 28 28'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.5 18L16 14.5L12.5 11'
                  stroke={20 / perPage - 1 < 1 ? '#AAABAB' : '#2869FF'}
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <circle
                  cx='14'
                  cy='14'
                  r='13.5'
                  transform='rotate(-180 14 14)'
                  stroke={20 / perPage - 1 < 1 ? '#E6E9EB' : '#2869FF'}
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </AccountTransactionViewStyle>
  );
};
