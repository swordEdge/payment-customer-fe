import * as PATH from './path';

import { IServiceCategory } from 'models';

export const ServiceCategories: IServiceCategory[] = [
  {
    src: '/asset/Service/MySubscription.png',
    name: 'My Subscription',
    color: 'purple-card',
    path: `${PATH.SERVICES_INDEX}/${PATH.SERVICES_SUBSCRIPTION}`,
  },
  {
    src: '/asset/Service/MyBeneficiary.png',
    name: 'My Beneficiary',
    color: 'accentBlue-card',
    path: `${PATH.SERVICES_INDEX}/${PATH.SERVICES_BENEFICIARY}`,
  },
  {
    src: '/asset/Service/Referrals.png',
    name: 'Referrals',
    color: 'blue-card',
    // path: `${PATH.SERVICES_INDEX}/${PATH.SERVICES_REFERRALS}`,
    path: `${''}`,
  },
  {
    src: '/asset/Service/DirectDebits.png',
    name: 'Direct Debits',
    color: 'green-card',
    // path: `${PATH.SERVICES_INDEX}/${PATH.SERVICES_DEBITS}`,
    path: `${''}`,
  },
  {
    src: '/asset/Service/StandingOrders.png',
    name: 'Standing Orders',
    color: 'logoYellow-card',
    // path: `${PATH.SERVICES_INDEX}/${PATH.SERVICES_ORDERS}`,
    path: `${''}`,
  },
];
