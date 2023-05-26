import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box
} from '@mui/material';
import { IAccount } from 'new_models';

import { SelectAccountTableStyle } from './index.style';

type subAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
>;

type AccountTableProps = {
  data: subAccountType[];
  selectedId?: number;
  onSelected: (account: subAccountType) => void;
};

const checked = (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='12' fill='#0A33FF' />
    <g clipPath='url(#clip0_164_4927)'>
      <path
        d='M11.0624 13.9487L15.1247 10.125L15.75 10.7131L11.0624 15.125L8.25 12.478L8.87489 11.8898L11.0624 13.9487Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_164_4927'>
        <rect
          width='15'
          height='15'
          fill='white'
          transform='translate(4.5 4.5)'
        />
      </clipPath>
    </defs>
  </svg>
);

const unchecked = (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='12' cy='12' r='11.5' fill='white' stroke='#E6E9EB' />
    <g clipPath='url(#clip0_215_6138)'>
      <path
        d='M11.0624 13.9487L15.1247 10.125L15.75 10.7131L11.0624 15.125L8.25 12.478L8.87489 11.8898L11.0624 13.9487Z'
        fill='#9E9EA7'
      />
    </g>
    <defs>
      <clipPath id='clip0_215_6138'>
        <rect
          width='15'
          height='15'
          fill='white'
          transform='translate(4.5 4.5)'
        />
      </clipPath>
    </defs>
  </svg>
);

export const SelectAccountTableComponent: React.FC<AccountTableProps> = ({
  data,
  selectedId,
  onSelected,
}) => {
  const setCheck = (
    item: Pick<
      IAccount,
      'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
    >
  ) => {
    onSelected(item);
  };

  return (
    <SelectAccountTableStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='20%'> Account </TableCell>
              <TableCell width='25%'> Account Number </TableCell>
              <TableCell width='15%'> Currency </TableCell>
              <TableCell width='20%'> Account Balance </TableCell>
              <TableCell width='7%'></TableCell>

              <TableCell width='13%'> Choose </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='table-body'>
            {data.length &&
              data.map((item: subAccountType, index: number) => (
                <TableRow
                  key={index}
                  sx={{ cursor: 'pointer' }}
                  onClick={() => setCheck(item)}
                  className='table-row'
                >
                  <TableCell className='table-cell'> <div> {item.name} </div></TableCell>
                  <TableCell className='table-cell'>
                    <div> {item.accountNumber} </div>
                  </TableCell>
                  <TableCell className='table-cell'>
                    <div> {item.currencyCode} </div>
                  </TableCell>
                  <TableCell className='table-cell'>
                    <div> {Number(item.totalBalance).toFixed(2)} </div>
                  </TableCell>
                  <TableCell className='table-cell'></TableCell>
                  <TableCell className='table-cell'>
                    <div> {selectedId && selectedId === item.id ? checked : unchecked} </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SelectAccountTableStyle>
  );
};
