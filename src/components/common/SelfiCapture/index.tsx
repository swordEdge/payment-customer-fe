import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import { WebCamComponent } from '../WebCam';
import { SelfiCaptureComponentStyle } from './index.style';

import { PATH } from 'consts';

import { RootState } from 'redux/store';

const cameraPng = (
  <svg
    width='78'
    height='78'
    viewBox='0 0 78 78'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <circle cx='39' cy='39' r='39' fill='#FF576A' />
    <g clipPath='url(#clip0_2330_41690)'>
      <path
        d='M33.75 21.25H44.25L47.75 24.75H54.75C55.2141 24.75 55.6592 24.9344 55.9874 25.2626C56.3156 25.5908 56.5 26.0359 56.5 26.5V51C56.5 51.4641 56.3156 51.9093 55.9874 52.2374C55.6592 52.5656 55.2141 52.75 54.75 52.75H23.25C22.7859 52.75 22.3408 52.5656 22.0126 52.2374C21.6844 51.9093 21.5 51.4641 21.5 51V26.5C21.5 26.0359 21.6844 25.5908 22.0126 25.2626C22.3408 24.9344 22.7859 24.75 23.25 24.75H30.25L33.75 21.25ZM39 49.25C41.7848 49.25 44.4555 48.1438 46.4246 46.1746C48.3938 44.2055 49.5 41.5348 49.5 38.75C49.5 35.9652 48.3938 33.2945 46.4246 31.3254C44.4555 29.3562 41.7848 28.25 39 28.25C36.2152 28.25 33.5445 29.3562 31.5754 31.3254C29.6062 33.2945 28.5 35.9652 28.5 38.75C28.5 41.5348 29.6062 44.2055 31.5754 46.1746C33.5445 48.1438 36.2152 49.25 39 49.25ZM39 45.75C37.1435 45.75 35.363 45.0125 34.0503 43.6997C32.7375 42.387 32 40.6065 32 38.75C32 36.8935 32.7375 35.113 34.0503 33.8003C35.363 32.4875 37.1435 31.75 39 31.75C40.8565 31.75 42.637 32.4875 43.9497 33.8003C45.2625 35.113 46 36.8935 46 38.75C46 40.6065 45.2625 42.387 43.9497 43.6997C42.637 45.0125 40.8565 45.75 39 45.75Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_2330_41690'>
        <rect
          width='42'
          height='42'
          fill='white'
          transform='translate(18 16)'
        />
      </clipPath>
    </defs>
  </svg>
);

export const SelfiCaptureComponent: React.FC = () => {
  const navigate = useNavigate();

  const { verificationId } = useSelector((state: RootState) => state.user);

  const [isCapture, setIsCapture] = useState<boolean>(false);
  const [captureImg, setCaptureImg] = useState<string>('');

  useEffect(() => {
    if (!verificationId) {
      navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION);
    }
  }, [verificationId]);

  const selfiCapture = async () => {
    if (!isCapture) {
      setIsCapture(true);
    } else {
      const result = await fetch(
        `${process.env.REACT_APP_VERIFF_SERVER_API}/api/veriff/selfi`,
        {
          method: 'POST',
          body: JSON.stringify({
            data: captureImg,
            verificationId,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (!result.ok) {
        setCaptureImg('');
        setIsCapture(false);
      } else {
        navigate(PATH.VERIFF_INDEX + '/' + PATH.VERIFF_SESSION);
      }
    }
  };
  return (
    <SelfiCaptureComponentStyle>
      <Box className='selfi-image-container'>
        <WebCamComponent
          isCapture={isCapture}
          captureImg={captureImg}
          setCaptureImg={setCaptureImg}
        />
      </Box>
      <Box className='selfi-main-container'>
        <Box className='selfi-capture-button-container' onClick={selfiCapture}>
          {cameraPng}
        </Box>
        <Typography>
          <b>REQUIRES BETTER LIGHTING</b>
        </Typography>
        <Typography sx={{ fontSize: '14px' }}>
          Make sure you are visable in the photo
        </Typography>
      </Box>
    </SelfiCaptureComponentStyle>
  );
};
