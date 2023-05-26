import React from 'react';

import { ButtonProps } from '@mui/material';

import { NewButtonComponentStyle } from './index.style';

type NewButtonComponentProps = ButtonProps;

export const NewButtonComponent: React.FC<NewButtonComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <NewButtonComponentStyle {...props}>{children}</NewButtonComponentStyle>
  );
};
