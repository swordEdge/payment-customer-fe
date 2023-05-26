import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type OrderCardViewStyleProps = StyledComponentProps & {};

export const OrderCardViewStyle = styled('div')<OrderCardViewStyleProps>(
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

      '.order-model-container': {
        width: '440px',
        height: '440px',
        padding: '34px 32px 46px 32px',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        // padding: "2rem 1.5rem",
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,

        '.order-model-header': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.semibold,
          color: bdTheme.colors.textBlack,
          fontSize: '20px',
          lineHeight: '23px',
        },

        '.order-model-content': {
          display: 'flex',
          flexDirection: 'column',
          marginTop: '33px',

          '.order-model-content-header': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            fontWeight: bdTheme.textWeight.regular,
            width: '72%',
          },
          '.order-model-content-body': {
            display: 'flex',
            height: '150px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: '14px',
            color: '#666666',
            marginTop: '30px',
            '.order-model-content-body-content': {
              display: 'flex',
              alignItems: 'center',
              width: '70%',
              gaps: '13px',
              '.content-text': {
                color: 'black',
              },
            },
          },
          '.order-model-content-hr': {
            height: '1px',
            width: '100%',
            border: '0.5px solid #E6E9EB',
            marginTop: '25px',
          },
          '.order-model-content-footer': {
            fontSize: '14px',
            marginTop: '20px',
            color: '#666666',
            lineHeight: '25px',
          },
        },
        '.order-model-footer': {
          marginTop: '30px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '14px',
          textTransform: 'capitalize',
          textAlign: 'center',

          paddingLeft: '23px',
          paddingRight: '23px',

          '.cancel-button': {
            width: '45%',
            background: '#F0F5FD',
            paddingTop: '12px',
            paddingBottom: '12px',
            borderRadius: '6px',
          },
          '.confirm-button': {
            width: '45%',
            paddingTop: '12px',
            paddingBottom: '12px',
            background: '#2869FF',
            borderRadius: '6px',
            color: 'white',
          },
        },
      },
    };
  }
);
