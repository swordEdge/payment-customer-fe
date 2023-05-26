import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BusinessProfileViewStyleProps = StyledComponentProps & {};

export const BusinessProfileViewStyle = styled(
  'div'
)<BusinessProfileViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,

    '.header': {
      fontFamily: 'inherit',
      display: 'flex',
      alignItems: 'center',

      '.header-comment': {
        fontWeight: '700',
        fontSize: '20px',
        fontFamily: 'inherit',
        color: bdTheme.colors.textBlack,
      },

      '.status-container': {
        marginLeft: '1rem',
        display: 'flex',
        alignItems: 'center',

        '.status-icon': {
          width: '30px',
          height: '30px'
        },

        '.status-comment': {
          marginLeft: '0.5rem',
          fontWeight: '700',
          fontSize: '20px',
          fontFamily: 'inherit',
        }
      }
    },

    '.step-container': {

    },

    '.info-container': {
      fontFamily: 'inherit',

      '.comment': {
        fontFamily: 'inherit',
      }
    },

    '.margin-top-32px': {
      marginTop: '32px'
    },

    '.color-yellow': {
      color: bdTheme.colors.yellow
    }
  }
});
