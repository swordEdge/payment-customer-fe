import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ServiceCardComponentStyleProps = StyledComponentProps & {};

export const ServiceCardComponentStyle = styled(
  'div'
)<ServiceCardComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '9rem',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      height: '7rem',
    },

    '.link': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '100%',
    },

    '.image-container': {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '3.3rem',
      height: '3.3rem',
      borderRadius: '50%',
    },

    '.card-name-container': {
      textAlign: 'center',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      color: bdTheme.colors.white,
      fontSize: '1.2rem',
    },
  };
});
