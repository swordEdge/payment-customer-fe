import React, { useState } from "react";
import {
  FormControl,
  OutlinedInput,
  InputBaseProps,
  FormLabel,
  Typography
} from "@mui/material";
import { InputComponentStyle } from "./index.style";
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

type InputComponentProps = InputBaseProps & {
  label?: string;
  register?: UseFormRegister<any>;
  options?: RegisterOptions;
};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { label, name: fieldName, register, options, ...rest } = props;

  return (
    <InputComponentStyle>
      <FormControl fullWidth>
        {label && (
          <FormLabel className="label-container">
            {rest.required && "*"}{" "}
            <Typography className="label-show"> {label} </Typography>
          </FormLabel>
        )}

        <OutlinedInput
          {...rest}
          className="saas-input-container"
          name={fieldName}
          {...(register && register(fieldName!, options))}
        />
      </FormControl>
    </InputComponentStyle>
  );
};
