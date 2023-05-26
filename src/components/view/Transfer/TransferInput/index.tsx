import React, { useState } from 'react';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from '@mui/material';

import { SaasInputStyle } from './index.style';

type TransferInputComponentProps = {
  required: boolean;
  label: string;
  value: string;
  type: string;
};

export const TransferInputComponent: React.FC<TransferInputComponentProps> = ({
  required,
  label,
  value,
  type,
}) => {
  const [pwdVisibility, setPwdVisibility] = useState(false);
  const [validationError] = useState(false);

  const handleClickShowPassword = () => {
    setPwdVisibility(!pwdVisibility);
  };

  return (
    <SaasInputStyle>
      <FormControl error={validationError} fullWidth>
        {label && (
          <FormLabel className='label-container'>
            {required && '*'}
            <Typography className='label-show'> {label} </Typography>
          </FormLabel>
        )}

        <OutlinedInput
          className='saas-input-container'
          value={value}
          style={{ border: 'none !important' }}
          // onChange={ onChange }
          type={type}
          autoComplete='off'
          endAdornment={
            type === 'password' && (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  edge='end'
                >
                  {pwdVisibility ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }
        />
      </FormControl>
    </SaasInputStyle>
  );
};
