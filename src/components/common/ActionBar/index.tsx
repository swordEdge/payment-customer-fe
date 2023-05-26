import React, { useState } from 'react';

import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box } from '@mui/material';

import { ToggleComponent } from '../Toggle';
import { ActionBarStyle } from './index.style';

import { PATH } from 'consts';

import { IToggleButton } from 'models';

const buttons: IToggleButton[] = [
  {
    title: 'Personal Info',
    path: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_INFO}`,
  },
  {
    title: 'Change Password',
    path: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_CHANGE_PASSWORD}`,
  },
  {
    title: 'Two Factor',
    path: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_TWO_FACTOR}`,
  },
  {
    title: 'My Messages',
    path: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_MESSAGES}`,
  },
];

type ActionBarComponentProps = {
  current: number;
  isEdit: boolean;
};

export const ActionBarComponent: React.FC<ActionBarComponentProps> = ({
  current,
  isEdit,
}) => {
  const [currentButtons, setCurrentButtons] = useState<number>(current);

  return (
    <ActionBarStyle>
      <Box className='toggle-container'>
        <ToggleComponent
          buttons={buttons}
          width='9.5rem'
          setCurrentButtons={setCurrentButtons}
          currentButtons={currentButtons}
        />
      </Box>

      {isEdit && (
        <Box className='edit-button-container'>
          <SaveAsIcon />
          Edit
        </Box>
      )}
    </ActionBarStyle>
  );
};

export default ActionBarComponent;
