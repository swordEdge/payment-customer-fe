import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type BeneficiaryComponentStyleProps = StyledComponentProps & {};

export const BeneficiaryComponentStyle = styled(
  'div'
)<BeneficiaryComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    backgroundColor: bdTheme.colors.white,
    display: 'flex',
    alignItems: 'center',
    height: '4.5rem',
    padding: '0.5rem 1.5rem',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: bdTheme.colors.strokeGray,
    boxSizing: 'border-box',

    '.avatar': {
      width: '3rem',
      borderRadius: '50%',
    },

    '.info-container': {
      height: '100%',
      marginLeft: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      fontFamily: bdTheme.textFont.mainFont,
    },

    '.fontweight-bold': {
      fontWeight: bdTheme.textWeight.semibold,
    },

    '.color-gray': {
      color: bdTheme.colors.normalGray,
    },
  };
});
