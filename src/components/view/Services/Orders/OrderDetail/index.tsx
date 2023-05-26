import React, { useState } from 'react';

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box, Button, Grid } from '@mui/material';

import { OrderDetailViewStyle } from './index.style';

import {
  DatePickerComponent,
  DropDownComponent,
  InputComponent,
  UpdateOrderConfirmComponent,
} from 'components/common';

const frequencies = ['Monthly', 'Weekly', 'Annually'];

export const OrderDetailView: React.FC = () => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdateConfirm, setIsUpdateConfirm] = useState<boolean>(false);

  const onEditClicked = () => {
    setIsEdit(true);
  };

  const onUpdateClicked = () => {
    setIsUpdateConfirm(true);
  };

  const onCancelUpdate = () => {
    setIsUpdateConfirm(false);
  };

  const onConfirmUpdate = () => {
    setIsUpdateConfirm(false);
  };

  const onCancelClicked = () => {
    setIsEdit(false);
  };

  const onChangeValue = (value: string) => {
  };
  return (
    <OrderDetailViewStyle>
      <Box className='action-container'>
        <Box
          onClick={onEditClicked}
          className={`${isEdit === true ? 'edit-active' : 'edit-button'} `}
        >
          <SaveAsIcon />
          Edit
        </Box>
      </Box>

      <Box className='modal-container'>
        <Box className='modal-header'>Standing Orders</Box>

        <Grid container spacing={2}>
          <Grid
            item
            lg={5}
            sx={{ display: 'flex', alignItems: 'center', marginTop: '2rem' }}
          >
            From Account
          </Grid>
          <Grid item lg={7} sx={{ marginTop: '2rem' }}>
            <InputComponent
              required={false}
              label=''
              value='EUR Bank'
              type='text'
              name='phoneNumber'
              onChange={(e: any) => {
              }}
            />
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Payee
          </Grid>
          <Grid item lg={7}>
            <InputComponent
              required={false}
              label=''
              value='Jones Smith'
              type='text'
              name='phoneNumber'
              onChange={(e: any) => {
              }}
            />
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Reference
          </Grid>
          <Grid item lg={7}>
            <InputComponent
              required={false}
              label=''
              value='3472 5630 3513'
              type='text'
              name='phoneNumber'
              onChange={(e: any) => {
              }}
            />
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Next Payment Date
          </Grid>
          <Grid item lg={7}>
            <DatePickerComponent required={false} label='' />
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Frequency
          </Grid>
          <Grid item lg={7}>
            {/* <DropDownComponent
              required={false}
              label=''
              values={frequencies}
              onChangeValue={onChangeValue}
            /> */}
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Until
          </Grid>
          <Grid item lg={7}>
            <DatePickerComponent required={false} label='' />
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', alignItems: 'center' }}>
            Amount
          </Grid>
          <Grid item lg={7}>
            <InputComponent
              required={false}
              label=''
              value='€ 104.40'
              type='text'
              name='phoneNumber'
              onChange={(e: any) => {
              }}
            />
          </Grid>
        </Grid>

        <Box className='modal-footer'>
          {isEdit && (
            <>
              <Button className='delete-button' variant='outlined'>
                <DeleteForeverIcon />
              </Button>
              <Box>
                <Button
                  onClick={onCancelClicked}
                  className='cancel-button'
                  variant='outlined'
                >
                  Cancel
                </Button>
                <Button
                  onClick={onUpdateClicked}
                  className='close-button'
                  variant='outlined'
                >
                  Update
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>

      {isUpdateConfirm && (
        <UpdateOrderConfirmComponent
          cancelUpdate={onCancelUpdate}
          confirmUpdate={onConfirmUpdate}
        />
      )}
    </OrderDetailViewStyle>
  );
};
