import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type PhoneInputStyleProps = StyledComponentProps & {};

export const PhoneInputStyle = styled('div')<PhoneInputStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',

      '.label-container': {
        display: 'flex',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        color: 'red',

        '.label-show': {
          color: 'black',
          marginLeft: '0.5rem',
          fontSize: '1rem',
        },
      },

      '.country-code-select-wrapper': {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        zIndex: 100,
        height: '4rem !important',

        '.country-code-wrapper': {
          height: '100%',
        },

        '.dropdown-button': {
          border: '1px black solid',
          borderRadius: '7px',
        },
      },

      '.phone-input-wrapper': {
        display: 'flex',
        cursor: 'pointer',
        boxSizing: 'border-box',
      },

      '.country-dropdown': {
        display: 'none',
        position: 'absolute',
        zIndex: '1',
        top: '51px',
        maxHeight: '120px',
        overflowX: 'hidden',
        overflowY: 'auto',
        border: '1px black solid',
        borderRadius: '7px',
      },

      '.opened': {
        display: 'flex',
        flexDirection: 'column',
      },

      '.country-code-wrapper': {
        display: 'flex',
        width: '6rem',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContents: 'center',
        fontSize: '20px',
        padding: '5px 10px',
        backgroundColor: 'white',

        '.flag-div': {
          marginRight: '15px',
        },
      },

      '.country-code-wrapper:hover': {
        backgroundColor: 'skyBlue',
      },

      '.number-wrapper': {
        flex: '1',
        marginLeft: '10px',
        height: '4.1rem',
        boxSizing: 'border-box',

        '.saas-input-container': {
          height: '51px',
          marginTop: '0',
        },
      },

      '.phone-input': {
        width: '100%',
        right: 0,
        height: '100% !important'
      },
    };
  }
);
