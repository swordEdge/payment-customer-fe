import React from "react";

import { Box } from "@mui/material";

import { VerifyModelViewStyle } from "./index.style";

type VerifyModelViewProps = {
  onCancel: () => void;
  onConfirm: () => void;
};

export const VerifyModelView: React.FC<VerifyModelViewProps> = ({
  onCancel,
  onConfirm,
}) => {
  const onCancelClick = () => {
    onCancel();
  };

  const onConfirmClick = () => {
    onConfirm();
  };
  return (
    <VerifyModelViewStyle>
      <Box className="verify-model-container">
        <Box className="verify-model-cancel-button" onClick={onCancelClick}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.778174 16.3343C0.485282 16.0414 0.485281 15.5666 0.778174 15.2737L15.2739 0.777978C15.5668 0.485085 16.0416 0.485085 16.3345 0.777978C16.6274 1.07087 16.6274 1.54575 16.3345 1.83864L1.83884 16.3343C1.54594 16.6272 1.07107 16.6272 0.778174 16.3343Z"
              fill="#AAABAB"
            />
            <path
              d="M0.778174 0.777978C1.07107 0.485085 1.54594 0.485085 1.83883 0.777978L16.3345 15.2737C16.6274 15.5666 16.6274 16.0414 16.3345 16.3343C16.0416 16.6272 15.5668 16.6272 15.2739 16.3343L0.778175 1.83864C0.485282 1.54575 0.485282 1.07087 0.778174 0.777978Z"
              fill="#AAABAB"
            />
          </svg>
        </Box>
        <Box className="verify-model-header">
          <Box>The Pin for this card is </Box>
          <Box className="verify-model-header-content"> 0249</Box>
        </Box>
      </Box>
    </VerifyModelViewStyle>
  );
};
