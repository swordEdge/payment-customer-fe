import { StyledComponentProps, styled } from '@mui/material';
import { BDTheme } from 'styles';

type MobileItemComponentStyleProps = StyledComponentProps & {
};

export const MobileItemComponentStyle = styled(
  'div'
)<MobileItemComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '3.5rem',
    backgroundColor: bdTheme.colors.white,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 1rem',
    fontFamily: bdTheme.textFont.mainFont,
    fontSize: '1.2rem',
    fontWeight: bdTheme.textWeight.semibold,
    alignItems: 'center',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    borderBottomColor: bdTheme.colors.strokeGray,
    borderTopStyle: 'solid',
    borderTopWidth: '1px',
    borderTopColor: bdTheme.colors.strokeGray,
    boxSizing: 'border-box',

    '.value-container': {
      display: 'flex',
      justifyContent: 'right',
      alignItems: 'center',
    },

    '.color-gray': {
      color: bdTheme.colors.normalGray
    }
  }
});
