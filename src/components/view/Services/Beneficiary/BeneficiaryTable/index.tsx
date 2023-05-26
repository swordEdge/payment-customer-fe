import React from 'react';

import SaveAsIcon from '@mui/icons-material/SaveAs';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { BeneficiaryTableViewStyle } from './index.style';

import { IBeneficiary, ICurrency } from 'new_models';

type BeneficiaryTableViewProps = {
  data: IBeneficiary[];
  beneficiaryClick: (id: number) => void;
  currencies: ICurrency[];
};

export const BeneficiaryTableView: React.FC<BeneficiaryTableViewProps> = ({
  data,
  beneficiaryClick,
  currencies,
}) => {
  const onRowClicked = (index: number) => {
    beneficiaryClick(index);
  };

  // const getCurrencyUnit = (currencyId: string) => {
  //   return (
  //     currencies.find((curr) => {
  //       if (curr.id === parseInt(currencyId)) {
  //         return true;
  //       }
  //     })?.unit || ''
  //   );
  // };

  return (
    <BeneficiaryTableViewStyle>
      <TableContainer className='table-container'>
        <Table aria-label='SubscriptionTatble'>
          <TableHead>
            <TableRow>
              <TableCell width='18%'> Name </TableCell>
              <TableCell width="18%"> Email </TableCell>
              <TableCell width='18%'> Account Number </TableCell>
              <TableCell width='13%'> Currency </TableCell>
              <TableCell width='20%'> Last Transfer Date </TableCell>
              <TableCell width='13%'> Edit </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {data.length && */}
            {
              data.map((item, index) => (
                <TableRow
                  onClick={() => {
                    onRowClicked(index);
                  }}
                  key={index}
                  sx={{ cursor: 'pointer' }}
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
                  <TableCell className="table-cell">
                    {item.email}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item.accountNumber}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item.currencyCode}
                  </TableCell>
                  <TableCell className='table-cell'>
                    {item.lastTransferDate || "2023.03.29 09:12:31"}
                  </TableCell>
                  <TableCell className='table-cell'>
                    <SaveAsIcon className='edit-button' />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BeneficiaryTableViewStyle>
  );
};
