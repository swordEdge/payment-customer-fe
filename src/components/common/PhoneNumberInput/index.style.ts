import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type PhoneNumberInputStyleProps = StyledComponentProps & {};

export const PhoneNumberInputStyle = styled('div')(({ theme }: any) => {
  return {
    width: '100%',
    display: 'flex',
    columnGap: '8px',

    '.country-code-container': {
      flex: '0 0 140px',
    },

    '.phone-number-container': {
      flex: '1',
    },
  };
});
