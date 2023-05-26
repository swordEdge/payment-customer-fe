import React from 'react';

import { Box, Button } from '@mui/material';

import { UpdateOrderConfirmComponentStyle } from './index.style';

type UpdateOrderConfirmComponentProps = {
  cancelUpdate: () => void;
  confirmUpdate: () => void;
};

export const UpdateOrderConfirmComponent: React.FC<
  UpdateOrderConfirmComponentProps
> = ({ cancelUpdate, confirmUpdate }) => {
  const onCancelClicked = () => {
    cancelUpdate();
  };

  const onConfirmClicked = () => {
    confirmUpdate();
  };

  return (
    <UpdateOrderConfirmComponentStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <img src='/asset/AccountDetail/notice.png' />
        </Box>

        <Box className='modal-content'>
          Are you sure you want to delete this beneficiary?
        </Box>

        <Box className='modal-footer'>
          <Button
            onClick={onCancelClicked}
            className='cancel-button'
            variant='outlined'
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirmClicked}
            className='confirm-button'
            variant='outlined'
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </UpdateOrderConfirmComponentStyle>
  );
};
