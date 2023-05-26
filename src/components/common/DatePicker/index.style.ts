import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DatePickerComponentStyleProps = StyledComponentProps & {};

export const DatePickerComponentStyle = styled(
  'div'
)<DatePickerComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
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

    '.MuiInputBase-root': {
      marginTop: '0.5rem',
      borderRadius: '5px',
      height: '2.7rem',
      lineHeight: '1.7rem',
      display: 'flex',
    },
  };
});
