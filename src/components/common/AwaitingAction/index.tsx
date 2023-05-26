import React from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, BoxProps, Typography } from '@mui/material';

import { AwaitingActionComponentStyle } from './index.style';

import { AwaitingActionSvg } from 'assets/icons';

type AwaitingActionComponentProps = BoxProps & {
  title: string;
  note?: string;
};

export const AwaitingActionComponent: React.FC<AwaitingActionComponentProps> = (
  props
) => {
  const { title, note } = props;

  return (
    <AwaitingActionComponentStyle>
      <Box className='awaiting-icon'>
        <img
          src={AwaitingActionSvg}
          alt='awaiting action icon'
          className='icon-img'
        />
      </Box>
      <Box className='card-content'>
        <Typography className='fontweight-bold' sx={{ fontSize: '1.3rem' }}>
          {title}
        </Typography>
        <Typography> {note} </Typography>
      </Box>
      <Box className='next-action-icon'>
        <ArrowForwardIcon />
      </Box>
    </AwaitingActionComponentStyle>
  );
};
