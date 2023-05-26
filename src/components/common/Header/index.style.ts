import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type HeaderComponentStyleProps = StyledComponentProps & {};

export const HeaderComponentStyle = styled('div')<HeaderComponentStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      width: '100%',
      height: '100%',
      backgroundColor: bdTheme.colors.white,
      borderBottomStyle: 'solid',
      borderBottomColor: bdTheme.colors.grayLightBlue,
      borderBottomWidth: '1px',
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',

      '.alert-container': {
        marginLeft: '1.5rem',
        fontSize: '2rem',
        fontWeight: bdTheme.textWeight.light,
        color: bdTheme.colors.black,
      },

      '.avatar-container': {
        marginLeft: '1.8rem',
        marginRight: '1.75rem',
        width: '2.8rem',
        height: '2.5rem',

        img: {
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: bdTheme.colors.textGray2,
          width: '100%',
          height: '100%',
        },
      },
    };
  }
);
