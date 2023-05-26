import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewModalComponentHeaderStyleProps = StyledComponentProps;

export const NewModalComponentHeaderStyle = styled(
  'div'
)<NewModalComponentHeaderStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {};
});
