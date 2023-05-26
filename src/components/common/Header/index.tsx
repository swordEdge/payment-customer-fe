import React from 'react';
import { Link } from 'react-router-dom';

import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Box } from '@mui/material';

import { HeaderComponentStyle } from './index.style';

import { PATH } from 'consts';

export const HeaderComponent: React.FC = () => {
  return (
    <HeaderComponentStyle>
      <NotificationsOutlinedIcon className='alert-container' />

      <Link to={`${PATH.PROFILE_INDEX}/${PATH.PROFILE_INFO}`}>
        <Box className='avatar-container'>
          <img src='/asset/Avatars/sample2.jpg' alt='' />
        </Box>
      </Link>
    </HeaderComponentStyle>
  );
};
