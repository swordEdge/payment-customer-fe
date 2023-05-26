import React from 'react';

import { Box, BoxProps } from '@mui/material';

import { NotificationComponentStyle } from './index.style';

type NotificationComponentProps = BoxProps & {
  title?: string;
  content: string;
  frontIcon: React.ReactElement;
  backIcon?: React.ReactElement;
};

export const NotificationComponent: React.FC<NotificationComponentProps> = (
  props
) => {
  const { frontIcon, title, content, backIcon, ...rest } = props;

  return (
    <NotificationComponentStyle>
      <Box className={`notification-main ${rest.className}`}>
        <Box className='front-icon'> {frontIcon} </Box>
        <Box className='notification-content' sx={{ flex: 1 }}>
          {title && <Box className='notification-title'> {title} </Box>}
          <Box> {content} </Box>
        </Box>
        {backIcon ? <Box className='back-icon'> {backIcon} </Box> : ''}
      </Box>
    </NotificationComponentStyle>
  );
};
