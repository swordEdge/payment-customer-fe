import React, { useContext } from 'react';
import { Box, Divider } from '@mui/material';
import { DesktopNavbarButtonComponent } from './DesktopNavbarButton';
import { HelpBoxComponent } from './HelpBox';
import { DesktopNavbarComponentStyle } from './index.style';
import { DesktopSidebarExtraMenu, DesktopSidebarMainMenu } from 'consts';
import { ISidebarMenuItem } from 'models';
import { PlatformContext } from 'contexts';

type DesktopNavbarComponentProps = {
  currentPath: string;
  logout: () => void;
};

export const DesktopNavbarComponent: React.FC<DesktopNavbarComponentProps> = ({
  currentPath,
  logout,
}) => {
  const { platformType } = useContext(PlatformContext);

  return (
    <DesktopNavbarComponentStyle>
      <Box className='logo-img-container'></Box>

      {
        platformType === 'Business' && <Box className="platform-type color-red"> Business </Box>
      }

      <Box className='button-container'>
        {DesktopSidebarMainMenu.map((menu: ISidebarMenuItem, index: number) => (
          <Box className='each-button' key={index}>
            <DesktopNavbarButtonComponent
              label={menu.label}
              active={currentPath.includes(menu.activatedPath)}
              activatedIconUrl={menu.activatedIconUrl}
              deactivatedIconUrl={menu.deactivatedIconUrl}
              to={menu.to}
            />
          </Box>
        ))}
      </Box>

      <Divider className='divider-container' />

      <Box className='button-container'>
        {DesktopSidebarExtraMenu.map(
          (menu: ISidebarMenuItem, index: number) => (
            <Box className='each-button' onClick={() => logout()} key={index}>
              <DesktopNavbarButtonComponent
                label={menu.label}
                active={false}
                activatedIconUrl={menu.activatedIconUrl}
                deactivatedIconUrl={menu.deactivatedIconUrl}
                to={menu.to}
              />
            </Box>
          )
        )}
      </Box>

      <Box className='help-box-container'>
        <HelpBoxComponent />
      </Box>
    </DesktopNavbarComponentStyle>
  );
};
