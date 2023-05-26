// import mui module
import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SaasDateRangePickerStyleProps = StyledComponentProps & {};

export const SaasDateRangePickerStyle = styled(
  'div'
)<SaasDateRangePickerStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '90%',
    marginLeft: '5px',
    '.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
      height: '2.2rem',
      padding: '0 0 0 10px !important',
      fontSize: '14px',
    },
  };
});
