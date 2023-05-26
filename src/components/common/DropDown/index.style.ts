import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type DropDownComponentStyleProps = StyledComponentProps & {};

export const DropDownComponentStyle = styled(
  'div'
)<DropDownComponentStyleProps>(({ theme }: any) => {
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

    '.dropdown-main': {
      marginTop: '0.5rem',

      '.Dropdown-control': {
        borderRadius: '5px',
        height: '2.7rem',
        lineHeight: '1.7rem',
        display: 'flex',
        backgroundColor: bdTheme.colors.white + ' !important',

        '.Dropdown-arrow': {
          marginTop: '0.2rem',
        },
      },
    },
  };
});
