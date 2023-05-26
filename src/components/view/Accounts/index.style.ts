import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountsViewStyleProps = StyledComponentProps & {};

export const AccountsViewStyle = styled('div')<AccountsViewStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;
    return {
      position: 'relative',
      width: '100%',

      '.mobile-account-header': {
        display: 'none',

        [theme.breakpoints.down('md')]: {
          display: 'block',
        },
      },

      '.overview-container': {
        padding: '0 3.5% 0 3.5%',
      },

      '.border': {
        borderBottom: '1px solid black',
      },
    };
  }
);
