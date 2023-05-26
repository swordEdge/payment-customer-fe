import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ChangePasswordViewStyleProps = StyledComponentProps & {};

export const ChangePasswordViewStyle = styled(
  'div'
)<ChangePasswordViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,
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

    '.header': {
      lineHeight: '150%',
      fontWeight: '700',
      fontSize: '20px',
      color: bdTheme.colors.textBlack,

      [bdTheme.breakpoints.down('md')]: {
        padding: '0rem 1.5rem',
      },
    },

    '.content': {
      padding: '32px',
      marginTop: '16px',
      borderRadius: '12px',
      border: '1px solid #D1D4E3',

      [bdTheme.breakpoints.down('md')]: {
        padding: '0rem 1.5rem',
        border: 'none',
      },
    },

    '.margin-top-32': {
      marginTop: '32px',
    },

    '.margin-top-8': {
      marginTop: '8px',
    },

    '.new-data-container': {
      display: 'flex',
      width: '100%',
      columnGap: '16px',

      [bdTheme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },

    '.password-item': {
      width: '360px',

      [bdTheme.breakpoints.down('md')]: {
        width: '100%',
      },
    },

    '.password-rule-container': {
      fontSize: '12px',
      fontWeight: bdTheme.textWeight.regular,
      color: bdTheme.colors.normalGray,
      lineHeight: '24px',

      [bdTheme.breakpoints.down('md')]: {
        marginTop: '0.5rem',
      },

      ul: {
        marginBlockStart: '0px',
        marginBlockEnd: '0px',
        marginInlineStart: '0px',
        marginInlineEnd: '0px',
        paddingInlineStart: '20px',

        li: {
          lineHeight: '20px',
        },
      },
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

    '.bg-light-green': {
      backgroundColor: bdTheme.colors.lightGreen
    },

    '.bg-red': {
      backgroundColor: bdTheme.colors.red
    },

    '.color-white': {
      color: bdTheme.colors.white
    },

    '.color-black': {
      color: bdTheme.colors.black
    },

    '.margin-bottom-gap': {
      marginBottom: '1rem'
    }
  };
});
