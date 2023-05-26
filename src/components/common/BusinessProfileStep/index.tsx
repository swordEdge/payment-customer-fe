import React from 'react';
import { BoxProps } from '@mui/material';
import { NewButtonComponent } from 'components';
import { BusinessProfileStepComponentStyle } from './index.style';
import { BusinessProfileSteps } from 'consts';

type BusinessProfileStepComponentProps = BoxProps & {
  currentStep: number;
  setStep: (step: number) => void;
};

export const BusinessProfileStepComponent: React.FC<BusinessProfileStepComponentProps> = (props) => {
  const { currentStep, setStep } = props;

  return <BusinessProfileStepComponentStyle>
    {
      BusinessProfileSteps.map((step, index) => (
        <NewButtonComponent
          className={`button margin-right-8px ${currentStep === index ? 'activated' : ''}`}
          onClick={() => setStep(index)}
        >
          {step}
        </NewButtonComponent>
      ))
    }
  </BusinessProfileStepComponentStyle>
};