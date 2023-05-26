import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ServiceBeneficiaryViewStyleProps = StyledComponentProps & {};

export const ServiceBeneficiaryViewStyle = styled(
  'div'
)<ServiceBeneficiaryViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;
  return {
    // width: '100%',
    height: '100%',
    // position: 'absolute',

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.mobile-main-container': {
      display: 'none',

      [bdTheme.breakpoints.down('md')]: {
        marginTop: '8rem',
        display: 'block',
        height: '100vh',
        backgroundColor: bdTheme.colors.cGrey,
      },
    },

    '.main-container': {
      width: '93%',
      paddingLeft: '3.5%',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.black,

      [theme.breakpoints.down('md')]: {
        display: 'none',
      },

      '.back-button': {
        marginTop: '1.5rem',
        fontWeight: bdTheme.textWeight.regular,
        display: 'flex',
        cursor: 'pointer',
        color: bdTheme.colors.black,
        textDecoration: 'none',
      },

      '.title-container': {
        marginTop: '1.2rem',
        width: '100%',
        height: '3rem',
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.regular,

        '.title-typo': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          color: bdTheme.colors.black,
          fontSize: '1.2rem',
        },

        '.action-bar-container': {
          marginLeft: '1rem',

          height: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: bdTheme.colors.textGray3,
          cursor: 'pointer',

          '.search-container': {
            width: '7rem',
            height: '2rem',
            borderColor: bdTheme.colors.strokeGray,
            borderRadius: '0.5rem',
            fontFamily: bdTheme.textFont.mainFont,
            fontWeight: bdTheme.textWeight.regular,
            fontSize: '0.95rem',

            input: {
              marginLeft: '-0.5rem',
            },

            '.search-icon': {
              color: bdTheme.colors.textGray2,
              width: '1.5rem',
              height: '1.5rem',
            },
          },

          '.add-button': {
            marginLeft: '1rem',
            borderRadius: '5px',
            height: '2rem',
            borderColor: bdTheme.colors.strokeGray,
            backgroundColor: bdTheme.colors.white,
            color: bdTheme.colors.textBlack,
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: bdTheme.textWeight.regular,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          },
        },
      },

      '.beneficiary-table': {
        marginTop: '2rem',
      },
    },
  };
});
