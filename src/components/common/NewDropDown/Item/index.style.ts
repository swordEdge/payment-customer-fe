import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewDropDownComponentItemStyleProps = StyledComponentProps;

export const NewDropDownComponentItemStyle = styled(
  'option'
)<NewDropDownComponentItemStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;
  return {
  };
});
