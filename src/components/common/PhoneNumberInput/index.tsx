import React from 'react';

import { NewInputComponent } from '../NewInput';
import { PhoneNumberInputStyle } from './index.style';

type PhoneNumberInputComponentProps = {
  code: string;
  number: string;
};

export const PhoneNumberInputComponent: React.FC<
  PhoneNumberInputComponentProps
> = ({ code, number }) => {
  return (
    <PhoneNumberInputStyle>
      <div className='country-code-container'>
        <NewInputComponent label='Country Code' value={code} border={true} />
      </div>
      <div className='phone-number-container'>
        <NewInputComponent label='Phone Number' value={number} border={true} />
      </div>
    </PhoneNumberInputStyle>
  );
};
