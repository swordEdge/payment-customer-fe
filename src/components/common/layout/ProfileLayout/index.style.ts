import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ProfileLayoutComponentStyleProps = StyledComponentProps & {};

export const ProfileLayoutComponentStyle = styled(
  'div'
)<ProfileLayoutComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    padding: '32px 40px 32px 40px',

    [theme.breakpoints.down('md')]: {
      padding: 0,
    },

    '.menubar': {
      display: 'flex',
      columnGap: '24px',
      padding: '8px',

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },

      '.item': {
        lineHeight: '30px',
        fontSize: '20px',
        fontWeight: bdTheme.textWeight.semibold,
        borderBottomColor: bdTheme.colors.lightPurple,
        borderBottomStyle: 'solid',

        '.activated': {
          color: bdTheme.colors.lightPurple,
        },

        '.deactivated': {
          color: bdTheme.colors.textBlack,
        },
      },

      '.activated': {
        borderBottomWidth: '4px',
      },

      '.deactivated': {
        borderBottomWidth: '0px',
      },
    },

    '.body': {
      marginTop: '32px',
    },
  };
});
