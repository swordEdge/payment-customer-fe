import React from 'react';

import { StyledComponentProps } from '@mui/material';

import { NewModalComponentHeaderStyle } from './index.style';

type NewModalComponentHeaderProps = StyledComponentProps & {
  children?: React.ReactNode;
};

export const NewModalComponentHeader: React.FC<
  NewModalComponentHeaderProps
> = ({ children, ...props }) => {
  return (
    <NewModalComponentHeaderStyle {...props}>
      {children}
    </NewModalComponentHeaderStyle>
  );
};
