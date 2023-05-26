import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { OrderTableViewStyle } from './index.style';

import { IOrder } from 'models';

type OrderTableViewProps = {
  data: IOrder[];
  rowClicked: (index: number) => void;
};

export const OrderTableView: React.FC<OrderTableViewProps> = ({
  data,
  rowClicked,
}) => {
  const onRowClicked = (index: number) => {
    rowClicked(index);
  };

  return (
    <OrderTableViewStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='35%'> Payee Name And Reference </TableCell>
              <TableCell width='30%'> Next Payment Date </TableCell>
              <TableCell width='35%'> Amount </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
              data.map((item, index) => (
                <TableRow
                  key={index}
                  onClick={() => {
                    onRowClicked(index);
                  }}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell className='table-cell'>{item.payee}</TableCell>
                  <TableCell className='table-cell'>{item.nextDate}</TableCell>
                  <TableCell className='table-cell'>{item.amount}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </OrderTableViewStyle>
  );
};
