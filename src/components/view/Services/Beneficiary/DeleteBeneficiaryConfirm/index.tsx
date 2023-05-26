import React from 'react';

import { Box, Button } from '@mui/material';

import { DeleteBeneficiaryConfirmModalStyle } from './index.style';

type DeleteBeneficiaryConfirmModalProps = {
  cancelDelete: () => void;
  confirmDelete: () => void;
};

export const DeleteBeneficiaryConfirmModal: React.FC<
  DeleteBeneficiaryConfirmModalProps
> = ({ cancelDelete, confirmDelete }) => {
  const onCancelClicked = () => {
    cancelDelete();
  };

  const onConfirmClicked = () => {
    confirmDelete();
  };
  return (
    <DeleteBeneficiaryConfirmModalStyle>
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
    </DeleteBeneficiaryConfirmModalStyle>
  );
};
