import React, { useState } from 'react';

import { FormControl, FormLabel, TextField, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';

import { DatePickerComponentStyle } from './index.style';

type DatePicketComponentProps = {
  required: boolean;
  label: string;
};

export const DatePickerComponent: React.FC<DatePicketComponentProps> = ({
  required,
  label,
}) => {
  const [dateValue, setValue] = useState<Dayjs | null>(null);
  return (
    <DatePickerComponentStyle>
      <FormControl fullWidth>
        {label && (
          <FormLabel className='label-container'>
            {required && '*'}
            <Typography className='label-show'> {label} </Typography>
          </FormLabel>
        )}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className='datepicker-main'
            value={dateValue}
            onChange={(newValue: any) => {
              setValue(newValue);
            }}
            renderInput={(params: any) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </FormControl>
    </DatePickerComponentStyle>
  );
};
