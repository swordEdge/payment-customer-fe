import React from 'react';

import { withLogoLayout } from 'components';

import { LandingContainers } from 'containers';

export const LandingPage = withLogoLayout(() => {
  return <LandingContainers.LandingContainer />;
});
