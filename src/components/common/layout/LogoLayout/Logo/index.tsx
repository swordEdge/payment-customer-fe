import React, { useContext } from 'react';

import { LogoComponentStyle } from './index.style';
import { PlatformContext } from 'contexts';

type LogoComponentProps = {};

export const LogoComponent: React.FC<LogoComponentProps> = ({ }) => {
  const { platformType } = useContext(PlatformContext);

  return (
    <LogoComponentStyle platformType={platformType}>
    </LogoComponentStyle>
  );
};
