import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DirectorShareholdersViewStyleProps = StyledComponentProps & {};

export const DirectorShareholdersViewStyle = styled(
  'div'
)<DirectorShareholdersViewStyleProps>(({ theme }: any) => {
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
        padding: '2rem 2rem',
        boxSizing: 'borderBox'
      }
    },

    '.button': {
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${bdTheme.colors.black}`,
      borderRadius: '30px',
      padding: '0.5rem 0.8rem',
      boxSizing: 'borderBox',

      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    },

    '.margin-top-32px': {
      marginTop: '32px'
    },

    '.margin-top-8px': {
      marginTop: '8px'
    },
  }
});
