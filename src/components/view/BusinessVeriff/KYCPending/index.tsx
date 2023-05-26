import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { KYCPendingViewStyleProps } from './index.style';
import { NoteComponent, BackwardButtonComponent } from 'components/common';
import { PATH } from 'consts';
import { PendingKYC } from 'assets/icons';

type KYCPendingViewProps = BoxProps & {};

export const KYCPendingView: React.FC<KYCPendingViewProps> = (props) => {
  return <KYCPendingViewStyleProps>
    <BackwardButtonComponent to={PATH.LANDING} />
    <Box sx={{ height: '2rem' }}></Box>
    <NoteComponent
      className="note-container"
      iconElement={<img className="icon-container" src={PendingKYC} />}
      title="Your KYC is in still in Pending"
    />
  </KYCPendingViewStyleProps>
}