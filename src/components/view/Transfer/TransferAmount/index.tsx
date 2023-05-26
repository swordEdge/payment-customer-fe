import React, { useEffect, useMemo, useState } from 'react';

import { Box } from '@mui/material';
import { IAccount, ICurrency, IFee, ITransfer } from 'new_models';

import { TransferInputComponent } from '../TransferInput';
import { TransferAccountStyle } from './index.style';

import {
  DatePickerComponent,
  DropDownComponent,
  InputComponent,
} from 'components/common';

import { getConversionRate } from 'utils';
import { useDebounce } from 'hooks';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
>;

type TransferAmountComponentProps = {
  transfer: ITransfer;
  accounts: ISubAccountType[];
  currencies: ICurrency[];
  subscriptions: IFee[];
  subscriptionID: number;
  setTransferRate: (rate: number) => void;
  setTransferAmount: (amount: Amount) => void;
  setReceiveAmount: (amount: number) => void;
  fee: number;
  onFetchFee: (newTransfer: Pick<ITransfer, 'amount' | 'fromAccountId' | 'toAccountId' | 'toBeneficiaryId'> & { isBeneficiary: boolean; }) => void;
};

type Amount = {
  amount: number;
  sendAmount: number;
  receivedAmount: number;
};

const initialAmount: Amount = {
  amount: 0,
  sendAmount: 0,
  receivedAmount: 0,
};

export const TransferAmountComponent: React.FC<
  TransferAmountComponentProps
> = ({
  accounts,
  currencies,
  transfer,
  subscriptionID,
  subscriptions,
  setReceiveAmount,
  setTransferRate,
  setTransferAmount,
  fee,
  onFetchFee
}) => {
    const subscription = subscriptions.find((s) => s.id == subscriptionID);
    const optionData =
      subscription &&
      JSON.parse(
        subscription.optionJson
          .replace(/([a-zA-Z0-9]+?):/g, '"$1":')
          .replace(/'/g, '"')
      );
    // const fees = 2;
    // const fees = optionData[6].flat;

    const getCurrencySymbol = (currency: string) => {
      let symbol = '$';
      currencies.map((item) => {
        if (item.code === currency) {
          symbol = item.symbol;
        }
      });
      return symbol;
    };

    const fromAccount = useMemo(() => {
      return accounts.find(
        (account: ISubAccountType) => account.id === transfer.fromAccountId
      );
    }, [accounts]);

    const toAccount = useMemo(() => {
      return accounts.find(
        (account: ISubAccountType) => account.id === transfer.toAccountId
      );
    }, [accounts]);

    const [starndOrder, onStandOrder] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<Amount>(initialAmount);

    const debouncedAmount = useDebounce<number>(formValues.amount, 500);

    useEffect(() => {
      onFetchFee({ amount: transfer.amount, fromAccountId: transfer.fromAccountId, toAccountId: transfer.toAccountId, toBeneficiaryId: transfer.toBeneficiaryId, isBeneficiary: transfer.toAccountId === undefined || transfer.toAccountId === null });
    }, [debouncedAmount])

    useEffect(() => {
      // const receivedValue = (((transfer.sendAmount ?? 0) * (100 - fee) / 100) * (transfer.rate ?? 0)).toFixed(2);
      const receivedValue = (((transfer.sendAmount ?? 0) - fee) * (transfer.rate ?? 0)).toFixed(2);
      console.log('receivedValue: ', receivedValue);
      setTransferAmount({
        ...formValues,
        amount: transfer.sendAmount,
        sendAmount: transfer.sendAmount,
        // receivedAmount: parseFloat(receivedValue),
        receivedAmount: formValues.receivedAmount
      })
    }, [fee])

    useEffect(() => {
      // const receivedValue = (((transfer.sendAmount ?? 0) * (100 - fee) / 100) * (transfer.rate ?? 0)).toFixed(2);
      const receivedValue = (((transfer.sendAmount ?? 0) - fee) * (transfer.rate ?? 0)).toFixed(2);

      setFormValues({
        ...formValues,
        amount: transfer.sendAmount ?? 0,
        sendAmount: transfer.sendAmount ?? 0,
        receivedAmount: parseFloat(receivedValue),
      });
    }, [transfer]);

    const onChangeValue = (value: string) => {
    };

    const handleInputChange = (e: any) => {
      let { value } = e.target;
      if (value < 0 || !e.target.value) {
        value = 0;
      } else if (
        fromAccount?.totalBalance &&
        parseFloat(value) > fromAccount?.totalBalance
      ) {
        value = fromAccount?.totalBalance;
      }
      const sentValue = (value * (transfer.rate ?? 0)).toFixed(2);
      const receivedValue = (((transfer.sendAmount ?? 0) - fee) * (transfer.rate ?? 0)).toFixed(2);
      // setFormValues({
      //   ...formValues,
      //   amount: parseFloat(value),
      //   sendAmount: parseFloat(sentValue),
      //   receivedAmount: parseFloat(receivedValue),
      // });
      setTransferAmount({
        ...formValues,
        amount: parseFloat(value),
        sendAmount: parseFloat(value),
        receivedAmount: parseFloat(receivedValue),
      })
    };

    const getConversion = async () => {
      setTransferRate(-1);

      const data: any = await getConversionRate(
        `${process.env.REACT_APP_SERVER_API}/conversion-rate/convert?from=${transfer.currency ?? 'USD'}&to=${transfer.toCurrency ?? 'USD'}`
      );
      setTransferRate(parseFloat(data.rate));
      // setTransferRate(
      //   parseFloat(data.info.rate)
      // );
    };

    useEffect(() => {
      if (transfer.toCurrency && transfer.currency) {
        getConversion();
      }
    }, [transfer.toCurrency, transfer.currency]);

    return (
      <TransferAccountStyle>
        <Box className='transfer-amount-title'>
          Enter the amount you want to send
        </Box>

        <Box className='transfer-amount-setting'>
          <Box className='transfer-amount-setting-container'>
            <Box className='transfer-amount-setting-content'>
              <Box className='transfer-amount-setting-content-title'>
                <Box>Send</Box>

                <Box className='each-info'>
                  <InputComponent
                    required={false}
                    label=''
                    value={transfer.sendAmount ? formValues.sendAmount : transfer.sendAmount}
                    type='number'
                    name='amount'
                    onChange={handleInputChange}
                    disabled={(transfer.rate ?? 0) < 0 ? true : false}
                  />
                </Box>
              </Box>

              <Box className='transfer-amount-setting-content-price'>
                <Box>Currency</Box>
                <Box className='transfer-amount-setting-content-main'>
                  <Box>{transfer.currency} </Box>
                  <Box>
                    <svg
                      width='14'
                      height='8'
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 1L7 7L13 1'
                        stroke='#333333'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='transfer-amount-setting-content-text'>
              Available: {fromAccount?.totalBalance} {transfer.currency}
            </Box>
          </Box>
          <Box>
            <svg
              width='40'
              height='40'
              viewBox='0 0 40 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle cx='20' cy='20' r='20' fill='#B5E9FF' />
              <path
                d='M18 26L24 20L18 14'
                stroke='#0A33FF'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </Box>
          <Box className='transfer-amount-setting-container'>
            <Box className='transfer-amount-setting-content'>
              <Box className='transfer-amount-setting-content-title'>
                <Box>Receive</Box>
                <Box className='each-info'>
                  <InputComponent
                    required={false}
                    label=''
                    value={(transfer.rate ?? 0) < 0 ? '0' : formValues.receivedAmount}
                    type={(transfer.rate ?? 0) < 0 ? 'text' : 'number'}
                    name='amount'
                    onChange={() => { }}
                  />
                </Box>
              </Box>
              <Box className='transfer-amount-setting-content-price'>
                <Box>Currency</Box>
                <Box className='transfer-amount-setting-content-main'>
                  <Box>{transfer.toCurrency} </Box>
                  <Box>
                    <svg
                      width='14'
                      height='8'
                      viewBox='0 0 14 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M1 1L7 7L13 1'
                        stroke='#333333'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className='transfer-amount-setting-content-text'>
              1 {transfer.currency} ≈ {(transfer.rate ?? 0) < 0 ? '~' : transfer.rate}
              {transfer.toCurrency}
            </Box>
          </Box>
        </Box>

        <Box className='transfer-amount-default'>
          <Box className='transfer-amount-default-factor'>
            <Box className='transfer-amount-default-content1'>Transfer Fee:</Box>
            <Box className='transfer-amount-default-content2'>

              {/* {getCurrencySymbol(transfer.currency ?? "")} {fees} {transfer.currency} */}
              {`${fee} ${transfer.currency}`}
            </Box>
          </Box>
          <Box className='transfer-amount-default-factor'>
            <Box className='transfer-amount-default-content1'>
              Conversion Rate:
            </Box>
            <Box className='transfer-amount-default-content2'>
              {(transfer.rate ?? 0) < 0 ? '~' : transfer.rate}
            </Box>
          </Box>
          <Box className='transfer-amount-default-factor'>
            <Box className='transfer-amount-default-content1'>
              Amount To Be Sent:
            </Box>
            <Box className='transfer-amount-default-content2'>
              {getCurrencySymbol(transfer.toCurrency ?? "")}
              {(transfer.rate ?? 0) < 0 ? 0 : formValues.receivedAmount}
            </Box>
          </Box>
        </Box>

        <hr className='transfer-amount-divide'></hr>

        <Box className='transfer-amount-receiver-container'>
          <Box className='transfer-amount-receiver-left'>
            <Box className='transfer-amount-receiver-left1'>
              {transfer.toName} will receive
            </Box>
            <Box className='transfer-amount-receiver-left2'>
              <Box className='transfer-amount-receiver-left2-content'>
                {getCurrencySymbol(transfer.toCurrency ?? "")}
                {(transfer.rate ?? 0) < 0 ? 0 : formValues.receivedAmount}
                {'           '}
                {transfer.toCurrency}
              </Box>
            </Box>
          </Box>
          <Box className='transfer-amount-receiver-right'>
            <Box className='transfer-amount-receiver-days'>
              <Box>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle cx='8' cy='8' r='8' fill='#30A7FF' />
                  <path
                    d='M7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12Z'
                    fill='white'
                  />
                  <path
                    d='M9 9C9 9.55228 8.55228 10 8 10C7.44772 10 7 9.55228 7 9L7 5C7 4.44772 7.44772 4 8 4C8.55229 4 9 4.44772 9 5L9 9Z'
                    fill='white'
                  />
                </svg>
              </Box>
              <Box className='transfer-amount-receiver-days-description'>
                Transfer should arrive in: <b>1-2 days.</b>
              </Box>
            </Box>
            <Box className='transfer-amount-change-dates'>
              Change Payment Date
            </Box>
          </Box>
        </Box>

        <Box className='transfer-amount-other-setting-container'>
          <Box className='transfer-amount-other-setting-personal'>
            <Box className='transfer-amount-other-setting-personal-content'>
              <Box className='transfer-amount-other-setting-personal-title'>
                Reference (optional)
              </Box>
              <Box className='transfer-amount-other-setting-personal-input'>
                <TransferInputComponent
                  required={false}
                  label=''
                  value=''
                  type='text'
                />
              </Box>
            </Box>

            <Box className='transfer-amount-other-setting-personal-content'>
              <Box className='transfer-amount-other-setting-personal-title'>
                Personal Memo
              </Box>
              <Box className='transfer-amount-other-setting-personal-input'>
                <TransferInputComponent
                  required={false}
                  label=''
                  value=''
                  type='text'
                />
              </Box>
            </Box>
          </Box>

          <Box
            className='transfer-amount-other-setting-stand-order'
            onClick={() => onStandOrder(!starndOrder)}
          >
            Change Standing Order
          </Box>

          <Box className='transfer-amount-stand-order-setting'>
            {starndOrder && (
              <Box className='transfer-amount-stand-order-setting-grid'>
                <Box
                  className='transfer-amount-stand-order-setting-grid-item'
                  width={'35%'}
                >
                  <Box className='transfer-amount-stand-order-setting-grid-item-content'>
                    <span>Frist Payment Start Date</span>
                    <Box width={'45%'}>
                      <DatePickerComponent required={false} label='' />
                    </Box>
                  </Box>
                </Box>
                <Box
                  className='transfer-amount-stand-order-setting-grid-item'
                  width={'28%'}
                  marginLeft={'2%'}
                >
                  <Box className='transfer-amount-stand-order-setting-grid-item-content'>
                    <span>Frequency</span>
                    <Box width={'65%'}>
                      <DropDownComponent
                        required={false}
                        label=''
                        values={[]}
                        onChangeValue={onChangeValue}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box
                  className='transfer-amount-stand-order-setting-grid-item'
                  width={'30%'}
                  marginLeft={'5%'}
                >
                  <Box className='transfer-amount-stand-order-setting-grid-item-content'>
                    <span>Stop Payment After</span>
                    <Box width={'40%'}>
                      <InputComponent
                        required={false}
                        label=''
                        value=''
                        type='text'
                        name='phoneNumber'
                        onChange={(e: any) => {
                          console.log(e.target.value);
                        }}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box
                  className='transfer-amount-stand-order-setting-grid-item'
                  width={'35%'}
                >
                  <Box className='transfer-amount-stand-order-setting-grid-item-content'>
                    <span>Payments For By</span>
                    <Box width={'45%'}>
                      <DatePickerComponent required={false} label='' />
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </TransferAccountStyle>
    );
  };
