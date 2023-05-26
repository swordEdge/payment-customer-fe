import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NotificationsViewStyleProps = StyledComponentProps & {};

export const NotificationsViewStyle = styled(
  'div'
)<NotificationsViewStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,
    color: bdTheme.colors.black,
    width: '100%',
    boxSizing: 'border-box',

    '.form-container': {
      [bdTheme.breakpoints.down('md')]: {
        padding: '0 1.5rem'
      }
    },

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.mobile-header-button': {
      padding: '0.8rem 1.3rem',
      // backgroundColor: bdTheme.colors.disabledBackgroundColor,
      color: bdTheme.colors.white,
      fontSize: '1rem',
    },

    '.flex': {
      display: 'flex',
      alignItems: 'center'
    },

    '.margin-top-32': {
      marginTop: '32px',
    },

    '.checked': {
      color: bdTheme.colors.lightBlue,
    },

    '.unchecked': {
      color: bdTheme.colors.strokeGray,
    },

    '.header': {
      lineHeight: '150%',
      fontWeight: '700',
      fontSize: '20px',
      color: bdTheme.colors.textBlack,

      [bdTheme.breakpoints.down('md')]: {
        display: 'none'
      }
    },

    '.content': {
      padding: '32px',
      marginTop: '16px',
      borderRadius: '12px',
      border: '1px solid #D1D4E3',
    },

    '.button-container': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'end',
      float: 'right',
      columnGap: '8px',

      [bdTheme.breakpoints.down('md')]: {
        display: 'none',
      },

      '.button-item': {
        padding: '8px 16px',
      },
    },
  };
});
