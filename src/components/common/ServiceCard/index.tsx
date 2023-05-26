import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import { ServiceCardComponentStyle } from "./index.style";

type ServiceCardComponentProps = {
  src: string;
  name: string;
  color: string;
  path: string;
};

export const ServiceCardComponent: React.FC<ServiceCardComponentProps> = ({
  src,
  name,
  color,
  path,
}) => {
  return (
    <ServiceCardComponentStyle className={color}>
      <Link className="link" to={path}>
        <img className="image-container" src={src} alt="" />
        <Box className="card-name-container"> {name} </Box>
      </Link>
    </ServiceCardComponentStyle>
  );
};
