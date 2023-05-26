import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { BusinessProfileComponentStyle } from './index.style';
import { ProfileAvatarSvg, UnverifiedAlertSvg, VerifiedAlertSvg, PendingAlertSvg, RemoveSvg, EditSvg } from 'assets/icons';
import { UserKYCStatus } from 'types';

type BusinessProfileComponentProps = BoxProps & {
  userId: number;
  name: string;
  status: number;
  editAction: (id: number) => void;
  deleteAction: (id: number) => void;
};

export const BusinessProfileComponent: React.FC<BusinessProfileComponentProps> = (props) => {
  const { userId, name, status, editAction, deleteAction, ...rest } = props;

  return <BusinessProfileComponentStyle className={rest.className}>
    <Box className="profile-container">
      <Box className='profile-box'>
        <Box className='avatar'>
          <img src={ProfileAvatarSvg} />
        </Box>
        <Box className='name margin-left-16px'>
          {name}
        </Box>
        <Box
          className={`
              status margin-left-16px ${status === UserKYCStatus.APPROVED
              ? 'color-green10'
              : status === UserKYCStatus.REJECTED
                ? 'color-yellow'
                : 'color-purple10'
            }
          `}>
          <img
            src={`
              ${status === UserKYCStatus.APPROVED
                ? VerifiedAlertSvg
                : status === UserKYCStatus.REJECTED
                  ? UnverifiedAlertSvg
                  : PendingAlertSvg
              }
            `}
          />
          {
            status === UserKYCStatus.APPROVED
              ? 'Verified'
              : status === UserKYCStatus.REJECTED
                ? 'Unverified'
                : 'Pending review'
          }
        </Box>
      </Box>
      <Box className='action-box'>
        <Box className='action'> <img src={EditSvg} /> </Box>
        <Box className='action margin-left-8px'> <img src={RemoveSvg} onClick={() => { deleteAction(userId) }} /> </Box>
      </Box>
    </Box>
  </BusinessProfileComponentStyle >
};