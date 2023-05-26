import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ActionBarStyleProps = StyledComponentProps & {};

export const ActionBarStyle = styled('div')<ActionBarStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',

      '.toggle-container': {},

      '.edit-button-container': {
        display: 'flex',
        alignItems: 'center',
        width: '3.5rem',
        justifyContent: 'space-between',
        color: bdTheme.colors.logoBlue,
      },
    };
  }
);
