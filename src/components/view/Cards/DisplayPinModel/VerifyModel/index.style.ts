import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type VerifyModelViewStyleProps = StyledComponentProps & {};

export const VerifyModelViewStyle = styled('div')<VerifyModelViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '.verify-model-container': {
        width: '500px',
        height: '168px',
        backgroundColor: theme.colors.white,
        borderRadius: '15px',
        fontFamily: theme.textFont.mainFont,
        color: theme.colors.textBlack,
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        fontWeight: theme.textWeight.regular,

        '.verify-model-cancel-button': {
          position: 'absolute',
          top: '40px',
          right: '46px',
        },
        '.verify-model-header': {
          display: 'flex',
          alignItems: 'center',
          '.verify-model-header-content': {
            fontSize: '34px',
            fontWeight: theme.textWeight.semibold,
          },
        },
      },
    };
  }
);
