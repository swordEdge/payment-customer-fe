import React from 'react';

import { MenuItem } from '@mui/material';

import { NewDropDownComponentItemStyle } from './index.style';

type NewDropDownComponentItemProps = {
  children?: React.ReactNode;
};

export const NewDropDownComponentItem: React.FC<NewDropDownComponentItemProps> = (
  { children }
) => {
  return (
    <NewDropDownComponentItemStyle value={"USD"}>
      {children}
    </NewDropDownComponentItemStyle>
  );
};
