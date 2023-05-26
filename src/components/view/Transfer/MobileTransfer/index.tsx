import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Box, Grid, Switch } from '@mui/material';
import { MobileHeaderComponent, MobileItemComponent, NewInputComponent, NewButtonComponent, NewBeneficiaryModal } from 'components/common';
import { MobileSelectAccountView } from '../MobileSelectAccount';
import { MobileSelectBeneficiaryView } from '../MobileSelectBeneficiary';
import { MobileTransferViewStyle } from './index.style';
import { InformSvg } from 'assets/icons';
import { IAccount, IBeneficiary, ITransfer, IDetailBeneficiary, ICurrency } from 'new_models';
import { getConversionRate } from 'utils';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance' | 'imgLink' | 'currencySymbol'
>;

type MobileTransferViewProps = {
  accounts: ISubAccountType[];
  beneficiaries: IBeneficiary[];
  transfer: ITransfer;
  setTransfer: (newTransfer: ITransfer) => void;
  setStep: (step: number) => void;
  createBeneficiary: (newBeneficiary: IDetailBeneficiary) => void;
  currencies: ICurrency[];
};


export const MobileTransferView: React.FC<MobileTransferViewProps> = (props) => {
  const { accounts, beneficiaries, transfer, setTransfer, setStep, createBeneficiary, currencies } = props;

  const fees = 2;

  const [isSelectAccount, setIsSelectAccount] = useState<boolean>(false);
  const [currentAccount, setCurrentAccount] = useState<ISubAccountType>();
  const [toCurrencySymbol, setToCurrencySymbol] = useState<string>('');

  const [isSelectBeneficiary, setIsSelectBeneficiary] = useState<boolean>(false);
  const [toAccountName, setToAccountName] = useState<string>("");
  const [conversionRate, setTransferRate] = useState<number>(0);

  const ownAccounts = useMemo(() => {
    if (currentAccount) {
      return accounts.filter((account) => account.id !== currentAccount.id);
    }
    return [];
  }, [currentAccount])

  const amountRef = useRef<HTMLInputElement>(null);

  const handleFromAccount = (account: ISubAccountType) => {
    setCurrentAccount(account);
    const newTransfer = {
      ...transfer,
      fromAccountId: account.id,
      currency: account.currencyCode || ''
    }
    setTransfer(newTransfer);
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  }

  const getCurrencySymbol = (code: string) => {
    return currencies.filter((currency: ICurrency) => currency.code === code)[0].symbol;
  }

  const handleSelectedAccount = ({
    toAccountId,
    toCurrency,
    toName,
    isOwnedAccount,
  }: {
    toAccountId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => {
    const newTransfer = {
      ...transfer,
      toAccountId,
      toCurrency,
      toName,
      isOwnedAccount,
    }
    setTransfer(newTransfer);
    setToAccountName(toName);
    setToCurrencySymbol(getCurrencySymbol(toCurrency));
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  };

  const handleSelectedBeneficiary = ({
    toBeneficiaryId,
    toCurrency,
    toName,
    isOwnedAccount,
  }: {
    toBeneficiaryId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => {
    const newTransfer = {
      ...transfer,
      toBeneficiaryId,
      toCurrency,
      toName,
      isOwnedAccount
    }
    setTransfer(newTransfer);
    setToCurrencySymbol(getCurrencySymbol(toCurrency));
    setToAccountName(toName);
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  };

  const handleNext = () => {
    let value = parseFloat(amountRef.current?.value ?? "0");
    if (value < 0) {
      value = 0;
    } else if (
      currentAccount?.totalBalance &&
      value > currentAccount?.totalBalance
    ) {
      value = currentAccount?.totalBalance;
    }
    const sentValue = (value * (conversionRate ?? 0)).toFixed(2);
    const receivedValue = (((value ?? 0) * (100 - fees) / 100) * (conversionRate ?? 0)).toFixed(2);
    const newTransfer = {
      ...transfer,
      rate: conversionRate,
      amount: value,
      sendAmount: value,
      receivedAmount: parseFloat(receivedValue ?? '0'),
    }
    setTransfer(newTransfer);
    setStep(1);
  }

  const isResolve = () => {
    return amountRef.current?.value !== undefined && toAccountName !== "" && currentAccount !== undefined;
  }

  const getConversion = async () => {
    setTransferRate(-1);

    const data: any = await getConversionRate(
      `${process.env.REACT_APP_SERVER_API}/conversion-rate/convert?from=${transfer.currency ?? 'USD'}&to=${transfer.toCurrency ?? 'USD'}`
    );
    setTransferRate(parseFloat(data.rate));
    const newTransfer = {
      ...transfer,
      rate: parseFloat(data.rate)
    };
    setTransfer(newTransfer);
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  };

  const handleSendAmoundChange = () => {
    let value = parseFloat(amountRef.current?.value ?? "0");
    if (value < 0) {
      value = 0;
    } else if (
      currentAccount?.totalBalance &&
      value > currentAccount?.totalBalance
    ) {
      value = currentAccount?.totalBalance;
    }
    const sentValue = (value * (conversionRate ?? 0)).toFixed(2);
    const receivedValue = (((value ?? 0) * (100 - fees) / 100) * (conversionRate ?? 0)).toFixed(2);
    const newTransfer = {
      ...transfer,
      rate: conversionRate,
      amount: value,
      sendAmount: value,
      receivedAmount: parseFloat(receivedValue ?? '0'),
    }
    setTransfer(newTransfer);
  }

  useEffect(() => {
    if (transfer.toCurrency && transfer.currency) {
      getConversion();
    }
  }, [transfer.toCurrency, transfer.currency]);

  return <MobileTransferViewStyle>
    <Box className='mobile-header-container'>
      <MobileHeaderComponent title='Transfer' prevAction={() => { }} />
      <Box sx={{ height: '5rem' }}> </Box>
    </Box>

    <Box sx={{ height: '1rem' }}> </Box>
    <Box className="item-container">
      <MobileItemComponent
        title="Paying Account"
        value={currentAccount?.name ?? ""}
        setValue={() => { }}
        valueAction={() => setIsSelectAccount(true)}
      />
    </Box>

    <Box className="info-container">
      <Box className="color-gray"> Available Balance: </Box>
      <Box className="color-red row-gap-16px font-weight-semibold"> {`${currentAccount?.totalBalance ?? ''} ${currentAccount?.currencyCode ?? ''}`} </Box>
    </Box>
    <Box className="item-container">
      <MobileItemComponent
        title="Beneficiary"
        value={toAccountName}
        setValue={() => { }}
        valueAction={() => setIsSelectBeneficiary(true)}
      />
    </Box>

    <Box className="amount-container column-gap-1rem">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <NewInputComponent
            label='Send'
            // value=""
            type="number"
            inputRef={amountRef}
            border={true}
            onChange={handleSendAmoundChange}
          />
        </Grid>
        <Grid item xs={5}>
          <NewInputComponent
            label='Currency'
            value={transfer.currency ?? ''}
            disabled={true}
          />
        </Grid>
        <Grid item xs={7}>
          <NewInputComponent
            label='Will Receive'
            value={transfer.receivedAmount}
            type="number"
            border={true}
          />
        </Grid>
        <Grid item xs={5}>
          <NewInputComponent
            label='Currency'
            value={transfer.toCurrency ?? ''}
            disabled={true}
          />
        </Grid>
      </Grid>
      <Box sx={{ height: '0.5rem' }}></Box>
      <Box className="color-gray font-family-main font-size-small"> {`1 ${currentAccount?.currencySymbol ?? ''} ~ ${transfer.rate ?? 0} ${toCurrencySymbol}`} </Box>
      <Box sx={{ height: '1rem' }}></Box>
      <Box className="transfer-status-container">
        <Box className="transfer-status">
          <Box className="color-gray font-family-main">
            Transfer Fee
          </Box>
          <Box sx={{ height: '0.5rem' }}></Box>
          <Box className="font-family-main">
            2%
          </Box>
        </Box>
        <Box className="transfer-status">
          <Box className="color-gray font-family-main">
            Conversion Rate
          </Box>
          <Box sx={{ height: '0.5rem' }}></Box>
          <Box className="font-family-main">
            {transfer.rate ?? 0}
          </Box>
        </Box>
        <Box className="transfer-status">
          <Box className="color-gray font-family-main">
            Amount to be Sent
          </Box>
          <Box sx={{ height: '0.5rem' }}></Box>
          <Box className="font-family-main">
            {`${transfer.sendAmount} ${transfer.currency ?? ''}`}
          </Box>
        </Box>
      </Box>
    </Box>

    <Box className="column-gap-1rem">
      <Box className="memo">
        <Box className="font-size-big font-weight-semibold font-family-main"> Memo </Box>
        <Box className="memo-input">
          <NewInputComponent
            border={false}
            className="text-input"
            placeholder="Optional, at most 40 characters."
          />
        </Box>
      </Box>
    </Box>

    <Box className="info-container">
      <img src={InformSvg} />
      <Box className="color-gray row-gap-8px"> Transfer Should Arrive: </Box>
      <Box className="color-black row-gap-16px font-weight-semibold"> 1-2 business days </Box>
    </Box>

    <Box className="memo">
      <Box className="font-size-big font-weight-semibold font-family-main"> Scheduled Transfer </Box>
      <Switch />
    </Box>

    <Box className="next-button">
      <NewButtonComponent
        onClick={handleNext}
        className='submit-button bg-primary font-family-main'
        type="submit"
        disabled={!isResolve() ?? false}
      >
        Next Step
      </NewButtonComponent>
    </Box>

    {
      isSelectAccount && <MobileSelectAccountView
        accounts={accounts}
        currentAccount={currentAccount}
        setCurrentAccount={handleFromAccount}
        closeSelectAccount={setIsSelectAccount}
      />
    }
    {
      isSelectBeneficiary && <MobileSelectBeneficiaryView
        closeSelectBeneficiary={setIsSelectBeneficiary}
        beneficiaries={beneficiaries}
        accounts={ownAccounts}
        selectAccount={handleSelectedAccount}
        selectBeneficiary={handleSelectedBeneficiary}
        currencies={currencies}
        createBeneficiary={createBeneficiary}
      />
    }
  </MobileTransferViewStyle>
}