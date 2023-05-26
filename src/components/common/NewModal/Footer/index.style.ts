import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewModalComponentFooterStyleProps = StyledComponentProps;

export const NewModalComponentFooterStyle = styled(
  'div'
)<NewModalComponentFooterStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {};
});
