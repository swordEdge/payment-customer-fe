import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { MESSAGES, createVeriffFrame } from '@veriff/incontext-sdk';
// @ts-ignore
import { Veriff } from '@veriff/js-sdk';
import { SessionViewStyle } from './index.style';
import { IUser } from 'new_models';
import { UserKYCStatus } from 'types';
import { PATH } from 'consts';
import { BackwardButtonComponent } from 'components/common'
import { ListCheck } from 'assets/icons';
import { PlatformContext } from 'contexts';

type SessionViewProps = {
  user?: IUser;
  finishKYC: (uuid: string) => void;
};

export const SessionView: React.FC<SessionViewProps> = ({
  user,
  finishKYC
}) => {
  const navigate = useNavigate();
  const { getKYCVeriffUuidFromSession } = useContext(PlatformContext);

  const veriff = Veriff({
    host: process.env.REACT_APP_VERIFF_API_URL,
    apiKey: process.env.REACT_APP_VERIFF_API_PUBLIC_KEY,
    parentId: 'veriff-container',
    locale: {
      verifyButtonOnly: true
    },
    onSession: (err: any, response: any) => {
      createVeriffFrame({
        url: response.verification.url,
        onEvent: (msg: string) => {
          switch (msg) {
            case MESSAGES.FINISHED:
              // window.location.replace('/login');
              finishKYC(getKYCVeriffUuidFromSession());
              break;
          }
        },
      });
    },
  });

  useEffect(() => {
    if (user && user.kycStatus !== undefined && user.kycStatus !== UserKYCStatus.NOT_TAKEN) {
      navigate(PATH.ACCOUNTS);
      return;
    }

    if (!getKYCVeriffUuidFromSession()) {
      navigate(PATH.LANDING);
      return;
    }

    veriff.setParams({
      person: {
        givenName: ' ',
        lastName: ' ',
      },
      vendorData: `${getKYCVeriffUuidFromSession()}`,
    });

    veriff.mount({
      submitBtnText: 'Get verified',
      loadingText: 'Please wait...',
    });
  }, [veriff, user, getKYCVeriffUuidFromSession]);

  return (
    <SessionViewStyle>
      <BackwardButtonComponent to={PATH.LANDING} />
      <Box sx={{ height: '2rem' }}></Box>

      <Typography className='action-title'> Verify Your Identity </Typography>
      <Box className='notice-container'>
        <Typography className='notice-title'>
          Payment System would like to confirm your identity
        </Typography>
      </Box>

      <Box sx={{ height: '2rem' }}></Box>
      <Typography className='action-title' sx={{ fontSize: '1.1rem !important' }}> BEFORE YOU START, PLEASE: </Typography>
      <ul className='ul-list'>
        <li className="li" style={{ listStyleImage: `url(${ListCheck})` }}> Have to hand a valid Government issued is identity document. </li>
        <li className="li" style={{ listStyleImage: `url(${ListCheck})` }}> Make sure you are in a well-lit room.  </li>
        <li className="li" style={{ listStyleImage: `url(${ListCheck})` }}> Be prepared to take a selfie and photos of your ID. </li>
      </ul>

      <Box sx={{ height: '1rem' }}></Box>

      <Box className='notice-container'>
        <Typography className='notice-title' sx={{ lineHeight: '1.5rem !important' }}>
          Providing feedback is voluntary, to help improve Veriff's services. We will use automation to conduct your identity verification. Read more about personal data processing in Veriff's Privacy Policy.
        </Typography>
      </Box>

      <Box sx={{ height: '3rem' }}></Box>
      <Box
        className="veriff-button"
        id='veriff-container'
      >

        <Box> Get Started </Box>
      </Box>
    </SessionViewStyle>
  );
};
