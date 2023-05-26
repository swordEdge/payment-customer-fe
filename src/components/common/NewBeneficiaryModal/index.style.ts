import { StyledComponentProps, styled } from '@mui/material';

import { BDTheme } from 'styles';

type NewBeneficiaryModalStyleProps = StyledComponentProps & {};

export const NewBeneficiaryModalStyle = styled('div')<NewBeneficiaryModalStyleProps>(
  ({ theme }: any) => {
    const bdTheme = theme as BDTheme;
    return {
      width: '40rem',
      zIndex: '1000 !important',

      [bdTheme.breakpoints.down('md')]: {
        width: '100%',
      },

      ".button": {
        width: '50%',
        height: "3rem",

        [bdTheme.breakpoints.down("md")]: {
          width: "100%",
        },
      },

      '.button-hover-grey': {
        '&:hover': {
          backgroundColor: bdTheme.colors.simplecGrey
        }
      },

      '.bg-accent-blue': {
        backgroundColor: bdTheme.colors.primary
      },

      '.color-white': {
        color: bdTheme.colors.white
      },

      '.fontweight-bold': {
        fontWeight: bdTheme.textWeight.semibold
      },

      '.border-color-grey': {
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: bdTheme.colors.strokeGray
      },

      '.modal-container': {
        display: "flex",
        flexDirection: "column",
        backgroundColor: bdTheme.colors.white,
        borderRadius: '12px',
        padding: '32px',
        gap: "32px",

        '.modal-header': {
          fontSize: "25px",
          fontWeight: "700",
          color: "#030D40",
        },

        '.modal-content': {
          width: '100%',
          display: "flex",
          flexDirection: "column",
          gap: "8px",

          ".main-item": {
            padding: "14px",
            background: "#F7F7FA",
            borderRadius: "12px",

            ".main-item-title": {
              fontSize: "12px",
              color: "#7F818A"
            }
          }
        },

        '.model-footer': {
          width: '100%',
          display: "flex",
          alignItems: 'center',
          gap: "10px",
        },

        ".css-1rnipc1 .saas-input-container": {
          height: "auto"
        },

        ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
          border: "none"
        },
        ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
          padding: "0"
        },

        ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input": {
          padding: "0",
          marginTop: "0.5rem"
        },
      },
    };
  }
);
