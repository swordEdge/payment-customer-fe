import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransferStepStyleProps = StyledComponentProps & {};

export const TransferStepStyle = styled('div')<TransferStepStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: '100%',

      '.step-item': {
        padding: '20px 40px 20px 30px',
        background: '#F0F5FD',
        borderRadius: '20px',
        fontSize: '18px',
        position: 'relative',
        fontFamily: bdTheme.textFont.mainFont,

        '.step-item-check': {
          position: 'absolute',
          right: '16px',
          top: '24px',
          color: 'red',
        },
        '.step-item-title': {
          fontWeight: bdTheme.textWeight.semibold,
          // color: bdTheme.colors.txtLogo,
          color: '#0A33FF',
        },
        '.step-item-content': {
          marginTop: '10px',
        },
      },
    };
  }
);
