import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewModalComponentContentStyleProps = StyledComponentProps;

export const NewModalComponentContentStyle = styled(
  'div'
)<NewModalComponentContentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {};
});
