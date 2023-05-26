import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TwoFactorViewStyleProps = StyledComponentProps & {};

export const TwoFactorViewStyle = styled('div')<TwoFactorViewStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    return {
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

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

      '.main-container': {
        width: '100% !important',

        [bdTheme.breakpoints.down('md')]: {
          padding: '0rem 1.5rem',
          boxSizing: 'border-box'
        }
      },

      '.margin-top-32': {
        marginTop: '32px',
      },

      '.unchecked': {
        color: bdTheme.colors.strokeGray,
      },

      '.header': {
        lineHeight: '150%',
        fontWeight: '700',
        fontSize: '20px',
        color: bdTheme.colors.textBlack,
      },

      '.content': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderRadius: '10px',
        borderColor: bdTheme.colors.normalGray,
        padding: '0.5rem 1rem'
      },

      '.button-container': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'end',
        float: 'right',
        columnGap: '8px',

        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        },

        '.button-item': {
          padding: '8px 16px',
        },
      },
    };
  }
);
