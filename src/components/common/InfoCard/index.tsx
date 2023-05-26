import React from 'react';

import { Box } from '@mui/material';

import { InfoCardComponentStyle } from './index.style';

type Props = {
  title: string;
  value: string;
};

export const InfoCardComponent: React.FC<Props> = ({ title, value }) => {
  return (
    <InfoCardComponentStyle>
      <Box className='title-container'>{title}</Box>
      <Box className='value-container'>{value}</Box>
    </InfoCardComponentStyle>
  );
};
