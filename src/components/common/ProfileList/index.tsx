import React from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, BoxProps } from '@mui/material';

import { ProfileListComponentStyle } from './index.style';

type ProfileListComponentProps = BoxProps & {
  svg: string;
  title: string;
  path: string;
};

export const ProfileListComponent: React.FC<ProfileListComponentProps> = (
  props
) => {
  const navigate = useNavigate();
  const { svg, title, path } = props;

  return (
    <ProfileListComponentStyle onClick={() => navigate(path)}>
      <Box className='left-container'>
        <img src={svg} alt='profile menu icon' />
        <Box sx={{ marginLeft: '1rem' }}> {title} </Box>
      </Box>
      <ArrowForwardIosIcon />
    </ProfileListComponentStyle>
  );
};
