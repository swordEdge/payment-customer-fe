import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { SubscriptionTableViewStyle } from './index.style';

import { ISubscription } from 'models';

type SubscriptionTableViewProps = {
  data: ISubscription[];
  currency: string;
};

export const SubscriptionTableView: React.FC<SubscriptionTableViewProps> = ({
  data,
  currency,
}) => {
  const symbol = currency === 'USD' ? '$' : '€';
  return (
    <SubscriptionTableViewStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='33%'> Fees </TableCell>
              <TableCell width='27%'> Amount </TableCell>
              <TableCell width='40%'> % </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
              data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='table-cell'>{item.memo}</TableCell>
                  <TableCell className='table-cell'>
                    {symbol}
                    {item.flat}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item.percentage}%
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </SubscriptionTableViewStyle>
  );
};
