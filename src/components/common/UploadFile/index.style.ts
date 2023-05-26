import { StyledComponentProps, styled } from '@mui/material';
import { BDTheme } from 'styles';

type UploadFileComponentStyleProps = StyledComponentProps & {};

export const UploadFileComponentStyle = styled('button')<UploadFileComponentStyleProps>(({ theme }: any) => {
  const bdTheme = theme as BDTheme;

  return {
    fontFamily: 'inherit',
    width: '100%',
    height: '15rem',
    border: `1px dashed ${bdTheme.colors.surfaceTertiary}`,
    borderRadius: '10px',
    boxSizing: 'border-box',
    backgroundColor: bdTheme.colors.simplecGrey,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    cursor: 'pointer',

    '.upload-icon': {
      width: '4rem',
      height: '4rem',
    },

    '.comment-container': {
      fontFamily: 'inherit',

      '.main-comment': {
        textAlign: 'center',
        fontFamily: 'inherit',
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'center'
      },

      '.comment': {
        textAlign: 'center',
        fontFamily: 'inherit',
        color: bdTheme.colors.normalGray,
        fontSize: '15px'
      }
    },

    '.margin-top-8px': {
      marginTop: '12px'
    },

    '.color-lightBlue': {
      color: bdTheme.colors.lightBlue
    }
  }
});