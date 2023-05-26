import React from 'react';

import { withProfileLayout } from 'components';

import { ProfileContainers } from 'containers';

export const PersonalInfoPage = withProfileLayout(() => {
  return <ProfileContainers.PersonalInfoContainer />;
});
