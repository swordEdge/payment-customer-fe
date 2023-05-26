import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';

import { DesktopNavbarButtonComponentStyle } from './index.style';

type DesktopNavbarButtonComponentProps = {
  label: string;
  active: boolean;
  activatedIconUrl: string;
  deactivatedIconUrl: string;
  to: string;
};

export const DesktopNavbarButtonComponent: React.FC<
  DesktopNavbarButtonComponentProps
> = ({ label, active, activatedIconUrl, deactivatedIconUrl, to }) => {
  return (
    <DesktopNavbarButtonComponentStyle>
      <Link to={to} className={`link ${active ? 'active' : 'inactive'}`}>
        <img src={active ? activatedIconUrl : deactivatedIconUrl} alt='' />
        <Typography className='label-container'> {label} </Typography>
      </Link>
    </DesktopNavbarButtonComponentStyle>
  );
};
