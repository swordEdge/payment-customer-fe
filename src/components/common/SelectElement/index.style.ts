import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SelectElementComponentStyleProps = StyledComponentProps & {};

export const SelectElementComponentStyle = styled(
  'div'
)<SelectElementComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '3rem',
    padding: '0.5rem 1rem',
    fontFamily: bdTheme.textFont.mainFont,
    boxSizing: 'border-box',
    backgroundColor: bdTheme.colors.white,
  };
});
