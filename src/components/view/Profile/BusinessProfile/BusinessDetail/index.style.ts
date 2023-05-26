import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BusinessDetailViewStyleProps = StyledComponentProps & {};

export const BusinessDetailViewStyle = styled(
  'div'
)<BusinessDetailViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: 'inherit',

    '.info-panel': {
      fontFamily: 'inherit',

      '.panel-comment': {
        fontSize: '18px',
        fontFamily: 'inherit',
        fontWeight: bdTheme.textWeight.semibold
      },

      '.panel': {
        marginTop: '24px',
        border: `1px solid ${bdTheme.colors.surfaceTertiary}`,
        borderRadius: '10px',
        padding: '1.5rem 1.5rem',
        boxSizing: 'borderBox'
      }
    },

    '.button-container': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'end',
      float: 'right',
      columnGap: '8px',

      [theme.breakpoints.down('md')]: {
        // display: 'none',
        float: 'left',
        padding: '0rem 1.5rem',
        width: '100%',
        boxSizing: 'border-box'
      },

      '.button-item': {
        padding: '8px 16px',

        [theme.breakpoints.down('md')]: {
          // display: 'none',
          padding: '16px 16px',
          width: '50%',
          boxSizing: 'border-box'
        },
      },
    },

    '.margin-top-32px': {
      marginTop: '32px'
    },
  }
});
