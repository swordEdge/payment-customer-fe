import React from 'react';

import { Box } from '@mui/material';

import { SuccessModelViewStyle } from './index.style';

type SuccessChangePinModelViewProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const SuccessChangePinModelView: React.FC<
  SuccessChangePinModelViewProps
> = ({ onCancel, onConfirm }) => {
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    onConfirm();
  };
  return (
    <SuccessModelViewStyle>
      <Box className='success-model-container'>
        <Box className='success-model-cancel-button' onClick={onCancelClick}>
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
        <Box className='success-model-header'>
          <svg
            width='50'
            height='50'
            viewBox='0 0 50 50'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='25' cy='25' r='25' fill='#08CC7D' />
            <g clipPath='url(#clip0_253_10603)'>
              <path
                d='M22.333 29.2293L34.589 16.9719L36.4757 18.8573L22.333 32.9999L13.8477 24.5146L15.733 22.6293L22.333 29.2293Z'
                fill='white'
              />
            </g>
            <defs>
              <clipPath id='clip0_253_10603'>
                <rect
                  width='32'
                  height='32'
                  fill='white'
                  transform='translate(9 9)'
                />
              </clipPath>
            </defs>
          </svg>
        </Box>

        <Box className='success-model-content'>Successful!</Box>

        <Box className='success-model-footer'>
          The PIN has been syccessfully changes!
          {/* <Box onClick={onCancelClick} className="cancel-button">
            Cancel
          </Box>
          <Box onClick={onConfirmClick} className="confirm-button">
            Confirm
          </Box> */}
        </Box>
      </Box>
    </SuccessModelViewStyle>
  );
};
