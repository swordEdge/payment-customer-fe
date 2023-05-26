import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type OrderDetailViewStyleProps = StyledComponentProps & {};

export const OrderDetailViewStyle = styled('div')<OrderDetailViewStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;

    return {
      marginTop: '1rem',
      width: '100%',
      borderRadius: '5px',
      borderColor: theme.colors.strokeGray,
      borderWidth: '1px',
      borderStyle: 'solid',
      height: '45rem',

      '.action-container': {
        paddingRight: '2rem',
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'right',

        '.edit-button': {
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          color: bdTheme.colors.textGray3,
          width: '4rem',
          justifyContent: 'space-around',
        },

        '.edit-active': {
          color: bdTheme.colors.logoBlue,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          width: '4rem',
          justifyContent: 'space-around',
        },
      },

      '.modal-container': {
        margin: 'auto',
        width: '27rem',
        backgroundColor: bdTheme.colors.white,
        borderRadius: '15px',
        padding: '0rem 1.75rem',
        fontFamily: bdTheme.textFont.mainFont,
        color: bdTheme.colors.textBlack,

        '.modal-header': {
          fontSize: '1.25rem',
        },

        '.modal-content': {},

        '.modal-footer': {
          marginTop: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',

          '.delete-button': {
            border: 'none',
            color: bdTheme.colors.white,
            backgroundColor: bdTheme.colors.red,
          },

          '.cancel-button': {
            borderRadius: '7px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: bdTheme.colors.strokeGray,
            color: bdTheme.colors.textBlack,
            textTransform: 'none',
          },

          '.close-button': {
            marginLeft: '1rem',
            borderRadius: '7px',
            backgroundColor: bdTheme.colors.logoBlue,
            color: bdTheme.colors.white,
            textTransform: 'none',
          },
        },
      },
    };
  }
);
