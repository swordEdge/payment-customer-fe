import React from 'react';

import { Box, Button } from '@mui/material';

import { CloseAccountModalStyle } from './index.style';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  id: string;
  deleteAccount: (id: string) => void;
};

export const CloseAccountModal: React.FC<Props> = ({
  onCancel,
  onConfirm,
  id,
  deleteAccount,
}) => {
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    deleteAccount(id);
    onConfirm();
  };

  return (
    <CloseAccountModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          <img src='/asset/AccountDetail/notice.png' alt='notice image' />
        </Box>

        <Box className='modal-content'>
          This account will be closed and no longer available for processing!
          Please confirm to proceed.
        </Box>

        <Box className='modal-footer'>
          <Button
            onClick={onCancelClick}
            className='cancel-button'
            variant='outlined'
          >
            Cancel
          </Button>
          <Button
            onClick={onConfirmClick}
            className='confirm-button'
            variant='outlined'
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </CloseAccountModalStyle>
  );
};
