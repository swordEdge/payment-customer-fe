import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountOverviewViewStyleProps = StyledComponentProps & {};

export const AccountOverviewViewStyle = styled(
  'div'
)<AccountOverviewViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    width: '100%',
    height: '100%',
    paddingTop: '3.2rem',

    '.title-container': {
      width: '100%',
      height: '3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '.title-typo': {
        fontFamily: theme.textFont.mainFont,
        fontWeight: theme.textWeight.semibold,
        color: theme.colors.black,
        fontSize: '1.2rem',
      },

      '.title-add': {
        padding: '1px',
        height: 'auto',
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        cursor: 'pointer',

        ':hover': {
          borderColor: 'blue',
        },

        ':active': {
          transform: 'scaleX(1.05)',
        },
      },

      '.action-bar-container': {
        display: 'flex',

        '.each-button': {
          width: '4rem',
          minWidth: '4rem',
        },
      },
    },

    '.card-container': {
      marginTop: '0.7rem',
      padding: '0 0.5rem 0 0.5rem',
      height: '8rem',
      backgroundColor: theme.colors.white,
      borderRadius: '15px',
      borderColor: theme.colors.lightGray,
      borderStyle: 'solid',
      borderWidth: '2 px',
      display: 'flex',

      [theme.breakpoints.down('sm')]: {
        borderStyle: 'none',
      },

      '.card-array-container': {
        width: '100%',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        display: 'flex',

        '.each-card': {
          width: '24%',
          height: '100%',

          '.blue-card': {
            backgroundColor: theme.colors.blue,
            backgroundImage: `linear-gradient(to top right, ${theme.colors.blue}, ${theme.colors.lightGray})`,
          },

          '.green-card': {
            backgroundColor: theme.colors.green,
            backgroundImage: `linear-gradient(to top right, ${theme.colors.green}, ${theme.colors.lightGray})`,
          },

          '.purple-card': {
            backgroundColor: theme.colors.purple,
            backgroundImage: `linear-gradient(to top right, ${theme.colors.purple}, ${theme.colors.lightGray})`,
          },

          '.pink-card': {
            backgroundColor: theme.colors.pink,
            backgroundImage: `linear-gradient(to top right, ${theme.colors.pink}, ${theme.colors.lightGray})`,
          },
        },
      },
    },

    'a:-webkit-any-link': {
      textDecoration: 'none !important',
    },
  };
});
