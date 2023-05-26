import { StyledComponentProps, styled } from '@mui/material';
import { BDTheme } from 'styles';

type BusinessProfileStepComponentStyleProps = StyledComponentProps & {};

export const BusinessProfileStepComponentStyle = styled(
  'div'
)<BusinessProfileStepComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    display: 'flex',

    '.button': {
      padding: '0.6rem 1rem',
      borderRadius: '10px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: bdTheme.colors.normalGray,
      color: bdTheme.colors.normalGray,
      fontSize: '18px',

      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    },

    '.activated': {
      color: bdTheme.colors.activeConfirmButtonBgColor,
      borderColor: bdTheme.colors.activeConfirmButtonBgColor,
    },

    '.margin-right-8px': {
      marginRight: '8px'
    }
  }
});
