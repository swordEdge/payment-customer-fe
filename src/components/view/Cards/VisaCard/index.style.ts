import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type VisaCardViewStyleProps = StyledComponentProps & {};

export const VisaCardViewStyle = styled('div')<VisaCardViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      fontFamily: 'Helvetica',
      display: 'inline-block',
      marginTop: '3rem',

      '.visa-card-header-container': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '.visa-card-name-text': {
          fontSize: '18px',
        },
        '.visa-card-setting-group': {
          display: 'flex',
          fontSize: '14px',
          alignItems: 'center',
          position: 'relative',
          '.visa-status-button': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: bdTheme.colors.strokeGray,
            width: '59px',
            height: '28px',
            borderRadius: '4px',
          },
          '.visa-status-dropdown': {
            marginLeft: '10px',
            border: '1px solid #E6E9EB',
            borderRadius: '4px',
            height: '24px',
            padding: '0px 5px 0px 5px',

            ':hover': {
              opacity: '0.7',
            },
          },

          '.visa-card-menu': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'absolute',
            top: '48px',
            right: '0px',
            width: '164px',
            // height: "210px",
            borderRadius: '6px',
            // background: "#3937DE",
            zIndex: 100,
          },
          '.visa-card-menuItem-container': {
            background: bdTheme.colors.btnAccent,
            padding: '8px 0px 8px 23px',
            zIndex: 100,
            // borderRadius: "6px",

            '.visa-card-menuItem': {
              fontSize: '12px',
              lineHeight: '14px',
              color: 'white',
            },
            ':hover': {
              opacity: '0.8',
            },
          },
          '.visa-card-menuItem-header': {
            background: bdTheme.colors.btnAccent,
            padding: '8px 0px 8px 23px',
            borderTopRightRadius: '6px',
            borderTopLeftRadius: '6px',
            zIndex: 100,

            '.visa-card-menuItem': {
              fontSize: '12px',
              lineHeight: '14px',
              color: 'white',
            },
            ':hover': {
              opacity: '0.8',
            },
          },
          '.visa-card-menuItem-footer': {
            background: bdTheme.colors.btnAccent,
            padding: '8px 0px 8px 23px',
            borderBottomRightRadius: '6px',
            borderBottomLeftRadius: '6px',

            '.visa-card-menuItem': {
              fontSize: '12px',
              lineHeight: '14px',
              color: 'white',
            },
            ':hover': {
              opacity: '0.8',
            },
          },
        },
      },

      '.visa-card-body-container': {
        borderRadius: '16px',
        padding: '24px 25px 24px 25px',
        marginTop: '20px',

        '.visa-card-body-header': {
          display: 'flex',
          justifyContent: 'space-between',
          '.visa-current-text': {
            fontSize: '14px',
          },
          '.visa-name-text': {
            color: bdTheme.colors.textBlack,
            fontSize: '20px',
          },
        },

        '.visa-current-balance-container': {
          display: 'flex',
          alignItems: 'center',
          marginTop: '12px',
          color: bdTheme.colors.textBlack,
          '.current-balance-text': {
            fontSize: '26px',
            fontStyle: 'normal',
            fontWeight: bdTheme.textWeight.regular,
          },
          '.current-cash-type': {
            fontSize: '20px',
            marginLeft: '15px',
          },
        },

        '.visa-card-body-footer': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '50px',
          fontSize: '14px',
          // ".visa-card-number-text": {
          //   fontSize: "14px"
          // },
          // ".visa-card-date-text":{
          //   fontSize:""
          // },
        },
      },
    };
  }
);
