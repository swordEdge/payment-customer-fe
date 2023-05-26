import React from 'react';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IBeneficiary } from 'new_models';

import { BeneficiaryTableStyle } from './index.style';

type BeneficiaryTableProps = {
  data: IBeneficiary[];
  selectedId?: number;
  onSelected: (beneficiary: IBeneficiary) => void;
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

export const BeneficiaryTableComponent: React.FC<BeneficiaryTableProps> = ({
  data,
  selectedId,
  onSelected,
}) => {
  const setCheck = (item: IBeneficiary) => {
    onSelected(item);
  };

  return (
    <BeneficiaryTableStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='18%'> Name </TableCell>
              <TableCell width="18%"> Email </TableCell>
              <TableCell width='18%'> Account Number </TableCell>
              <TableCell width='13%'> Currency </TableCell>
              <TableCell width='20%'> Last Transfer Date </TableCell>
              <TableCell width='13%'> Choose </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item: IBeneficiary, index) => (
              <TableRow
                key={index}
                sx={{ cursor: 'pointer' }}
                onClick={() => setCheck(item)}
              >
                <TableCell className='table-cell'>
                  <Box className='name-container'>
                    {/* <img className="img-container" src={item.imgLink} /> */}
                    <img
                      className='img-container'
                      src='/asset/Avatars/sample2.jpg'
                    />
                    {item.name}
                  </Box>
                </TableCell>
                <TableCell className="table-cell"> <Box> {item.email} </Box> </TableCell>
                <TableCell className='table-cell'>
                  <Box> {item.accountNumber} </Box>
                </TableCell>
                <TableCell className='table-cell'>
                  <Box> {item.currencyCode} </Box>
                </TableCell>
                <TableCell className='table-cell'>
                  <Box> {item.lastTransferDate || "2023.03.29 09:12:31"} </Box>
                </TableCell>
                <TableCell className='table-cell'>
                  <Box> {selectedId === item.id ? checked : unchecked} </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BeneficiaryTableStyle>
  );
};
