import React from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

import { SaasDateRangePickerStyle } from './index.style';

type Props = {
  dateRangFilter: any;
  setDateRangFilter: Function;
};

export const SaasDateRangePicker: React.FC<Props> = ({
  dateRangFilter,
  setDateRangFilter,
}) => {
  return (
    <SaasDateRangePickerStyle>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: '', end: '' }}
      >
        <DateRangePicker
          value={dateRangFilter}
          onChange={(newValue) => {
            setDateRangFilter(newValue);
          }}
          renderInput={(startProps: any, endProps: any) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 1 }}> ~ </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </SaasDateRangePickerStyle>
  );
};
