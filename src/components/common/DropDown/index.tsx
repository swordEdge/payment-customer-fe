import React from "react";
import Dropdown from "react-dropdown";
import { FormControl, FormLabel, Typography } from "@mui/material";
import "react-dropdown/style.css";

import { DropDownComponentStyle } from "./index.style";

type DropDownComponentProps = {
  disabled?: boolean;
  required: boolean;
  label: string;
  values: string[];
  onChangeValue?: Function;
  value?: string;
};

export const DropDownComponent: React.FC<DropDownComponentProps> = ({
  disabled,
  required,
  label,
  values,
  onChangeValue,
  value,
}) => {
  const changeValue = (e: any) => {
    onChangeValue && onChangeValue(e.value);
  };
  return (
    <DropDownComponentStyle>
      <FormControl fullWidth>
        {label && (
          <FormLabel className="label-container">
            {required && "*"}{" "}
            <Typography className="label-show"> {label} </Typography>
          </FormLabel>
        )}
        <Dropdown
          disabled={disabled}
          className="dropdown-main"
          options={values}
          value={value ? value : ""}
          placeholder=""
          onChange={(e) => onChangeValue && changeValue(e)}
        />
      </FormControl>
    </DropDownComponentStyle>
  );
};
