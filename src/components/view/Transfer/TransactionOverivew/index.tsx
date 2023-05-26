import React from 'react';

import { Box } from '@mui/material';
import { ICurrency, ITransfer } from 'new_models';

import { TransactionOverviewStyle } from './index.style';

type TransactionOverviewProps = {
  transfer: ITransfer;
  currencies: ICurrency[];
};

export const TransactionOverviewComponent: React.FC<
  TransactionOverviewProps
> = ({ transfer, currencies }) => {
  console.log('transfer: ', transfer);
  const getCurrencySymbol = (currency: string) => {
    let symbol = '$';
    currencies.map((item) => {
      if (item.code === currency) {
        symbol = item.code;
      }
    });

    return symbol;
  };

  return (
    <TransactionOverviewStyle>
      <Box className='transaction-overview-send-from'>
        <Box>Confirm your Transfer Order</Box>
        <Box className='transaction-overview-send-from1'>Send from { }</Box>
        <Box className='transaction-overview-send-from2'>
          <Box className='transaction-overview-send-from2-content'>
            {getCurrencySymbol(transfer.currency ?? "")} {transfer.sendAmount}
          </Box>
        </Box>
      </Box>

      <hr className='transaction-overview-space' />

      <Box className='transaction-overview-rate-container'>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>Transfer Fee:</Box>
          <Box className='transaction-overview-rate-content'>

            {getCurrencySymbol(transfer.currency ?? "")} 2.00
          </Box>
        </Box>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>Conversion: </Box>
          <Box className='transaction-overview-rate-content'>
            {transfer.rate ?? 0}
          </Box>
        </Box>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>
            Amount to Be sent:
          </Box>
          <Box className='transaction-overview-rate-content'>
            {getCurrencySymbol(transfer.toCurrency ?? "")} {transfer.receivedAmount}
          </Box>
        </Box>
      </Box>

      <hr className='transaction-overview-space' />

      <Box className='transaction-overview-receive'>
        <Box className='transaction-overview-receive1'>
          {transfer.toName} will receive
        </Box>
        <Box className='transaction-overview-receive2'>
          <Box className='transaction-overview-receive2-content'>
            {getCurrencySymbol(transfer.toCurrency ?? "")} {transfer.receivedAmount}
          </Box>
        </Box>
      </Box>

      <hr className='transaction-overview-space' />

      <Box className='transaction-overview-rate-container'>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>Should Arive:</Box>
          <Box className='transaction-overview-rate-content'>
            1-2 business days
          </Box>
        </Box>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>Reference: </Box>
          <Box className='transaction-overview-rate-content'>My Reference</Box>
        </Box>
        <Box className='transaction-overview-rate-main'>
          <Box className='transaction-overview-rate-title'>Personal Memo:</Box>
          <Box className='transaction-overview-rate-content'>Some Notes</Box>
        </Box>
      </Box>
    </TransactionOverviewStyle>
  );
};
