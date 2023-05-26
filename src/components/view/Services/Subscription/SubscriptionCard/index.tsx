import React from 'react';

import { Box, Typography, TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Radio } from '@mui/material';
import cls from "classnames";

import { SubscriptionCardViewStyle } from './index.style';
import { ISubscription } from 'new_models';

type SubscriptionCardViewProps = {
  subscription: ISubscription,
  isCurrentSubscription: boolean,
  isSelected: boolean,
  isRadio?: boolean,
};

export const SubscriptionCardView: React.FC<SubscriptionCardViewProps> = ({
  subscription, isCurrentSubscription, isSelected, isRadio
}) => {
  return (
    <SubscriptionCardViewStyle isSelected={isSelected} isCurrent={isCurrentSubscription}>
      {isRadio && <Box>
        <Radio className='radio-btn' checked={isSelected} />
      </Box>}
      <Box style={{ flex: "1" }}>
        <Box className='card-title-wrapper'>
          <Typography className={cls('card-title', { 'current-subscription': isCurrentSubscription, 'selected-subscription': isSelected })}> {subscription?.name} </Typography>
        </Box>
        <Box className='card-description-wrapper'>
          <Typography className='detail-div'>
            <Box className="title">Subscription Amount</Box>
            <Box className="value">{subscription?.currency} 170.00</Box>
          </Typography>
          <Typography className='detail-div'>
            <Box className="title">Next Invoice Date</Box>
            <Box className="value">Nov 16, 2022</Box>
          </Typography>
        </Box>
        <Box className='card-table-wrapper'>
          <TableContainer className="table-title">
            <Table aria-label="Payment Table" style={{ border: 'none' }}>
              <TableBody>
                <TableRow sx={{ cursor: 'pointer' }}>
                  <TableCell className="table-cell" width="30%">
                    Fees
                  </TableCell>
                  <TableCell className="table-cell" width="30%">
                    Amount
                  </TableCell>
                  <TableCell className="table-cell" width="30%">
                    %
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer className="table-main">
            <Table aria-label="Payment Table">
              <TableBody>
                {
                  subscription?.fees.map((item, index) => (
                    <TableRow key={index} sx={{ cursor: 'pointer' }}>
                      <TableCell className="table-cell" width="30%">
                        {item.name}
                      </TableCell>
                      <TableCell className="table-cell" width="30%">
                        {item.fixedAmount > 0 ? `${subscription.currency}  ${item.fixedAmount}` : ''}
                      </TableCell>
                      <TableCell className="table-cell" width="30%">
                        {item.percentage > 0 ? item.percentage : ''}
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </SubscriptionCardViewStyle>
  );
};
