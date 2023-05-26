import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import { SuccessModalStyle } from './index.style';

type Props = {
  onCancel: () => void;
  description: string;
};

export const SuccessModal: React.FC<Props> = ({ onCancel, description }) => {
  const onCancelClick = () => {
    onCancel();
  };

  return (
    <SuccessModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <Box className='cancel-button'>
            <CloseIcon
              onClick={onCancelClick}
              className='cancel-button'
              sx={{ cursor: 'pointer' }}
            />
          </Box>

          <Box className='success-img'>
            <img src='/asset/AccountDetail/success.png' alt='image' />
          </Box>
        </Box>

        <Box className='modal-content'>
          <Box className='title-container'> Successful!</Box>
          <Box className='description-container'> {description} </Box>
        </Box>
      </Box>
    </SuccessModalStyle>
  );
};
