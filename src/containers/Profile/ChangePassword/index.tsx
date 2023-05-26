import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ProfileViews } from 'components';
import { AppActions, AppDispatch } from 'new_redux/store';
import { useTimedNotification } from 'hooks';
import { NOTIFICATION_TYPE } from 'consts';

export const ChangePasswordContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const {
    isShowing: isShowNotification,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  const [notificationType, setNotificationType] = useState<string>(NOTIFICATION_TYPE.SUCCESS);
  const [notificationContent, setNotificationContent] = useState<string>("");

  const handleUpdatePassword = (formValues: any) => {
    dispatch(AppActions.user.changePasswordRequest({
      change: {
        oldPassword: formValues.oldPassword,
        newPassword: formValues.newPassword
      },
      next: (content: string) => {
        setNotificationType(NOTIFICATION_TYPE.SUCCESS);
        setNotificationContent(content);
        notificationShow();
      },
      errorAction: (content: string) => {
        setNotificationType(NOTIFICATION_TYPE.FAILURE);
        setNotificationContent(content);
        notificationShow();
      }
    }))
  };

  return (
    <ProfileViews.ChangePasswordView
      notificationType={notificationType}
      isShowNotification={isShowNotification}
      notificationClose={notificationClose}
      notificationContent={notificationContent}
      updatePassword={handleUpdatePassword}
    />
  );
};
