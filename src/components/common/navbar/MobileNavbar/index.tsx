import React from 'react';

import { Box } from '@mui/material';

import { MobileNavbarButtonComponent } from './MobileNavbarButton';
import { MobileNavbarComponentStyle } from './index.style';

import { MobileSidebarMainMenu } from 'consts';

import { ISidebarMenuItem } from 'models';

type MobileNavbarComponentProps = {
  currentPath: string;
};

export const MobileNavbarComponent: React.FC<MobileNavbarComponentProps> = ({
  currentPath,
}) => {
  return (
    <MobileNavbarComponentStyle>
      <Box className='menu-container'>
        {MobileSidebarMainMenu.map((menu: ISidebarMenuItem, index: number) => (
          <Box key={index}>
            <MobileNavbarButtonComponent
              label={menu.label}
              active={currentPath.includes(menu.activatedPath)}
              activatedIconUrl={menu.activatedIconUrl}
              deactivatedIconUrl={menu.deactivatedIconUrl}
              to={menu.to}
            />
          </Box>
        ))}
      </Box>
    </MobileNavbarComponentStyle>
  );
};
