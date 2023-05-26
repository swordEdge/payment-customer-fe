import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type HelpBoxComponentStyleProps = StyledComponentProps & {};

export const HelpBoxComponentStyle = styled('div')<HelpBoxComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',

      '.question-container': {
        position: 'relative',
        width: '2.5rem',
        height: '2.5rem',
        margin: 'auto',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: bdTheme.colors.accentBlue,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1.5rem',
        color: bdTheme.colors.txtAccent,
        zIndex: 100,
      },

      '.help-content-container': {
        width: '100%',
        height: '7.2rem',
        marginTop: '-25px',
        borderRadius: '8px',
        backgroundColor: bdTheme.colors.white,
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,
        color: bdTheme.colors.txtAccent,
        paddingTop: '2rem',
        textAlign: 'center',

        '.content-typo': {
          color: bdTheme.colors.txtAccent,
        },
      },

      '.help-button-container': {
        width: '85%',
        height: '2rem',
        margin: 'auto',
        marginTop: '0.5rem',
        backgroundColor: bdTheme.colors.btnAccent,
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        color: bdTheme.colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
      },
    };
  }
);
