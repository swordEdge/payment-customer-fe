import React, { useCallback, useEffect, useRef } from 'react';
import Webcam from 'react-webcam';

import { WebCamComponentStyle } from './index.style';

type WebCamComponentProps = {
  isCapture: boolean;
  captureImg: string;
  setCaptureImg: Function;
};

const videoConstraints = {
  width: 640,
  height: 360,
  facingMode: 'user',
};

export const WebCamComponent: React.FC<WebCamComponentProps> = ({
  isCapture,
  setCaptureImg,
  captureImg,
}) => {
  const webCamRef = useRef<Webcam>(null);

  const capture = useCallback(() => {
    const imageSrc = webCamRef?.current?.getScreenshot({
      width: 480,
      height: 270,
    });
    if (imageSrc) {
      setCaptureImg(imageSrc.toString());
    }
  }, [webCamRef, setCaptureImg]);

  useEffect(() => {
    capture();
  }, [capture, isCapture]);

  return (
    <WebCamComponentStyle>
      {!captureImg ? (
        <Webcam
          ref={webCamRef}
          className='webcam-frame'
          screenshotFormat='image/jpeg'
          videoConstraints={videoConstraints}
        />
      ) : (
        <img className='webcam-frame' src={captureImg} alt='screenshot' />
      )}
    </WebCamComponentStyle>
  );
};
