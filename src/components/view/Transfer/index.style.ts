import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransferViewStyleProps = StyledComponentProps & {};

export const TransferViewStyle = styled('div')<TransferViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',

      '.mobile-transfer-container': {
        [bdTheme.breakpoints.up('md')]: {
          display: 'none'
        }
      },

      '.transfer-overview-container': {
        paddingTop: '1.5rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',

        [bdTheme.breakpoints.down('md')]: {
          display: 'none'
        },

        '.transfer-overview-header': {
          width: '100%',
          padding: '15px 30px 15px 30px',
          boxSizing: 'border-box',
          border: '1px solid #E6E9EB',
          borderRadius: '20px',
        },
        '.transfer-overview-main-content': {
          width: '100%',
          marginTop: '37px',
        },
        '.transfer-overview-content': {
          width: 'calc(100% - 120px)',
          marginTop: '25px',
          padding: '30px 60px 0px 60px',
          border: '1px solid #E6E9EB',
          borderRadius: '10px',
        },

        '.transfer-overview-footer': {
          // width: '15rem',
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
          position: 'absolute',
          right: '40px',
          marginTop: '25px',
          // bottom: "0px",

          '.page-button': {
            width: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // background: bdTheme.colors.accentBlue,
            background: '#0A33FF',
            color: 'white',
            paddingTop: '9px',
            paddingBottom: '9px',
            borderRadius: '20px',
            cursor: 'pointer',
            gap: '10px',
          },

          '.back-button': {
            width: '120px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#fffff',
            color: 'black',
            paddingTop: '9px',
            paddingBottom: '9px',
            cursor: 'pointer',
            borderRadius: '20px',
            border: '1px solid #0A33FF',
            gap: '10px',
          },
        },
      },
    };
  }
);
