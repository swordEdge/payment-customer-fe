import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileViews } from 'components';
import { AppActions, AppDispatch, RootState } from 'new_redux/store';
import { IAddress } from 'new_models';
import { useTimedNotification } from 'hooks';
import { NOTIFICATION_TYPE } from 'consts';

export const PersonalInfoContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { user, userProfile } = useSelector((state: RootState) => state.user);
  const [notificationContent, setNotificationContent] = useState<string>("");
  const [notificationType, setNotificationType] = useState<string>(NOTIFICATION_TYPE.SUCCESS);

  const {
    isShowing: isShowNotification,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  const updateAddress = (formValues: IAddress) => {
    dispatch(AppActions.user.updateAddressRequest({
      address: formValues,
      next: (content: string) => {
        setNotificationContent(content);
        setNotificationType(NOTIFICATION_TYPE.SUCCESS);
        notificationShow();
      },
      errorAction: (content: string) => {
        setNotificationContent(content);
        setNotificationType(NOTIFICATION_TYPE.FAILURE);
        notificationShow();
      }
    }));
  };

  useEffect(() => {
    if (user) {
      dispatch(AppActions.user.getUserProfileRequest({}));
      dispatch(AppActions.user.getAddressRequest({}));
    }
  }, [dispatch]);

  return (
    <ProfileViews.PersonalInfoView
      userProfile={userProfile}
      updateAddress={updateAddress}
      isShowNotification={isShowNotification}
      notificationContent={notificationContent}
      notificationType={notificationType}
      notificationClose={notificationClose}
    />
  );
};
