import React from 'react';
import { InputBase, InputProps } from '@mui/material';
import { MobileInputComponentStyle } from './index.style';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

type MobileInputComponentProps = InputProps & {
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

export const MobileInputComponent: React.FC<MobileInputComponentProps> = (
  props
) => {
  const { register, name: fieldName, options, ...rest } = props;
  return (
    <MobileInputComponentStyle>
      <InputBase
        className='text'
        {...(register && register(fieldName!, options))}
        {...rest}
      />
    </MobileInputComponentStyle>
  );
};
