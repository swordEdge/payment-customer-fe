import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AwaitingActionViewStyleProps = StyledComponentProps & {};

export const AwaitingActionViewStyle = styled(
  'div'
)<AwaitingActionViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    marginTop: '1.5rem',
    color: bdTheme.colors.accentBlue,
    fontFamily: bdTheme.textFont.mainFont,

    '.title-typo': {
      fontSize: '1.2rem',
      fontWeight: bdTheme.textWeight.semibold,
      marginBottom: '1rem',
    },

    '.action-card': {
      width: '30%',
      height: '8rem',

      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  };
});
