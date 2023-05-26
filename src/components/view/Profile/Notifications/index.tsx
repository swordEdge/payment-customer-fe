import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { Box, FormControlLabel, FormGroup } from '@mui/material';
import { NotificationsViewStyle } from './index.style';
import { NewButtonComponent, MobileHeaderComponent } from 'components/common';
import { PATH } from 'consts';

type NotificationsViewProps = {
  notificationSetting: number[];
  changeNotificationSetting: (setting: number[]) => void;
};

export const NotificationsView: React.FC<NotificationsViewProps> = (props) => {
  const navigate = useNavigate();
  const { notificationSetting, changeNotificationSetting } = props;

  const [setting, setSetting] = useState<number[]>(notificationSetting);

  const onChangeSetting = (index: number) => {
    let newSetting = setting;
    newSetting[index] = newSetting[index] === 1 ? 0 : 1;
    setSetting(prev => ({ ...newSetting }));
  }

  const onSubmitHandler = () => {
    changeNotificationSetting(setting);
  }

  useEffect(() => {
    setSetting(notificationSetting);
  }, [notificationSetting])

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  return (
    <NotificationsViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Notification Setting'
          backPath={PATH.PROFILE_INDEX + '/' + PATH.PROFILE_OVERVIEW}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <NewButtonComponent
              className='button-item mobile-header-button'
              type="submit"
              onClick={() => onSubmitHandler()}
            >
              Update
            </NewButtonComponent>
          }
        />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>

      <FormGroup className="form-container">
        <Box className='header'>Notification Settings</Box>
        <Box className='content'>
          <FormControlLabel
            className='flex'
            control={<Checkbox
              className={`${setting[0] === 1 ? 'checked' : 'unchecked'}`}
              checked={setting[0] === 1}
              onClick={() => onChangeSetting(0)}
            />}
            label='Email'
          />
          <FormControlLabel
            className='flex margin-top-32'
            control={<Checkbox
              className={`${setting[1] === 1 ? 'checked' : 'unchecked'}`}
              checked={setting[1] === 1}
              onClick={() => onChangeSetting(1)}
            />}
            label='SMS'
          />
          <FormControlLabel
            className='flex margin-top-32'
            control={<Checkbox
              className={`${setting[2] === 1 ? 'checked' : 'unchecked'}`}
              checked={setting[2] === 1}
              onClick={() => onChangeSetting(2)}
            />}
            label='Push Notification'
          />
        </Box>

        <div className='margin-top-32 button-container'>
          <NewButtonComponent className='button-item' disabled={true}>
            Cancel
          </NewButtonComponent>
          <NewButtonComponent
            type="submit"
            className='button-item'
            // disabled={convertToString([...notificationSetting]) === convertToString([...setting])}
            onClick={onSubmitHandler}
          >
            Update
          </NewButtonComponent>
        </div>
      </FormGroup>
    </NotificationsViewStyle>
  );
};
