import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type InfoCardComponentStyleProps = StyledComponentProps & {};

export const InfoCardComponentStyle = styled(
  'div'
)<InfoCardComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: bdTheme.textFont.mainFont,

    '.title-container': {
      fontWeight: bdTheme.textWeight.semibold,
      color: bdTheme.colors.textGray3,
      fontSize: '0.8rem',
    },

    '.value-container': {
      marginTop: '1rem',
      fontWeight: bdTheme.textWeight.regular,
      color: bdTheme.colors.black,
      fontSize: '0.9rem',
    },
  };
});
