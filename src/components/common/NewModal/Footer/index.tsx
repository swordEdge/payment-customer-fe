import React from 'react';

import { NewModalComponentFooterStyle } from './index.style';

type NewModalComponentFooterProps = {
  children?: React.ReactNode;
};

export const NewModalComponentFooter: React.FC<
  NewModalComponentFooterProps
> = ({ children }) => {
  return (
    <NewModalComponentFooterStyle>{children}</NewModalComponentFooterStyle>
  );
};
