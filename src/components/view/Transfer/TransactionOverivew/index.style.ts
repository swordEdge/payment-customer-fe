import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransactionOverviewStyleProps = StyledComponentProps & {};

export const TransactionOverviewStyle = styled(
  'div'
)<TransactionOverviewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    paddingBottom: '114px',
    color: bdTheme.colors.textBlack,
    fontFamily: bdTheme.textFont.mainFont,

    '.transaction-overview-send-from': {
      display: 'flex',
      flexDirection: 'column',
      '.transaction-overview-send-from1': {
        fontSize: '16px',
        color: bdTheme.colors.textGray2,
      },
      '.transaction-overview-send-from2': {
        display: 'flex',
        fontSize: '20px',
        // justifyContent: "space-between",
        alignItems: 'center',
        color: bdTheme.colors.textBlack,
        marginTop: '11px',
        '.transaction-overview-send-from2-content': {
          marginRight: '20px',
          fontSize: '32px',
        },
      },
    },

    '.transaction-overview-space': {
      marginTop: '30px',
      border: '1px solid #E6E9EB',
    },
    '.transaction-overview-rate-container': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '15px',
      fontSize: '16px',

      '.transaction-overview-rate-main': {
        display: 'flex',
        marginTop: '15px',
        '.transaction-overview-rate-title': {
          color: bdTheme.colors.textGray1,
        },
        '.transaction-overview-rate-content': {
          color: bdTheme.colors.textBlack,
          marginLeft: '11px',
        },
      },
    },

    '.transaction-overview-receive': {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '30px',
      '.transaction-overview-receive1': {
        fontSize: '16px',
        color: bdTheme.colors.textGray2,
      },
      '.transaction-overview-receive2': {
        display: 'flex',
        fontSize: '20px',
        // justifyContent: "space-between",
        alignItems: 'center',
        color: bdTheme.colors.textBlack,
        marginTop: '11px',
        '.transaction-overview-receive2-content': {
          marginRight: '20px',
          fontSize: '32px',
        },

        '.transaction-overview-receive2-status': {
          marginLeft: '22px',
        },
      },
    },
  };
});
