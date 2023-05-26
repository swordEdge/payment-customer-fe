import React from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { MobileNavbarButtonComponentStyle } from './index.style';

type MobileNavbarButtonComponentProps = {
  label: string;
  active: boolean;
  activatedIconUrl: string;
  deactivatedIconUrl: string;
  to: string;
};

export const MobileNavbarButtonComponent: React.FC<
  MobileNavbarButtonComponentProps
> = ({ label, active, activatedIconUrl, deactivatedIconUrl, to }) => {
  return (
    <MobileNavbarButtonComponentStyle>
      <Link className={`${active ? 'active' : 'inactive'}`} to={to}>
        <Box className='icon-container'>
          <img src={active ? activatedIconUrl : deactivatedIconUrl} alt='' />
        </Box>
        <Typography className='label-container'> {label} </Typography>
      </Link>
    </MobileNavbarButtonComponentStyle>
  );
};
