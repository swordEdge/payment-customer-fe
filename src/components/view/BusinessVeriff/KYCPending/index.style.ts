import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type KYCPendingViewStyleProps = StyledComponentProps & {};

export const KYCPendingViewStyleProps = styled('div')<KYCPendingViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      margin: "auto",
      width: "60%",

      [bdTheme.breakpoints.down("md")]: {
        width: "90%",
      },

      '.note-container': {
        width: '100%',
        height: '15rem',
        backgroundColor: bdTheme.colors.infoTint
      },

      '.icon-container': {
        width: '4rem',
        height: '4rem'
      }
    }
  }
);
