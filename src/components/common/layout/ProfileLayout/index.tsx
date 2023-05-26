import React, { useContext, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { ProfileLayoutComponentStyle } from './index.style';
import { DesktopProfileMenu } from 'consts';
import { IProfileMenuItem } from 'models';
import { PlatformContext } from 'contexts';

type ProfileLayoutComponentProps = {
  children: React.ReactNode;
};

export const ProfileLayoutComponent: React.FC<ProfileLayoutComponentProps> = ({
  children,
}) => {
  const location = useLocation();
  const { platformType } = useContext(PlatformContext);

  const menu: any[] = useMemo(() => {
    if (platformType === "Business") {
      return DesktopProfileMenu;
    } else {
      return DesktopProfileMenu.slice(1, DesktopProfileMenu.length);
    }
  }, [platformType])

  return (
    <ProfileLayoutComponentStyle>
      <Box className='menubar'>
        {menu.map((item: IProfileMenuItem, index: number) => (
          <Box
            key={index}
            className={`item ${location.pathname.includes(item.activatedPath)
              ? 'activated'
              : 'deactivated'
              }`}
          >
            <Link
              className={
                location.pathname.includes(item.activatedPath)
                  ? 'activated'
                  : 'deactivated'
              }
              to={item.to}
            >
              {item.label}
            </Link>
          </Box>
        ))}
      </Box>
      <Box className='body'>{children}</Box>
    </ProfileLayoutComponentStyle >
  );
};

export const withProfileLayout =
  (Page: React.FC): React.FC =>
    () => {
      return (
        <ProfileLayoutComponent>
          <Page />
        </ProfileLayoutComponent>
      );
    };
