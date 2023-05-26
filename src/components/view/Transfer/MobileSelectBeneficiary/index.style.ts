import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type MobileSelectBeneficiaryViewStyleProps = StyledComponentProps & {};

export const MobileSelectBeneficiaryViewStyle = styled(
  'div'
)<MobileSelectBeneficiaryViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: bdTheme.colors.simplecGrey,
    zIndex: 100,

    '.mobile-header-container': {
      display: 'none',
      [bdTheme.breakpoints.down('md')]: {
        display: 'block',
      },
    },

    '.switch': {
      // borderTopStyle: 'solid',
      // borderTopWidth: '1px',
      // borderTopColor: bdTheme.colors.normalGray
    },

    '.switch-button': {
      width: '50%',
      textTransform: 'none',
      fontSize: '1.2rem'
    },

    '.display-flex': {
      display: 'flex',
      alignItems: 'center'
    },

    '.row-gap-1rem': {
      marginTop: '1rem'
    },

    '.col-gap-1rem': {
      marginLeft: '1rem'
    },

    '.color-blue': {
      color: bdTheme.colors.colorPrimary
    },

    '.color-black': {
      color: bdTheme.colors.black
    },

    '.border': {
      borderStyle: 'solid',
      borderWidth: '1px'
    },

    '.border-color-gray': {
      borderColor: bdTheme.colors.normalGray
    },

    '.circle-border': {
      borderRadius: '50%'
    }
  }
});
