import React from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, BoxProps, Typography } from '@mui/material';

import { MobileHeaderComponentStyle } from './index.style';

type MobileHeaderComponentProps = BoxProps & {
  title: string;
  backPath?: string;
  prevAction: (path: string) => void;
  actionIcon?: React.ReactElement;
  extraActionComponent?: React.ReactElement;
};

export const MobileHeaderComponent: React.FC<MobileHeaderComponentProps> = (
  props
) => {
  const {
    title,
    backPath,
    actionIcon,
    extraActionComponent,
    prevAction,
    ...rest
  } = props;

  return (
    <MobileHeaderComponentStyle>
      <Box className='header-main'>
        <Box className='title-typo'>
          {backPath ? (
            <ArrowBackIosNewIcon onClick={() => prevAction(backPath)} />
          ) : (
            ''
          )}
          <Box sx={{ marginLeft: '1rem' }}> {title} </Box>
        </Box>
        {actionIcon}
      </Box>
      <Box className='extra-container'>{extraActionComponent}</Box>
    </MobileHeaderComponentStyle>
  );
};
