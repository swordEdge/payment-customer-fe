import React from 'react';

import { Box } from '@mui/material';

import { ChangePinModelViewStyle } from './index.style';

import { InputComponent } from 'components/common';

type ChangePinModelViewProps = {
  title: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export const ChangePinModelView: React.FC<ChangePinModelViewProps> = ({
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
    <ChangePinModelViewStyle>
      <Box className='change-model-container'>
        <Box className='change-model-header'>{title}</Box>

        <Box className='change-model-content'>
          <Box className='change-model-content-body'>
            <Box width={'35%'}>Enter New PIN</Box>
            <Box width={'65%'}>
              <InputComponent
                required={false}
                label=''
                value=''
                type='text'
                name='phoneNumber'
                onChange={() => { }}
              />
            </Box>
          </Box>
          <Box className='change-model-content-body'>
            <Box width={'35%'}>Re-Enter PIN</Box>
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
        </Box>

        <Box className='change-model-footer'>
          <Box onClick={onCancelClick} className='cancel-button'>
            Cancel
          </Box>
          <Box onClick={onConfirmClick} className='confirm-button'>
            Confirm
          </Box>
        </Box>
      </Box>
    </ChangePinModelViewStyle>
  );
};
