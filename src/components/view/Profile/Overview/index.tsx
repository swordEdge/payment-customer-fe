import React from 'react';
import { Link } from 'react-router-dom';

import { Box, BoxProps } from '@mui/material';

import { OverviewViewStyle } from './index.style';

import { MobileHeaderComponent, ProfileListComponent } from 'components/common';

import { PROFILE_MENU } from 'consts';

type OvewviewViewProps = BoxProps & {
  avatar: string;
  name: string;
  emailAddress?: string;
  phoneNumber?: string;
};

export const OverviewView: React.FC<OvewviewViewProps> = (props) => {
  const { avatar, name, emailAddress } = props;
  return (
    <OverviewViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent title='Profile' prevAction={() => {}} />
        <Box sx={{ height: '4rem' }}> </Box>
      </Box>

      <Box className='mobile-container'>
        <Box className='profile-card'>
          <img className='avatar' src={avatar} alt='avatar image' />
          <Box className='info'>
            <Box sx={{ fontSize: '1.4rem' }}> {name} </Box>
            <Box sx={{ fontSize: '1.1rem' }}> {emailAddress} </Box>
          </Box>
        </Box>
        <Box className='profile-list-container'>
          {PROFILE_MENU.map((item) => (
            <Link to={item.path}>
              <Box className='profile-list-wrap'>
                <ProfileListComponent
                  svg={item.avatar}
                  title={item.title}
                  path={item.path}
                />
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </OverviewViewStyle>
  );
};
