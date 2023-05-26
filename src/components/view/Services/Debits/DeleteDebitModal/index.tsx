import React from 'react';

import { Box, Button, Divider, Grid } from '@mui/material';

import { DeleteDebitModalStyle } from './index.style';

type DeleteDebitModalProps = {
  cancelDelete: () => void;
  confirmDelete: () => void;
};

export const DeleteDebitModal: React.FC<DeleteDebitModalProps> = ({
  cancelDelete,
  confirmDelete,
}) => {
  const onCancelClicked = () => {
    cancelDelete();
  };

  const onConfirmClicked = () => {
    confirmDelete();
  };

  return (
    <DeleteDebitModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          Are you sure want to cancel this Direct Debit?
          <Box className='subtitle-container'>
            You'll need to contact the company once you've cancelled your Direct
            Debit. You may need to arrange an alternative method of payment with
            them.
          </Box>
        </Box>

        <Divider sx={{ marginTop: '1.5rem' }} />

        <Box className='modal-content'>
          <Grid container spacing={2}>
            <Grid item lg={6} className='grid-item'>
              From
            </Grid>
            <Grid item lg={6} className='grid-item'>
              JOINT PREMIRE BANK
            </Grid>

            <Grid item lg={6} className='grid-item'>
              To
            </Grid>
            <Grid item lg={6} className='grid-item'>
              AMERICAN EXPRESS
            </Grid>

            <Grid item lg={6} className='grid-item'>
              Amount
            </Grid>
            <Grid item lg={6} className='grid-item'>
              EUR 104.00
            </Grid>

            <Grid item lg={6} className='grid-item'>
              Payment Date
            </Grid>
            <Grid item lg={6} className='grid-item'>
              Sep 18, 2022
            </Grid>

            <Grid item lg={6} className='grid-item'>
              Reference
            </Grid>
            <Grid item lg={6} className='grid-item'>
              324266475245
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ marginTop: '3rem' }} />

        <Box className='modal-footer'>
          <Button onClick={onCancelClicked} className='cancel-button'>
            Cancel
          </Button>
          <Button onClick={onConfirmClicked} className='confirm-button'>
            Confirm
          </Button>
        </Box>
      </Box>
    </DeleteDebitModalStyle>
  );
};
