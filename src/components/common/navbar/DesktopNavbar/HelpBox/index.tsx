import React from "react";
import { Box, Typography } from "@mui/material";
import { HelpBoxComponentStyle } from "./index.style";

export const HelpBoxComponent: React.FC = () => {
  return (
    <HelpBoxComponentStyle>
      <Box className="question-container">?</Box>
      <Box className="help-content-container">
        <Typography
          className="content-typo"
          sx={{ fontSize: "1rem", fontWeight: 500 }}
        >
          Need help?
        </Typography>
        <Typography
          className="content-typo"
          sx={{ fontSize: "0.75rem", fontWeight: 400, marginTop: "0.3rem" }}
        >
          Our support team is at your
        </Typography>
        <Typography
          className="content-typo"
          sx={{ fontSize: "0.75rem", fontWeight: 400 }}
        >
          disposal
        </Typography>

        <Box className="help-button-container"> Get help </Box>
      </Box>
    </HelpBoxComponentStyle>
  );
};
