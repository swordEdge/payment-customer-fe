import { StyledComponentProps, styled, SelectProps } from '@mui/material';

import { BDTheme } from 'styles';

type NewDropDownRootComponentRootStyleProps = StyledComponentProps & SelectProps;

export const NewDropDownRootComponentRootStyle = styled(
  'select'
)<NewDropDownRootComponentRootStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;
  return {
    width: '100%',
    height: '100%',

    // '.MuiInputBase-root': {
    //   width: '100%',
    //   height: '100%',
    // }
  };
});
