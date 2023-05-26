import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type CheckBoxStyleProps = StyledComponentProps & {};

export const CheckBoxStyle = styled('div')<CheckBoxStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      svg: {
        fontSize: '1.7rem',
      },

      '.unchecked': {
        color: bdTheme.colors.strokeGray,
        fontWeight: bdTheme.textWeight.light,
      },
    };
  }
);
