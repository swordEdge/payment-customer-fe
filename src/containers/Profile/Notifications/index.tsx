import React, { useMemo } from 'react';
import { ProfileViews } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { AppActions, AppDispatch, RootState } from 'new_redux/store';

export const NotificationsContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const notificationSetting = useMemo(() => {
    if (user?.notificationSetting !== undefined) {
      return user.notificationSetting.toString().split('').reduce((acc: number[], curr) => {
        return [...acc, parseInt(curr)];
      }, []);
    }
    return [];
  }, [user]);

  const onChangeNotificationHandler = (setting: number[]) => {
    const newSetting = {
      isEmail: setting[0] === 1,
      isPhone: setting[1] === 1,
      isPushNotification: setting[2] === 1
    };
    dispatch(AppActions.user.updateNotificationSettingRequest({ notificationSetting: newSetting }));
  }

  return <ProfileViews.NotificationsView
    notificationSetting={notificationSetting}
    changeNotificationSetting={onChangeNotificationHandler}
  />;
};
