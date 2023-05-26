import { StyledComponentProps, styled } from '@mui/material';
import { BDTheme } from 'styles';

type KYBDocumentComponentStyleProps = StyledComponentProps & {};

export const KYBDocumentComponentStyle = styled(
  'div'
)<KYBDocumentComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    padding: '1rem 1.5rem',
    border: `1px solid ${bdTheme.colors.surfaceTertiary}`,
    borderRadius: '10px',
    boxSizing: 'border-box',

    '.profile-container': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '.profile-box': {
        display: 'flex',
        alignItems: 'center',

        '.avatar': {
          width: '3rem',
          height: '3rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bdTheme.colors.surfaceTertiary,
          borderRadius: '50%',

          img: {
            width: '1.5rem',
            height: '1.5rem'
          }
        },

        '.name': {
          fontSize: '20px'
        },

        '.status': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '18px'
        }
      },

      '.action-box': {
        display: 'flex',
        alignItems: 'center',
      }
    },

    '.action': {
      cursor: 'pointer'
    },

    '.margin-left-8px': {
      marginLeft: '8px'
    },

    '.margin-left-16px': {
      marginLeft: '16px'
    },

    '.color-yellow': {
      color: bdTheme.colors.yellow
    },

    '.color-purple10': {
      color: bdTheme.colors.purple10
    },

    '.color-green10': {
      color: bdTheme.colors.green10
    },
  }
});
