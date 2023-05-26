import React, { useMemo } from 'react';
import { Box, BoxProps } from '@mui/material';
import { Link } from 'react-router-dom';
import { KYBDocumentComponentStyle } from './index.style';
import { DocumentSvg, UnverifiedAlertSvg, VerifiedAlertSvg, PendingAlertSvg } from '../../../assets/icons';
import { UserKYCStatus } from '../../../types';

type KYBDocumentComponentProps = BoxProps & {
  status: string;
  documentUrl: string;
};

export const KYBDocumentComponent: React.FC<KYBDocumentComponentProps> = (props) => {
  const { status, documentUrl } = props;

  const filename = useMemo(() => {
    if (documentUrl) {
      const split = documentUrl.split('/');
      return split[split.length - 1].replace('+', ' ');
    }
    return 0;
  }, [documentUrl]);

  return <KYBDocumentComponentStyle>
    <Box className="profile-container">
      <Box className='profile-box'>
        <Box className='avatar'>
          <img src={DocumentSvg} />
        </Box>
        <Box className='name margin-left-16px'>
          {filename}
        </Box>
      </Box>
      <Box className='action-box'>
        <Box
          className={`
              status margin-left-16px ${status === 'Approved'
              ? 'color-green10'
              : status === 'Rejected'
                ? 'color-yellow'
                : 'color-purple10'
            }
          `}
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          <img
            src={`
              ${status === 'Approved'
                ? VerifiedAlertSvg
                : status === 'Rejected'
                  ? UnverifiedAlertSvg
                  : PendingAlertSvg
              }
            `}
          />
          {
            status === 'Approved'
              ? 'Verified'
              : status === 'Rejected'
                ? 'Unverified'
                : 'Pending review'
          }
        </Box>
      </Box>
    </Box>
  </KYBDocumentComponentStyle >
};