import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type OverviewViewStyleProps = StyledComponentProps & {};

export const OverviewViewStyle = styled('div')<OverviewViewStyleProps>(
  ({ theme }) => {
    const bdTheme = theme as BDTheme;

    return {
      // width: '100%',
      height: '100%',
      fontFamily: bdTheme.textFont.mainFont,
      // position: 'absolute',

      '.mobile-header-container': {
        display: 'none',
        [bdTheme.breakpoints.down('md')]: {
          display: 'block',
        },
      },

      '.mobile-container': {
        padding: '0 1.5rem 0 1.5rem',

        [bdTheme.breakpoints.up('md')]: {
          display: 'none',
        },

        '.profile-card': {
          borderRadius: '15px',
          height: '6rem',
          backgroundColor: bdTheme.colors.white,
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: bdTheme.colors.normalGray,
          display: 'flex',
          padding: '0 1rem 0 1rem',
          alignItems: 'center',

          '.avatar': {
            borderRadius: '50%',
            width: '4rem',
            height: '4rem',
          },

          '.info': {
            marginLeft: '1rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
          },
        },

        '.profile-list-container': {
          marginTop: '2rem',

          '.profile-list-wrap': {
            marginTop: '0.5rem',
            width: '100%',
            height: '4rem',
            color: bdTheme.colors.black,
          },
        },
      },
    };
  }
);
