import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { SelectElementComponentStyle } from './index.style';

import { CheckedSvg } from 'assets/icons';

type SelectElementComponentProps = BoxProps & {
  elementId: number;
  title: string;
  checked: boolean;
  selectCurrency: (index: number) => void;
};

export const SelectElementComponent: React.FC<SelectElementComponentProps> = (
  props
) => {
  const { elementId, title, checked, selectCurrency } = props;

  return (
    <SelectElementComponentStyle onClick={() => selectCurrency(elementId)}>
      <Box> {title} </Box>
      {checked ? <img src={CheckedSvg} alt='checked svg' /> : ''}
    </SelectElementComponentStyle>
  );
};
