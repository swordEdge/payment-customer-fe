import React, { useEffect, useState } from 'react';
import 'react-phone-input-2/lib/bootstrap.css';

import { FormControl, TextField } from '@mui/material';
import cls from 'classnames';

import { NewInputComponent } from '../NewInput';
import { PhoneInputStyle } from './index.style';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';

import { CountryList } from 'consts';

type PhoneInputComponentProps = {
  digitCode: string;
  phoneNumber: string;
  onChangeDigit: (digitCode: string) => void;
  onChangePhoneNumber: (phoneNumber: string) => void;
  // register?: UseFormRegister<any>;
};

export const PhoneInputComponent: React.FC<PhoneInputComponentProps> = (props) => {
  const { digitCode, phoneNumber, onChangeDigit, onChangePhoneNumber } = props;
  const [isOpened, setOpened] = useState(false);
  const [selectedItem, setSelectedItem] = useState(CountryList[0]);

  const handleChangeDigit = (digit: string) => {
    onChangeDigit(digit)
  }

  const handleOnChange = (event: any) => {
    onChangePhoneNumber(event.target.value);
  }

  return (
    <PhoneInputStyle>
      <FormControl fullWidth>
        <div className='phone-input-wrapper'>
          <div className='country-code-select-wrapper'>
            <div
              className='country-code-wrapper dropdown-button'
              onClick={() => setOpened(!isOpened)}
            >
              <div className='flag-div'>
                <img src={selectedItem.flag} width={45} />
              </div>
              {selectedItem.digitCode}
            </div>
            <div className={cls('country-dropdown', { opened: isOpened })}>
              {CountryList.map((country, index) => (
                <div
                  className='country-code-wrapper country-dropdown-item'
                  key={index}
                  onClick={() => {
                    setSelectedItem(country);
                    handleChangeDigit(country.digitCode);
                    setOpened(false);
                    // (register && register("mobilePrefix"!));
                  }}
                >
                  <div className='flag-div'>
                    <img src={country.flag} width={45} />
                  </div>
                  {country.digitCode}
                </div>
              ))}
            </div>
          </div>
          <div className='number-wrapper'>
            <NewInputComponent
              className='text-input phone-input'
              label='Phone Number'
              value={phoneNumber}
              onChange={handleOnChange}
              type='tel'
              name='phone_number'
              border={true}
            />
          </div>
        </div>
      </FormControl>
    </PhoneInputStyle >
  );
};
