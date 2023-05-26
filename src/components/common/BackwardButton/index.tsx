import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { BackwardButtonComponentStyle } from './index.style';

type BackwardButtonComponentProps = {
  title?: string;
  to: string;
};

export const BackwardButtonComponent: React.FC<BackwardButtonComponentProps> = ({
  title,
  to
}) => {
  return (
    <BackwardButtonComponentStyle>
      <Link to={to} className="back-button-container">
        <ArrowBackIosNewIcon className='back-icon' />
        <span> {title || "Back"} </span>
      </Link>
    </BackwardButtonComponentStyle>
  );
};
