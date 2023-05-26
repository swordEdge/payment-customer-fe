import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AwaitingActionComponentProps = StyledComponentProps & {};

export const AwaitingActionComponentStyle = styled(
  'div'
)<AwaitingActionComponentProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    borderRadius: '15px',
    backgroundColor: bdTheme.colors.accentBlue,
    padding: '1rem 1rem',
    boxSizing: 'border-box',
    color: bdTheme.colors.white,
    display: 'flex',
    cursor: 'pointer',

    '.awaiting-icon': {
      width: '20%',

      '.icon-img': {
        margin: 'auto',
        width: '70%',
      },
    },

    '.card-content': {
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },

    '.next-action-icon': {
      width: '10%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    '.fontweight-bold': {
      fontWeight: bdTheme.textWeight.semibold,
    },
  };
});
