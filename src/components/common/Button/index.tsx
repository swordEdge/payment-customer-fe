import React from "react";

import { ButtonComponentStyle } from "./index.style";

type ButtonComponentProps = {
  label: string;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({ label }) => {
  return <ButtonComponentStyle>{label}</ButtonComponentStyle>;
};
