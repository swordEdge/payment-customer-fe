import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type ProfilePromptedMessageComponentStyleProps = StyledComponentProps & {
  status: boolean;
};

export const ProfilePromptedMessageComponentStyle = styled(
  'div'
)<ProfilePromptedMessageComponentStyleProps>(({ theme, status }) => {
  const bdTheme = theme as BDTheme;

  return {
    fontWeight: bdTheme.textWeight.semibold,
    fontFamily: bdTheme.textFont.oneFont,
    fontSize: '20px',
    lineHeight: '150%',
    color: bdTheme.colors.textBlack,
    backgroundColor: bdTheme.colors.lightGreen,
    padding: '8px 16px',
    marginBottom: '32px',
    borderRadius: '12px',
    border: 'none',
    display: 'flex',
    alignItems: 'center',

    '.icon-container': {
      height: '24px',
      flex: '0 0 24px',
      color: 'black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '.icon': {
        height: '18px',
        width: '18px',
      },
    },

    '.message': {
      width: '100%',
      flex: 1,
      paddingLeft: '16px',
    },

    '.close': {
      height: '24px',
      flex: '0 0 24px',
      cursor: 'pointer',
    },
  };
});
