import React from 'react';

import { Box } from '@mui/material';

import { LogoComponent } from './Logo';
import { LogoLayoutComponentStyle } from './index.style';

type LogoLayoutComponentProps = {
  children: React.ReactNode;
};

export const LogoLayoutComponent: React.FC<LogoLayoutComponentProps> = ({
  children,
}) => {
  return (
    <LogoLayoutComponentStyle>
      <Box className='form-container'>{children}</Box>
      <Box className='saas-logo-container'>
        <LogoComponent />
      </Box>
    </LogoLayoutComponentStyle>
  );
};

export const withLogoLayout =
  (Page: React.FC): React.FC =>
    () => {
      return (
        <LogoLayoutComponent>
          <Page />
        </LogoLayoutComponent>
      );
    };
