import euFlag from '../assets/countries/eu.svg';
import gbFlag from '../assets/countries/gb.svg';
import usFlag from '../assets/countries/us.svg';
import bnbSvg from '../assets/cryptos/bnb.svg';
import btcSvg from '../assets/cryptos/btc.svg';
import ethSvg from '../assets/cryptos/eth.svg';
import usdtSvg from '../assets/cryptos/usdt.svg';

export const flags = [euFlag, usFlag, gbFlag];

export interface COUNTRY {
  name: string;
  shortName: string;
  phoneCode: string;
  flag: any;
}

export const countries = [
  {
    name: 'United States',
    shortName: 'US',
    phoneCode: '+1',
    flag: usFlag,
  },
  {
    name: 'United Kingdom',
    shortName: 'GK',
    phoneCode: '+44',
    flag: gbFlag,
  },
];

export enum CURRENCY_TYPE {
  FIAT = 'FIAT',
  CRYPTO = 'CRYPTO',
}

export enum TABS {
  BUY_CRYPTO = 'BUY_CRYPTO',
  SELL_CRYPTO = 'SELL_CRYPTO',
}

export enum FIAT_CURRENCY {
  USD = 'USD',
  EUR = 'EUR',
  GBP = 'GBP',
}

export enum CRYPTO_CURRENCY {
  ETH = 'ETH',
  BTC = 'BTC',
  BNB = 'BNB',
  USDT = 'USDT',
}

export const fiats = [
  {
    name: 'EUR',
    currency: FIAT_CURRENCY.EUR,
    svg: euFlag,
  },
  {
    name: 'United States Dollar',
    currency: FIAT_CURRENCY.USD,
    svg: usFlag,
  },
  {
    name: 'Pound Sterling',
    currency: FIAT_CURRENCY.GBP,
    svg: gbFlag,
  },
];

export const cryptos = [
  {
    name: 'Bitcoin',
    currency: CRYPTO_CURRENCY.BTC,
    chain: 'Bitcoin',
    svg: btcSvg,
  },
  {
    name: 'Ethereum',
    currency: CRYPTO_CURRENCY.ETH,
    chain: 'Ethereum',
    svg: ethSvg,
  },
  {
    name: 'Binance Coin (BEP-20)',
    currency: CRYPTO_CURRENCY.BNB,
    chain: 'Binance Smart Chain',
    svg: bnbSvg,
  },
  {
    name: 'Tether (TRC-20)',
    currency: CRYPTO_CURRENCY.USDT,
    chain: 'Tron',
    svg: usdtSvg,
  },
];

export enum ACTION_STATUS {
  NONE = 'NONE',
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export enum SIZE {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export enum VERIFICATION_METHOD {
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  PHONE_VERIFICATION = 'PHONE_VERIFICATION',
}

export enum TO_AFTER_VERIFICATION {
  TO_LOGIN = '1',
  TO_REGISTER = '2',
}

export enum BUY_SELL {
  BUY = 'buy',
  SELL = 'sell',
}

export const COOKIES = {
  JWT: 'spnjwt',
};
