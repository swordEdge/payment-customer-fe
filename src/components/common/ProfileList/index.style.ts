import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ProfileListComponentStyleProps = StyledComponentProps & {};

export const ProfileListComponentStyle = styled(
  'div'
)<ProfileListComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    backgroundColor: bdTheme.colors.simplecGrey,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem 0 1rem',
    boxSizing: 'border-box',
    fontFamily: bdTheme.textFont.mainFont,

    '.left-container': {
      display: 'flex',
      alignItems: 'center',
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '1.2rem',
    },
  };
});
