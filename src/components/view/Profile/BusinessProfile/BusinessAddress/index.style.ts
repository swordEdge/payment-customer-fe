import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BusinessAddressViewStyleProps = StyledComponentProps & {};

export const BusinessAddressViewStyle = styled(
  'div'
)<BusinessAddressViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: 'inherit',

    '.panel-container': {
      width: '100%',
      fontFamily: 'inherit',

      '.panel-title': {
        fontSize: '18px',
        fontFamily: 'inherit',
        fontWeight: bdTheme.textWeight.semibold
      },

      '.panel-comment': {
        marginTop: '24px',
        fontSize: '15px',
        fontFamily: 'inherit'
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

    '.checked': {
      color: bdTheme.colors.lightBlue,
    },

    '.unchecked': {
      color: bdTheme.colors.strokeGray,
    },
  }
});
