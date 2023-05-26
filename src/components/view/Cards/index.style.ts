import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type CardsViewStyleProps = StyledComponentProps & {};

export const CardsViewStyle = styled('div')<CardsViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: '100%',
      // height: "100%",

      '.mobile-header-container': {
        display: 'none',
        [bdTheme.breakpoints.down('md')]: {
          display: 'block',
        },
      },

      '.overview-container': {
        width: '100%',
        paddingTop: '3.3%',
        paddingLeft: '4%',
        paddingRight: '3%',
        boxSizing: 'border-box',
        fontFamily: theme.textFont.mainFont,

        '.title-text': {
          fontFamily: 'Helvetica',
          fontSize: `20px`,
          color: 'black',
          // fontWeight: theme.textWeight.regular,
        },
        '.action-bar-container': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '3.3rem',

          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
          },

          '.each-button': {
            width: '4rem',
            minWidth: '4rem',
          },
          '.action-bar-right': {
            display: 'flex',

            '.search-container': {
              width: '7rem',
              height: '2rem',
              borderColor: theme.colors.grayLightBlue,
              borderRadius: '0.5rem',
              fontFamily: theme.textFont.mainFont,
              fontWeight: theme.textWeight.regular,
              fontSize: '1rem',

              input: {
                marginLeft: '-0.5rem',
              },

              '.search-icon': {
                color: theme.colors.textGray2,
                width: '1.5rem',
                height: '1.5rem',
              },
            },

            '.add-order-button': {
              height: '2rem',
              display: 'flex',
              alignItems: 'center',
              fontSize: '14px',
              fontStyle: 'normal',
              color: 'black',
              marginLeft: '1rem',
              paddingLeft: '15px',
              paddingRight: '13px',
              gaps: '15px',

              backgrondColor: theme.colors.white,
              borderStyle: 'solid',
              borderWidth: '1px',
              borderColor: theme.colors.textGray2,
              borderRadius: '7px',
            },
          },
        },
        '.visa-card-container': {
          marginTop: '1.5rem',
        },
        '.visa-card-paginetion': {
          display: 'flex',
          justifyContent: 'space-between',
          width: '65px',
          marginLeft: 'auto',
          marginTop: '45px',
        },
      },
    };
  }
);
