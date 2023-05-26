import React from "react";

import { OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { SearchComponentStyle } from "./index.style";

export const SearchComponent: React.FC = () => {
  return (
    <SearchComponentStyle>
      <OutlinedInput
        className="search-container"
        type="text"
        autoComplete="off"
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <IconButton aria-label="toggle password visibility" edge="start">
              <SearchOutlinedIcon className="search-icon" />
            </IconButton>
          </InputAdornment>
        }
      />
    </SearchComponentStyle>
  );
};
