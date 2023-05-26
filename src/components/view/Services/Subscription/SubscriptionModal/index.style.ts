import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type SubscriptionModalStyleProps = StyledComponentProps & {};

export const SubscriptionModalStyle = styled(
  'div'
)<SubscriptionModalStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.modal-container': {
      width: '27rem',
      backgroundColor: bdTheme.colors.white,
      borderRadius: '15px',
      padding: '1.5rem 1.5rem',
      paddingBottom: '3rem',
      fontFamily: bdTheme.textFont.mainFont,
      color: bdTheme.colors.textBlack,

      '.modal-header': {
        '.title-typo': {
          fontFamily: bdTheme.textFont.mainFont,
          fontWeight: bdTheme.textWeight.regular,
          color: bdTheme.colors.black,
          fontSize: '1.2rem',
          marginBottom: '2rem',
        },

        '.cancel-button': {
          textAlign: 'right',
          color: bdTheme.colors.textGray3,
        },

        '.success-img': {
          display: 'flex',
          justifyContent: 'center',

          img: {
            margin: 'auto',
            width: '3rem',
            height: '3rem',
            borderRadius: '50%',
          },
        },
      },

      '.modal-content': {
        marginTop: '1.5rem',

        '.title-container': {
          display: 'flex',
          justifyContent: 'center',
          fontWeight: bdTheme.textWeight.semibold,
          fontSize: '1.5rem',
        },

        '.description-container': {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1.5rem',
          fontSize: '1rem',
        },
      },
    },
  };
});
