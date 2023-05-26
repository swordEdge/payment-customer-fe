import React from 'react';
import { withProfileLayout } from 'components';
import { ProfileContainers } from 'containers';

export const BusinessProfilePage = withProfileLayout(() => {
  return <ProfileContainers.BusinessProfileContainer />;
});