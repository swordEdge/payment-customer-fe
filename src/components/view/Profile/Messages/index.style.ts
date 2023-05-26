import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MyMsgViewStyleProps = StyledComponentProps & {};

export const MyMsgViewStyle = styled('div')<MyMsgViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

      '.header-container': {
        marginTop: '3rem',
        height: '2rem',
      },

      '.main-container': {
        marginTop: '-0.5rem',
        width: '100%',
        borderRadius: '8px',
        borderColor: bdTheme.colors.strokeGray,
        borderStyle: 'solid',
        borderWidth: '1px',
        padding: '0.8rem 0.3rem',
        paddingRight: '0.8rem',
        backgroundColor: bdTheme.colors.bgLightBlue,
        height: '43rem',
        display: 'flex',

        '.msg-menu-container': {
          width: '24.5rem',

          '.send-msg-button': {
            width: '100%',
            height: '3.5rem',
            borderRadius: '8px',
            backgroundColor: bdTheme.colors.logoBlue,
            color: bdTheme.colors.white,
            display: 'flex',
            alignItems: 'center',
            textTransform: 'none',
            fontWeight: bdTheme.textWeight.light,
            paddingLeft: '1.2rem',
            paddingRight: '1.2rem',
            justifyContent: 'space-evenly',
          },

          '.msg-list-container': {
            height: '38.5rem',
            overflowY: 'auto',
            marginTop: '0.5rem',
            borderRadius: '5px',
            borderColor: bdTheme.colors.strokeGray,
            borderStyle: 'solid',
            borderWidth: '1px',
            padding: '0.5rem 0.3rem',
            paddingTop: '0rem',
            backgroundColor: bdTheme.colors.bgLightBlue,
          },
        },

        '.msg-main': {
          marginLeft: '1rem',
          borderRadius: '8px',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: bdTheme.colors.strokeGray,
          backgroundColor: bdTheme.colors.white,
          width: '100%',
          padding: '2rem 1rem',

          '.msg-header': {
            paddingLeft: '1.5rem',
            fontFamily: bdTheme.textFont.mainFont,

            '.account-drop': {
              width: '23rem',
              fontSize: '1rem',
            },

            '.msg-title': {
              fontSize: '1.8rem',
              color: bdTheme.colors.textBlack,
            },

            '.msg-date': {
              marginTop: '1rem',
              fontSize: '1rem',
              color: bdTheme.colors.textGray3,
            },
          },

          '.custom-divider': {
            marginTop: '2.5rem',
            color: bdTheme.colors.strokeGray,
          },

          '.msg-content': {
            marginTop: '2.5rem',
            paddingLeft: '1.5rem',
            paddingRight: '1.5rem',

            '.msg-edit-container': {
              // height: '20rem',
              // maxHeight: '20rem',
              overflowY: 'auto',
              fontWeight: bdTheme.textWeight.regular,
              color: bdTheme.colors.textBlack,
              fontSize: '1rem',
              lineHeight: '1.5rem',
              borderStyle: 'none',
              width: '100%',
            },

            '.sub-title': {
              fontWeight: bdTheme.textWeight.semibold,
              color: bdTheme.colors.textBlack,
              fontSize: '0.9rem',
            },

            '.msg-main-content': {
              marginTop: '2.5rem',
              height: '10rem',
              fontWeight: bdTheme.textWeight.regular,
              color: bdTheme.colors.textBlack,
              fontSize: '0.8rem',
              lineHeight: '1.5rem',
            },
          },

          '.note-container': {
            marginTop: '1.5rem',
            paddingLeft: '1.5rem',
            color: bdTheme.colors.textBlack,

            '.note-header': {
              fontWeight: bdTheme.textWeight.semibold,
            },

            'note-content': {
              paddingLeft: '-1rem',
              marginTop: '1rem',
              fontSize: '1rem',
              lineHeight: '1.5rem',
            },
          },

          '.action-button-container': {
            marginTop: '2.5rem',
            paddingLeft: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',

            '.nonback-button': {
              width: '6rem',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: bdTheme.colors.textBlack,
              backgroundColor: bdTheme.colors.white,
              textTransform: 'none',
              borderRadius: '5px',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: bdTheme.colors.strokeGray,
            },

            '.back-button': {
              marginLeft: '1rem',
              width: '6rem',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              color: bdTheme.colors.white,
              backgroundColor: theme.colors.logoBlue,
              textTransform: 'none',
              borderRadius: '5px',
            },
          },
        },
      },
    };
  }
);
