import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type KYBStepViewStyleProps = StyledComponentProps & {};

export const KYBStepViewStyle = styled('div')<KYBStepViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      marginTop: '1.5rem',
      color: bdTheme.colors.accentBlue,
      fontFamily: bdTheme.textFont.mainFont,
      height: '8rem',
      marginBottom: '3rem',

      '.title-typo': {
        fontSize: '1.2rem',
        fontWeight: bdTheme.textWeight.semibold,
        marginBottom: '1rem',
      },

      '.slide': {
        height: '100% !important',
      },

      '.bg-gray': {
        backgroundColor: bdTheme.colors.strokeGray,
        color: bdTheme.colors.accentBlue
      },

      '.bg-green10': {
        backgroundColor: bdTheme.colors.green10,
        color: bdTheme.colors.white
      },
    };
  }
);
