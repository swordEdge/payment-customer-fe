import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Checkbox, FormControlLabel } from '@mui/material';

import { CheckBoxStyle } from './index.style';

type Props = {
  label: string;
};

export const CheckBoxComponent: React.FC<Props> = ({ label }) => {
  return (
    <CheckBoxStyle>
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckCircleOutlineIcon className='unchecked' />}
            checkedIcon={<CheckCircleIcon />}
          />
        }
        label={label}
      />
    </CheckBoxStyle>
  );
};
