import React, { useState } from 'react';

import { Box, BoxProps, Divider } from '@mui/material';

import { MobileSelectCurrencyModalStyle } from './index.style';

import {
  MobileHeaderComponent,
  SelectElementComponent,
} from 'components/common';

import { PATH } from 'consts';

type MobileSelectCurrencyModalProps = BoxProps & {
  prevClick: () => void;
  selectCurrency: (unit: string) => void;
};

const mockCurrencies = [
  {
    id: 1,
    unit: 'USD',
  },
  {
    id: 2,
    unit: 'EUR',
  },
  {
    id: 3,
    unit: 'GBP',
  },
];

export const MobileSelectCurrencyModal: React.FC<
  MobileSelectCurrencyModalProps
> = (props) => {
  const { prevClick, selectCurrency } = props;

  const [currentCurrency, setCurrentCurrency] = useState<number>(0);

  const onMobileHeaderPrevClick = (path: string) => {
    prevClick();
  };

  const onCurrencySelect = (index: number) => {
    setCurrentCurrency(index);
    selectCurrency(
      mockCurrencies.filter((currency) => currency.id === index)[0].unit || ''
    );
  };

  return (
    <MobileSelectCurrencyModalStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Select Currency'
          backPath={PATH.SERVICES_INDEX + '/' + PATH.SERVICES_BENEFICIARY}
          prevAction={onMobileHeaderPrevClick}
        />
      </Box>

      <Box className='mobile-container'>
        <Divider className='divider-css' />
        {mockCurrencies.map((currency, index) => (
          <>
            <SelectElementComponent
              elementId={currency.id}
              title={currency.unit}
              checked={currency.id === currentCurrency}
              selectCurrency={onCurrencySelect}
            />
            <Divider className='divider-css' />
          </>
        ))}
      </Box>
    </MobileSelectCurrencyModalStyle>
  );
};
