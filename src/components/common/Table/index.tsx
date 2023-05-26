import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { TableComponentStyle } from './index.style';

type TableComponentProps = {
  rows: {
    [key: string]: any;
  }[];
  columns: {
    value: string;
    [key: string]: any;
  }[];
  onClicked: (id: string) => void;
};

export const TableComponent: React.FC<TableComponentProps> = ({
  rows,
  columns,
  onClicked,
}) => {
  const onClick = (id: string) => {
    onClicked(id);
  };

  return (
    <TableComponentStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SaasTable'>
          <TableHead>
            <TableRow>
              <TableCell width={`0.5%`}></TableCell>
              {columns.map((col, index) => (
                <TableCell
                  key={index}
                  align={col.align}
                  width={`${col.width}%`}
                >
                  {col.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              ? rows.map((row, index) => (
                <TableRow
                  key={index}
                  onClick={() => onClick(row.id)}
                  sx={{
                    ':hover': {
                      background: '#EEEEEE',
                    },
                    ':active': {
                      background: '#DDDDDD',
                    },
                  }}
                >
                  <TableCell></TableCell>
                  <TableCell className='table-cell'>
                    {row.create_at}
                  </TableCell>
                  <TableCell className='table-cell'>{row.name}</TableCell>
                  <TableCell className='table-cell'>
                    {row.inOuts ? 'Received' : 'Sent'} {`fund `}
                    {row.inOuts ? (
                      <>
                        from {row.accountName} ({row.accountNumber})
                      </>
                    ) : (
                      <>
                        to {row.cpName} ({row.accountNumber})
                      </>
                    )}
                  </TableCell>
                  {row.inOuts ? (
                    <TableCell className='table-cell-in'>
                      + {row.currencySymbol} {row.amount}
                    </TableCell>
                  ) : (
                    <TableCell className='table-cell-out'>
                      - {row.currencySymbol} {row.amount}
                    </TableCell>
                  )}
                </TableRow>
              ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </TableComponentStyle>
  );
};
