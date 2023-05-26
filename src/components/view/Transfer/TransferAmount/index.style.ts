import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type TransferAccountStyleProps = StyledComponentProps & {};

export const TransferAccountStyle = styled('div')<TransferAccountStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      color: bdTheme.colors.textBlack,
      fontFamily: bdTheme.textFont.mainFont,

      '.transfer-amount-title': {
        fontSize: '16px',
      },

      '.transfer-amount-setting': {
        width: '80%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '22px',

        '.transfer-amount-setting-container': {
          display: 'flex',
          flexDirection: 'column',
          width: '43%',

          '.transfer-amount-setting-content': {
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%)',
            height: '70px',
            // background: bdTheme.colors.lightGray,
            // border: '1px solid #E6E9EB',
            borderRadius: '8px',

            '.transfer-amount-setting-content-title': {
              fontSize: '14px',
              color: '#7F818A',
              height: 'auto',
              width: '55%',
              background: bdTheme.colors.lightGray,
              padding: '16px',
              boxSizing: 'border-box',
              border: '1px solid #E6E9EB',
              borderRadius: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            },
            '.transfer-amount-setting-content-price': {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '16px',
              boxSizing: 'border-box',
              // alignItems: 'center',
              gap: '5px',
              fontSize: '13px',
              width: '38%',
              background: bdTheme.colors.lightGray,
              border: '1px solid #E6E9EB',
              borderRadius: '10px',
              color: '#7F818A',

              '.transfer-amount-setting-content-main': {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                fontSize: '14px',
                color: 'black',
              },
            },
          },

          '.transfer-amount-setting-content-text': {
            fontSize: '14px',
            color: '#7F818A',
            fontWeight: bdTheme.textWeight.regular,
            marginLeft: '19px',
            marginTop: '14px',
          },
        },
      },

      '.transfer-amount-default': {
        display: 'flex',

        width: '80%',
        marginTop: '26px',
        fontSize: '14px',

        '.transfer-amount-default-factor': {
          width: '30%',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',

          '.transfer-amount-default-content1': {
            color: '#7F818A',
          },
          '.transfer-amount-default-content2': {
            // marginLeft: '12px',
            color: bdTheme.colors.textBlack,
            fontWeight: bdTheme.textWeight.semibold,
          },
        },
      },

      '.transfer-amount-divide': {
        marginTop: '25px',
        color: '#7F818A',
      },

      '.transfer-amount-receiver-container': {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '30px',

        '.transfer-amount-receiver-left': {
          display: 'flex',
          flexDirection: 'column',
          width: '48%',
          padding: '17px',
          boxSizing: 'border-box',
          backgroundColor: '#E1F7FF',
          borderRadius: '10px',

          '.transfer-amount-receiver-left1': {
            fontSize: '16px',
            color: bdTheme.colors.textBlack,
          },
          '.transfer-amount-receiver-left2': {
            display: 'flex',
            fontSize: '20px',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: bdTheme.colors.textBlack,
            marginTop: '11px',
            fontWeight: bdTheme.textWeight.semibold,

            '.transfer-amount-receiver-left2-content': {
              marginRight: '20px',
              fontSize: '32px',
            },
          },
        },
        '.transfer-amount-receiver-right': {
          display: 'flex',
          flexDirection: 'column',
          width: '47%',
          marginTop: '9px',

          '.transfer-amount-receiver-days': {
            width: '100%',
            display: 'flex',
            // justifyContent: "space-around",
            // padding: '0px 0px 15px 19px',
            // border: '1px solid #E6E9EB',
            borderRadius: '6px  ',
            gaps: '20px',

            '.transfer-amount-receiver-days-description': {
              marginLeft: '15px',
            },
          },
          '.transfer-amount-change-dates': {
            display: 'flex',
            // justifyContent: 'end',
            fontSize: '14px',
            alignItems: 'end',
            color: bdTheme.colors.lightBlue,
            marginTop: '10px',
          },
        },
      },

      '.transfer-amount-other-setting-container': {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',

        '.transfer-amount-other-setting-personal': {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          color: bdTheme.colors.textBlack,

          '.transfer-amount-other-setting-personal-content': {
            display: 'flex',
            flexDirection: 'column',
            width: '48%',
            padding: '10px 20px',
            boxSizing: 'border-box',
            background: '#F7F7FA',
            borderRadius: '10px',
            // border: "1px solid black",

            '.transfer-amount-other-setting-personal-title': {
              fontSize: '12px',
              color: '#7F818A',
            },
            '.transfer-amount-other-setting-personal-input': {
              width: '100%',
              // height: '70px',
              marginTop: '10px',
              border: 'none',
            },
          },
        },

        '.transfer-amount-other-setting-stand-order': {
          fontSize: '16px',
          color: bdTheme.colors.lightBlue,
          marginLeft: 'auto',
          marginTop: '10px',
        },

        '.transfer-amount-stand-order-setting': {
          width: '100%',
          height: '120px',
          fontSize: '16px',

          '.transfer-amount-stand-order-setting-grid': {
            width: '100%',
            marginTop: '7px',
            '.transfer-amount-stand-order-setting-grid-item': {
              display: 'inline-block',

              '.transfer-amount-stand-order-setting-grid-item-content': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                // border: "1px solid black",

                '.transfer-amount-stand-order-setting-grid-item-content-input':
                  {
                    width: '48%',
                  },
              },
            },
          },
        },
      },

      '.css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        border: '0px',
      },

      '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
        padding: '0px',
      },

      '.css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-disabled': {
        height: 'auto',
        marginTop: 'auto',
      },

      '.css-10j2cq0 .saas-input-container': {
        height: '2.7rem',
      },
      '.css-1rnipc1 .saas-input-container': {
        height: 'auto',
        marginTop: 'auto',
      },
      '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
        padding: '0',
      },
    };
  }
);
