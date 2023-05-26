import React from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { DebitTableViewStyle } from './index.style';

import { IDebit } from 'models';

type DebitTableViewProps = {
  data: IDebit[];
  deleteDebit: (index: number) => void;
};

export const DebitTableView: React.FC<DebitTableViewProps> = ({
  data,
  deleteDebit,
}) => {
  const onDeleteClicked = (index: number) => {
    deleteDebit(index);
  };

  return (
    <DebitTableViewStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='35%'> Payee Name And Reference </TableCell>
              <TableCell width='30%'> Payment Date </TableCell>
              <TableCell width='20%'> Amount </TableCell>
              <TableCell width='15%'> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length &&
              data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className='table-cell'>
                    <Box className='name-container'>
                      {item.payee}
                      <Box className='account-number'>{item.accountNumber}</Box>
                    </Box>
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item.paymentDate}
                  </TableCell>
                  <TableCell className='table-cell'>{item.amount}</TableCell>
                  <TableCell className='table-cell'>
                    <Box className='actions-container'>
                      <DeleteForeverIcon
                        onClick={() => {
                          onDeleteClicked(index);
                        }}
                        sx={{ cursor: 'pointer' }}
                      />
                      <InsertDriveFileIcon />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DebitTableViewStyle>
  );
};
