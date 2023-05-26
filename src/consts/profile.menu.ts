import {
  ChangePasswordSvg,
  LanguageSvg,
  MyMessageSvg,
  NotificationSvg,
  PersonalInfoSvg,
  TwoFactorSvg,
} from 'assets/icons';

import { PATH } from 'consts';

export const PROFILE_MENU = [
  {
    avatar: PersonalInfoSvg,
    title: 'Personal Info',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_INFO,
  },
  {
    avatar: ChangePasswordSvg,
    title: 'Change Password',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_CHANGE_PASSWORD,
  },
  {
    avatar: TwoFactorSvg,
    title: 'Two Factor',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_TWO_FACTOR,
  },
  {
    avatar: NotificationSvg,
    title: 'Notifications',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_NOTIFICATIONS,
  },
  {
    avatar: LanguageSvg,
    title: 'Language',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_LANGUAGE,
  },
  {
    avatar: MyMessageSvg,
    title: 'My Messages',
    path: PATH.PROFILE_INDEX + '/' + PATH.PROFILE_MESSAGES,
  },
];
