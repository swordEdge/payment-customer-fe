import FR_FLAG from '../assets/countries/fr.svg';
import GB_FLAG from '../assets/countries/gb.svg';
import IE_FLAG from '../assets/countries/ie.svg';
import NZ_FLAG from '../assets/countries/nz.svg';
import * as PATH from './path';

import { Country, IProfileMenuItem, ISidebarMenuItem } from 'models';

export const DesktopSidebarMainMenu: ISidebarMenuItem[] = [
  {
    label: 'Accounts',
    activatedIconUrl: '/asset/Navbar/account_active.svg',
    deactivatedIconUrl: '/asset/Navbar/account_inactive.svg',
    to: PATH.ACCOUNTS,
    activatedPath: PATH.ACCOUNTS,
  },
  {
    label: 'Cards',
    activatedIconUrl: '/asset/Navbar/cart_active.svg',
    deactivatedIconUrl: '/asset/Navbar/cart_inactive.svg',
    to: PATH.CARDS_INDEX,
    activatedPath: PATH.CARDS_INDEX,
  },
  {
    label: 'Transfer',
    activatedIconUrl: '/asset/Navbar/transfer_active.svg',
    deactivatedIconUrl: '/asset/Navbar/transfer_inactive.svg',
    to: PATH.TRANSFER_INDEX,
    activatedPath: PATH.TRANSFER_INDEX,
  },
  {
    label: 'Profile',
    activatedIconUrl: '/asset/Navbar/profile_active.svg',
    deactivatedIconUrl: '/asset/Navbar/profile_inactive.svg',
    to: PATH.PROFILE_INDEX,
    activatedPath: PATH.PROFILE_INDEX,
  },
  {
    label: 'Services',
    activatedIconUrl: '/asset/Navbar/service_active.svg',
    deactivatedIconUrl: '/asset/Navbar/service_inactive.svg',
    to: PATH.SERVICES_INDEX,
    activatedPath: PATH.SERVICES_INDEX,
  },
];

export const DesktopSidebarExtraMenu: ISidebarMenuItem[] = [
  {
    label: 'Log out',
    activatedIconUrl: '/asset/Navbar/logout_active.svg',
    deactivatedIconUrl: '/asset/Navbar/logout_inactive.svg',
    to: PATH.LOGIN_ALL,
    activatedPath: '',
  },
];

export const MobileSidebarMainMenu: ISidebarMenuItem[] = [
  {
    label: 'Accounts',
    activatedIconUrl: '/asset/Navbar/account_active.svg',
    deactivatedIconUrl: '/asset/Navbar/account_mobile.svg',
    to: PATH.ACCOUNTS,
    activatedPath: PATH.ACCOUNTS,
  },
  {
    label: 'Cards',
    activatedIconUrl: '/asset/Navbar/cart_active.svg',
    deactivatedIconUrl: '/asset/Navbar/cart_mobile.svg',
    to: PATH.CARDS_INDEX,
    activatedPath: PATH.CARDS_INDEX,
  },
  {
    label: 'Transfer',
    activatedIconUrl: '/asset/Navbar/transfer_active.svg',
    deactivatedIconUrl: '/asset/Navbar/transfer_mobile.svg',
    to: PATH.TRANSFER_INDEX,
    activatedPath: PATH.TRANSFER_INDEX,
  },
  {
    label: 'Profile',
    activatedIconUrl: '/asset/Navbar/profile_active.svg',
    deactivatedIconUrl: '/asset/Navbar/profile_mobile.svg',
    to: PATH.PROFILE_INDEX,
    activatedPath: PATH.PROFILE_INDEX,
  },
  {
    label: 'Services',
    activatedIconUrl: '/asset/Navbar/service_active.svg',
    deactivatedIconUrl: '/asset/Navbar/service_mobile.svg',
    to: PATH.SERVICES_INDEX,
    activatedPath: PATH.SERVICES_INDEX,
  },
];

export const DesktopProfileMenu: IProfileMenuItem[] = [
  {
    label: 'Business Profile',
    to: `${PATH.PROFILE_INDEX}/${PATH.BUSINESS_PROFILE}`,
    activatedPath: PATH.BUSINESS_PROFILE,
  },
  {
    label: 'Personal Info',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_INFO}`,
    activatedPath: PATH.PROFILE_INFO,
  },
  {
    label: 'Change Password',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_CHANGE_PASSWORD}`,
    activatedPath: PATH.PROFILE_CHANGE_PASSWORD,
  },
  {
    label: 'Two Factor',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_TWO_FACTOR}`,
    activatedPath: PATH.PROFILE_TWO_FACTOR,
  },
  {
    label: 'Notifications',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_NOTIFICATIONS}`,
    activatedPath: PATH.PROFILE_NOTIFICATIONS,
  },
  {
    label: 'Language',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_LANGUAGE}`,
    activatedPath: PATH.PROFILE_LANGUAGE,
  },
  {
    label: 'My Messages',
    to: `${PATH.PROFILE_INDEX}/${PATH.PROFILE_MESSAGES}`,
    activatedPath: PATH.PROFILE_MESSAGES,
  },
];

export const CountryList: Country[] = [
  {
    name: 'GB',
    digitCode: '+44',
    flag: GB_FLAG,
  },
  {
    name: 'IE',
    digitCode: '+353',
    flag: IE_FLAG,
  },
  {
    name: 'FR',
    digitCode: '+33',
    flag: FR_FLAG,
  },
  {
    name: 'NZ',
    digitCode: '+64',
    flag: NZ_FLAG,
  },
];
