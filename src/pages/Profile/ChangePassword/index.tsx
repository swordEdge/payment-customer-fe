import React from 'react';
import { withProfileLayout } from 'components';
import { ProfileContainers } from 'containers';

export const ChangePasswordPage = withProfileLayout(() => {
  return <ProfileContainers.ChangePasswordContainer />;
});