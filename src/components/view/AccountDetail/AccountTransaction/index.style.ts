import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type AccountTransactionViewStyleProps = StyledComponentProps & {};

export const AccountTransactionViewStyle = styled(
  'div'
)<AccountTransactionViewStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    // height: '100%',

    '.title-container': {
      width: '100%',
      height: '4rem',
      fontFamily: bdTheme.textFont.mainFont,
      fontWeight: bdTheme.textWeight.regular,
      color: bdTheme.colors.black,
      fontSize: '1.2rem',

      '.action-bar-container': {
        marginTop: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        '.left-container': {
          display: 'flex',
          marginTop: '-0.6rem',

          '.dropdown-container': {
            width: '11rem',
            fontSize: '0.9rem',
            height: '1.5rem',
            paddingTop: '0',

            '.Dropdown-control': {
              paddingTop: '0.3rem',
              paddingBottom: '0.3rem',
              paddingLeft: '1rem',
              // borderRadius: '7px !important',
              backgroundColor: '#0A33FF !important',
              color: bdTheme.colors.white,
              lineHeight: '1.5rem',
              height: '2.2rem',
            },
            '.Dropdown-menu': {
              borderRadius: '6px !important',
              position: 'absolute',
            },
          },
        },
        '.right-container': {
          display: 'flex',

          '.statement-button': {
            height: '2.2rem',
            width: '8.5rem',
            borderColor: 'grey',
            color: bdTheme.colors.textBlack,
            fontSize: '0.9rem',
            textTransform: 'none',
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
        },
      },

      '.transaction-table': {
        marginTop: '1.5rem',
      },

      '.transaction-footer': {
        display: 'flex',
        marginTop: '20px',
        width: '100%',
        fontSize: '12px',
        justifyContent: 'space-between',
        color: 'black',

        '.transaction-footer-right': {
          display: 'flex',
          gap: '10px',
          alignItems: 'center',

          '.pagination-button': {
            cursor: 'pointer',

            ':hover': {
              scale: '1.1',
            },

            ':active': {
              scale: '1.2',
            },
          },
        },
      },

      '.red-currency': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1rem',
        color: bdTheme.colors.red,
      },

      '.green-currency': {
        fontFamily: bdTheme.textFont.mainFont,
        fontWeight: bdTheme.textWeight.semibold,
        fontSize: '1rem',
        color: bdTheme.colors.green,
      },
    },
  };
});
