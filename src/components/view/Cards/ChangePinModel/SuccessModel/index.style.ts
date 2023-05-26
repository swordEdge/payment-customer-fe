import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SuccessModelViewStyleProps = StyledComponentProps & {};

export const SuccessModelViewStyle = styled('div')<SuccessModelViewStyleProps>(
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

      '.success-model-container': {
        width: '400px',
        height: '120px',
        padding: '42px 38px 56px 33px',
        position: 'relative',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,
        '.success-model-cancel-button': {
          position: 'absolute',
          right: '46px',
        },
        '.success-model-header': {},

        '.success-model-content': {
          marginTop: '23px',
          fontSize: '20px',
          fontWeight: bdTheme.textWeight.semibold,
        },
        '.success-model-footer': {
          marginTop: '13px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          textTransform: 'capitalize',
          textAlign: 'center',
        },
      },
    };
  }
);
