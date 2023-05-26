import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { KYCRejectViewStyle } from './index.style';
import { NoteComponent, BackwardButtonComponent } from 'components/common';
import { PATH } from 'consts';
import { PendingKYC } from 'assets/icons';

type KYCRejectViewProps = BoxProps & {};

export const KYCRejectView: React.FC<KYCRejectViewProps> = (props) => {
  return <KYCRejectViewStyle>
    <BackwardButtonComponent to={PATH.LANDING} />
    <Box sx={{ height: '2rem' }}></Box>
    <NoteComponent
      className="note-container"
      iconElement={<img className="icon-container" src={PendingKYC} />}
      title="Your KYC has been Rejected"
    />
  </KYCRejectViewStyle>
}