import React from "react";
import { LoadingComponentStyle } from "./index.style";

export const LoadingComponent: React.FC = () => {
  return (
    <LoadingComponentStyle>
      <div className="loading-spinner"></div>
    </LoadingComponentStyle>
  );
};
