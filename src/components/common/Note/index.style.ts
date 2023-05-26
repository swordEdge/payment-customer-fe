import { StyledComponentProps, styled } from "@mui/material";

import { BDTheme } from "styles";

type NoteComponentStyleProps = StyledComponentProps & {};

export const NoteComponentStyle = styled(
  "div"
)<NoteComponentStyleProps>(({ theme }) => {
  const bdTheme = theme as BDTheme;

  return {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: bdTheme.textFont.mainFont,
    padding: '0rem 3rem',
    boxSizing: 'border-box',

    '.title': {
      fontSize: '1.4rem',
      fontWeight: bdTheme.textWeight.semibold
    },

    '.content': {
      fontSize: '1.1rem',
      fontWeight: bdTheme.textWeight.regular
    }
  }
});
