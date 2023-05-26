import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, InputBase, InputBaseProps } from '@mui/material';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { PasswordInputComponentStyle } from './index.style';

type PasswordInputComponentProps = Omit<InputBaseProps, 'type'> & {
  label: string;
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

export const PasswordInputComponent: React.FC<PasswordInputComponentProps> = (props) => {
  const { label, register, name: fieldName, options, ...rest } = props;
  const [visibility, setVisibility] = useState<boolean>(false);

  const onVisibilityChange = () => {
    setVisibility(!visibility);
  };

  return (
    <PasswordInputComponentStyle disabled={props.disabled}>
      <Box className='content-container'>
        <Box className='label'>{label}</Box>
        <InputBase
          className='text'
          type={visibility ? 'text' : 'password'}
          {...(register && register(fieldName!, options))}
          {...rest}
        />
      </Box>
      <Box className='icon-container' onClick={onVisibilityChange}>
        {visibility ? <Visibility /> : <VisibilityOff />}
      </Box>
    </PasswordInputComponentStyle>
  );
};
