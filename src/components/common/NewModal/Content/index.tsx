import React from 'react';

import { NewModalComponentContentStyle } from './index.style';

type NewModalComponentContentProps = {
  children?: React.ReactNode;
};

export const NewModalComponentContent: React.FC<
  NewModalComponentContentProps
> = ({ children }) => {
  return (
    <NewModalComponentContentStyle>{children}</NewModalComponentContentStyle>
  );
};
