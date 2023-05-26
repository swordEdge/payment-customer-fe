import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type KYBStepComponentStyleProps = StyledComponentProps & {};

export const KYBStepComponentStyle = styled('div')<KYBStepComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      height: '100%',
      bordrColor: bdTheme.colors.accentBlue,
      borderRadius: '10px',
      borderStyle: 'solid',
      borderWidth: '2px',
      boxSizing: 'border-box',
      display: 'flex',
      padding: '1rem 1rem',
      cursor: 'pointer',

      '.step-title': {
        width: '90%',
      },

      '.step-next': {
        width: '10%',
        display: 'flex',
        alignItems: 'end',
      },

      '.fontweight-bold': {
        fontWeight: bdTheme.textWeight.semibold,
      },
    };
  }
);
