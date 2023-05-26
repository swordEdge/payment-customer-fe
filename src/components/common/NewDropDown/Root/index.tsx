import React from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { Select, SelectProps } from '@mui/material';
import { NewDropDownRootComponentRootStyle } from './index.style';

type NewDropDownComponentRootProps = SelectProps & {
  children?: React.ReactNode;
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

export const NewDropDownComponentRoot: React.FC<NewDropDownComponentRootProps> = (
  props
) => {
  const { register, options, name: fieldName, ...rest } = props;

  const { children } = props;

  return (
    <NewDropDownRootComponentRootStyle
      {...(register && register(fieldName!, options))
      }
    >
      {children}
    </NewDropDownRootComponentRootStyle >
  );
};
