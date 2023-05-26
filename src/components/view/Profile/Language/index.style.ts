import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type LanguageViewStyleProps = StyledComponentProps & {};

export const LanguageViewStyle = styled('div')<LanguageViewStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    return {
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,
      width: '100%',

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

      '.form-container': {
        [bdTheme.breakpoints.down('md')]: {
          padding: '0 1.5rem'
        }
      },

      '.margin-top-32': {
        marginTop: '32px',
      },

      '.header': {
        lineHeight: '150%',
        fontWeight: '700',
        fontSize: '20px',
        color: bdTheme.colors.textBlack,
      },

      '.button-container': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'end',
        float: 'right',
        columnGap: '8px',

        '.button-item': {
          padding: '8px 16px',
        },
      },
    };
  }
);
