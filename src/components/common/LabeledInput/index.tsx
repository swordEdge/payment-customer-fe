import React from 'react';

import { Box, InputBase, InputBaseProps } from '@mui/material';

import { LabeledInputComponentStyle } from './index.style';

type LabeledInputComponentProps = InputBaseProps & {
  label: string;
  icon?: React.ReactNode;
};

export const LabeledInputComponent: React.FC<LabeledInputComponentProps> = ({
  label,
  icon,
  ...props
}) => {
  return (
    <LabeledInputComponentStyle disabled={props.disabled}>
      <Box className='content-container'>
        <Box className='label'>{label}</Box>
        <InputBase className='text' {...props} />
      </Box>
      {!!icon && <Box className='icon-container'>{icon}</Box>}
    </LabeledInputComponentStyle>
  );
};
