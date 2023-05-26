import React from 'react';
import { Link } from 'react-router-dom';

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, BoxProps } from '@mui/material';

import { AccountHeaderComponentStyle } from './index.style';
import { PATH } from 'consts';

type AccountHeaderComponentProps = BoxProps & {
  notificationAmount: number;
};

export const AccountHeaderComponent: React.FC<AccountHeaderComponentProps> = (
  props
) => {
  const { notificationAmount } = props;

  return (
    <AccountHeaderComponentStyle>
      <Box className='logo-box'> </Box>
      <Box className='right-container'>
        <Badge color='error' badgeContent={notificationAmount}>
          <NotificationsNoneIcon />
        </Badge>
        <Link to={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_INFO}>
          <img className='avatar' src='/asset/Profile/DefaultAvatar.svg' />
        </Link>
      </Box>
    </AccountHeaderComponentStyle>
  );
};
