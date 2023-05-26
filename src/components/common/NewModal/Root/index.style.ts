import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewModalComponentRootStyleProps = StyledComponentProps;

export const NewModalComponentRootStyle = styled(
  'div'
)<NewModalComponentRootStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    position: 'fixed',
    left: '0px',
    right: '0px',
    top: '0px',
    bottom: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
    backgroundColor: bdTheme.colors.modalBackground,
  };
});
