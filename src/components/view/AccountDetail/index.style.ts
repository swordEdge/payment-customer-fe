import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountDetailViewStyleProps = StyledComponentProps & {};

export const AccountDetailViewStyle = styled(
  'div'
)<AccountDetailViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100vh',

    [bdTheme.breakpoints.down('md')]: {
      backgroundColor: bdTheme.colors.cGrey
    },

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.main-container': {
      width: '100%',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

      '.back-button': {
        marginTop: '1.5rem',
        fontWeight: bdTheme.textWeight.regular,
        display: 'flex',
        cursor: 'pointer',
        padding: '0 1.5rem',

        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        }
      },

      '.account-info-container': {
        padding: '0 1.5rem',
        marginTop: '2rem',
      },

      '.transaction-container': {
        marginTop: '1.5rem',
        padding: '0 1.5rem',

        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        }
      },

      '.show-transactions-button': {
        marginTop: '1.5rem',
        backgroundColor: bdTheme.colors.cGrey,
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderColor: bdTheme.colors.strokeGray,
        width: '100%',

        [bdTheme.breakpoints.up('md')]: {
          display: 'none'
        }
      },

      '.each-field': {
        padding: '0 2rem 0 2rem',
        height: '3.5rem',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: bdTheme.colors.white,

        '.field-name': {
          width: '50%',
          fontSize: '1.1rem',
        },

        '.field-value': {
          width: '50%',
          display: 'flex',
          justifyContent: 'right'
        }
      },
    },
  };
});
