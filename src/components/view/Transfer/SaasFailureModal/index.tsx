import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';

import { FailureModalStyle } from './index.style';

type FailureModalProps = {
  onCancel: () => void;
};

export const FailureModalComponent: React.FC<FailureModalProps> = ({
  onCancel,
}) => {
  const onCancelClick = () => {
    onCancel();
  };

  return (
    <FailureModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <Box className='cancel-button'>
            <CloseIcon
              onClick={onCancelClick}
              className='cancel-button'
              sx={{ cursor: 'pointer' }}
            />
          </Box>

          <Box className='failure-img'>
            <img src='/asset/login/Maintenance.png' alt='' />
          </Box>
        </Box>

        <Box className='modal-content'>
          <Box className='title-container'> Failure!</Box>
        </Box>
      </Box>
    </FailureModalStyle>
  );
};
