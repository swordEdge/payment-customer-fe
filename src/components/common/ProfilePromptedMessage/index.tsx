import React from 'react';

import { CheckCircle, CloseOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

import { ProfilePromptedMessageComponentStyle } from './index.style';

type ProfilePromptedMessageComponentProps = {
  children: React.ReactNode;
  status: boolean;
};

export const ProfilePromptedMessageComponent: React.FC<
  ProfilePromptedMessageComponentProps
> = ({ children, status }) => {
  return (
    <ProfilePromptedMessageComponentStyle status={status}>
      <Box className='icon-container'>
        <CheckCircle className='icon' />
      </Box>
      <Box className='message'>{children}</Box>
      <CloseOutlined className='close'></CloseOutlined>
    </ProfilePromptedMessageComponentStyle>
  );
};
