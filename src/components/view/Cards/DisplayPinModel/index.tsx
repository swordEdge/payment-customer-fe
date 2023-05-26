import React from 'react';

import { Box } from '@mui/material';

import { DisplayPinModelViewStyle } from './index.style';

import { InputComponent } from 'components/common';

type DisplayPinModelViewProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const DisplayPinModelView: React.FC<DisplayPinModelViewProps> = ({
  title,
  onCancel,
  onConfirm,
}) => {
  ///
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    onConfirm();
  };
  return (
    <DisplayPinModelViewStyle>
      <Box className='display-model-container'>
        <Box className='display-model-cancel-button' onClick={onCancelClick}>
          <svg
            width='17'
            height='17'
            viewBox='0 0 17 17'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.778174 16.3343C0.485282 16.0414 0.485281 15.5666 0.778174 15.2737L15.2739 0.777978C15.5668 0.485085 16.0416 0.485085 16.3345 0.777978C16.6274 1.07087 16.6274 1.54575 16.3345 1.83864L1.83884 16.3343C1.54594 16.6272 1.07107 16.6272 0.778174 16.3343Z'
              fill='#AAABAB'
            />
            <path
              d='M0.778174 0.777978C1.07107 0.485085 1.54594 0.485085 1.83883 0.777978L16.3345 15.2737C16.6274 15.5666 16.6274 16.0414 16.3345 16.3343C16.0416 16.6272 15.5668 16.6272 15.2739 16.3343L0.778175 1.83864C0.485282 1.54575 0.485282 1.07087 0.778174 0.777978Z'
              fill='#AAABAB'
            />
          </svg>
        </Box>
        <Box className='display-model-header'>{title}</Box>

        <Box className='display-model-content'>
          <Box className='display-model-content-title'>
            Enter 6-digit code sent to
          </Box>
          <Box className='display-model-content-number'>******** 9818</Box>
          <Box className='display-model-content-confirm'>
            We’ve sent you a confirmation code via SMS.
          </Box>
          <Box className='display-model-content-input-group'>
            <Box width={'15%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={() => { }}
              />
            </Box>

            <Box width={'15%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={() => { }}
              />
            </Box>
            <Box width={'15%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={() => { }}
              />
            </Box>
            <Box width={'15%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={() => { }}
              />
            </Box>
            <Box width={'15%'}>
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
            <Box width={'15%'}>
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
        </Box>

        <Box className='display-model-footer'>
          <Box onClick={onConfirmClick} className='confirm-button'>
            Verify
          </Box>
          <Box className='model-footer-content'>
            Didn’t receive the code?
            <Box className='model-footer-content-text'>click to resend</Box>
          </Box>
        </Box>
      </Box>
    </DisplayPinModelViewStyle>
  );
};
