import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountSelectComponentStyleProps = StyledComponentProps & {};

export const AccountSelectComponentStyle = styled(
  'div'
)<AccountSelectComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    height: '100%',
    borderRadius: '5px',
    borderStyle: 'solid',
    borderColor: bdTheme.colors.lightGray,
    borderWidth: '1px',
    padding: '0.5rem 0.5rem',

    '.account-select-container': {
      height: '100%',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderColor: bdTheme.colors.lightGray,
      borderWidth: '1px',
      backgroundColor: bdTheme.colors.bgLightBlue,
      display: 'flex',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      fontSize: '0.95rem',
      alignItems: 'center',
      paddingLeft: '1.5rem',

      '.select-container': {
        marginLeft: '1rem',
        width: '14.5rem',
      },

      '.account-number': {
        marginLeft: '2rem',
      },

      '.account-balance': {
        marginLeft: '2rem',
      },
    },
  };
});
