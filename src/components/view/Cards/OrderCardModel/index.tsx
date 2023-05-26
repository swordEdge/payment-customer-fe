import React from 'react';

import { Box } from '@mui/material';

import { OrderCardViewStyle } from './index.style';

import { InputComponent } from 'components/common';

type OrderCardViewProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const OrderCardModelView: React.FC<OrderCardViewProps> = ({
  title,
  onCancel,
  onConfirm,
}) => {
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    onConfirm();
  };
  return (
    <OrderCardViewStyle>
      <Box className='order-model-container'>
        <Box className='order-model-header'>{title}</Box>

        <Box className='order-model-content'>
          <Box className='order-model-content-header'>
            <Box width={'35%'}>Name on Card</Box>
            <Box width={'65%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={(e: any) => {
                }}
              />
            </Box>
          </Box>

          <Box className='order-model-content-body'>
            {title === 'Order a Card' ? (
              ''
            ) : (
              <Box>The card will be issued to the below address.</Box>
            )}
            <Box className='order-model-content-body-content'>
              <Box width={'50%'}>Card Delivery Address</Box>
              <Box width={'50%'} className='content-text'>
                15, Plaza Rodrigo Botet
              </Box>
            </Box>

            <Box className='order-model-content-body-content'>
              <Box width={'50%'}>City</Box>
              <Box width={'50%'} className='content-text'>
                Valencia
              </Box>
            </Box>
            <Box className='order-model-content-body-content'>
              <Box width={'50%'}>Post Code</Box>
              <Box width={'50%'} className='content-text'>
                D13 AN28
              </Box>
            </Box>
            <Box className='order-model-content-body-content'>
              <Box width={'50%'}>Country</Box>
              <Box width={'50%'} className='content-text'>
                Spain
              </Box>
            </Box>
          </Box>

          <Box className='order-model-content-hr' />

          <Box className='order-model-content-footer'>
            <Box>Applicable Fee(s) are € 5.00.</Box>
            <Box>The card will be shipped within 3 days.</Box>
          </Box>
        </Box>

        <Box className='order-model-footer'>
          <Box onClick={onCancelClick} className='cancel-button'>
            Cancel
          </Box>
          <Box onClick={onConfirmClick} className='confirm-button'>
            Confirm
          </Box>
        </Box>
      </Box>
    </OrderCardViewStyle>
  );
};
