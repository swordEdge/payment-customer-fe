import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import {
  IAccount,
  IBeneficiary,
  ICurrency,
  IFee,
  ITransfer,
  IUser,
  IDetailBeneficiary
} from 'new_models';

import { TransactionVerifyModalComponent } from './ChangePinModel';
import { SuccessChangePinModalComponent } from './ChangePinModel/SuccessModal';
import { FailureModalComponent } from './SaasFailureModal';
import { SelectAccountComponent } from './SelectAccount';
import { SelectBeneficiaryComponent } from './SelectBeneficiay';
import { TransactionOverviewComponent } from './TransactionOverivew';
import { TransferAmountComponent } from './TransferAmount';
import { TransferStepComponent } from './TransferStep';
import { TransferViewStyle } from './index.style';
import { MobileTransferView } from './MobileTransfer';
import { MobileTransactionOverviewView } from './MobileTransactionOverview';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance' | 'imgLink' | 'currencySymbol'
>;

type TransferViewProps = {
  user?: IUser;
  accounts: ISubAccountType[];
  beneficiaries: IBeneficiary[];
  currencies: ICurrency[];
  transfer: ITransfer;
  subscriptionID: number;
  subscriptions: IFee[];
  receiveName: string;
  transaction_fail: boolean;
  isChangePin: boolean;
  setTransfer: (newTransfer: ITransfer) => void;
  successModel: boolean;
  failureModel: boolean;
  setFailureModel: Function;
  verifyPhone: Function;
  verifyEmail: Function;
  verifyUser: Function;
  onSuccessModel: Function;
  onSuccessModelCancel: () => void;
  onFailureModelCancel: () => void;
  onSuccessModelConfirm: () => void;
  createBeneficiary: (newBeneficiary: IDetailBeneficiary) => void;
  sendTransfer: () => void;
  confirmPin: (code: string) => void;
  cancelPin: () => void;
  isVerifyTransactionInvalidCode: boolean;
  verifyTransactionModalClose: () => void;
  fee: number;
  onFetchFee: (newTransfer: Pick<ITransfer, 'amount' | 'fromAccountId' | 'toAccountId' | 'toBeneficiaryId'> & { isBeneficiary: boolean; }) => void;
};

export const TransferView: React.FC<TransferViewProps> = ({
  user,
  accounts,
  beneficiaries,
  currencies,
  transfer,
  subscriptionID,
  subscriptions,
  receiveName,
  transaction_fail,
  isChangePin,
  setTransfer,
  successModel,
  failureModel,
  setFailureModel,
  verifyPhone,
  verifyEmail,
  verifyUser,

  confirmPin,
  cancelPin,

  createBeneficiary,
  sendTransfer,

  onSuccessModelCancel,
  onFailureModelCancel,
  onSuccessModelConfirm,

  isVerifyTransactionInvalidCode,
  verifyTransactionModalClose,
  fee,
  onFetchFee,
}) => {
  const [step, setStep] = useState<number>(0);
  const [mobileStep, setMobileStep] = useState<number>(0);

  useEffect(() => {
    if (transaction_fail === true) {
      setFailureModel(true);
    }
  }, [transaction_fail]);

  // Change transfer data
  const onSelectedFrom = (
    item: Pick<
      IAccount,
      'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
    >
  ) => {
    const newTransfer = {
      ...transfer,
      fromAccountId: item.id,
      currency: item.currencyCode || '',
    };

    setTransfer(newTransfer);
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  };

  const onSelectedToAccount = ({
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
    setTransfer({
      ...transfer,
      toAccountId,
      toCurrency,
      toName,
      isOwnedAccount,
    });
  };

  const onSelectedToBeneficiary = ({
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
    setTransfer({
      ...transfer,
      toBeneficiaryId,
      toCurrency,
      toName,
      isOwnedAccount,
    });
  };

  const setTransferRate = (rate: number) => {
    setTransfer({
      ...transfer,
      rate,
    });
  };

  const setReceiveAmount = (receivedAmount: number) => {
    setTransfer({
      ...transfer,
      receivedAmount: receivedAmount,
    });
  };

  const setTransferAmount = (formValues: any) => {
    setTransfer({
      ...transfer,
      amount: formValues.amount,
      sendAmount: formValues.sendAmount,
      receivedAmount: formValues.receivedAmount,
    });
  };

  const onChangePage = (index: number) => {
    let continuePage = true;
    if (index < 0) {
      setStep(step + index);
      sessionStorage.setItem('step', (step + index).toString());
    }
    if (step === 0 && transfer.fromAccountId === undefined) {
      continuePage = false;
    } else if (step === 1 && (transfer.toAccountId === undefined && transfer.toBeneficiaryId === undefined)) {
      continuePage = false;
    }
    // else if (step === 2) {
    //   if (
    //     transfer.receiveAmount === undefined ||
    //     transfer.receiveAmount < 0
    //   ) {
    //     continuePage = false;
    //   }
    // }
    if (continuePage === true) {
      setStep(step + index);
      sessionStorage.setItem('step', (step + index).toString());
    }
  };
  useEffect(() => {
    const oldStep = sessionStorage.getItem('step');
    setStep(parseInt(oldStep as string) ? parseInt(oldStep as string) : 0);
  }, []);

  return (
    <TransferViewStyle>
      <Box className='transfer-overview-container'>
        <Box className='transfer-overview-header'>
          <TransferStepComponent step={step} />
        </Box>

        {step < 2 ? (
          <Box className='transfer-overview-main-content'>
            {step === 0 ? (
              <SelectAccountComponent
                transfer={transfer}
                onSelectedFrom={onSelectedFrom}
                accounts={accounts}
              />
            ) : (
              ''
            )}
            {step === 1 ? (
              <SelectBeneficiaryComponent
                transfer={transfer}
                onSelectedToAccount={onSelectedToAccount}
                onSelectedToBeneficiary={onSelectedToBeneficiary}
                beneficiaries={beneficiaries}
                accounts={accounts}
                currencies={currencies}
                createBeneficiary={createBeneficiary}
              />
            ) : (
              ''
            )}
          </Box>
        ) : (
          <Box className='transfer-overview-content'>
            {step === 2 ? (
              <TransferAmountComponent
                accounts={accounts}
                currencies={currencies}
                transfer={transfer}
                subscriptionID={subscriptionID}
                subscriptions={subscriptions}
                setTransferRate={setTransferRate}
                setReceiveAmount={setReceiveAmount}
                setTransferAmount={setTransferAmount}
                fee={fee}
                onFetchFee={onFetchFee}
              />
            ) : (
              ''
            )}
            {step === 3 ? (
              <TransactionOverviewComponent
                transfer={transfer}
                currencies={currencies}
              />
            ) : (
              ''
            )}
          </Box>
        )}

        {step < 3 ? (
          <Box className='transfer-overview-footer'>
            {step > 0 && step < 3 ? (
              <Box
                className='back-button'
                onClick={() => {
                  onChangePage(-1);
                }}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                >
                  <path
                    d='M6.44918 13.6007C6.68879 13.8802 7.10966 13.9126 7.38921 13.673C7.66876 13.4334 7.70114 13.0125 7.46152 12.733L4.40484 9.16683H13.622C13.9902 9.16683 14.2887 8.86835 14.2887 8.50016C14.2887 8.13197 13.9902 7.8335 13.622 7.8335H4.40482L7.46152 4.26734C7.70114 3.98779 7.66876 3.56693 7.38921 3.32731C7.10966 3.0877 6.68879 3.12007 6.44918 3.39962L2.82106 7.63243C2.39307 8.13175 2.39307 8.86855 2.82106 9.36787L6.44918 13.6007Z'
                    fill='#020A33'
                  />
                </svg>
                <Box>Previous</Box>
              </Box>
            ) : (
              <Box />
            )}
            {step >= 0 && step < 3 ? (
              <Box
                className='page-button'
                onClick={() => {
                  onChangePage(1);
                }}
              >
                <Box>Next</Box>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                >
                  <path
                    d='M10.3395 3.39932C10.0999 3.11977 9.67903 3.0874 9.39948 3.32701C9.11993 3.56663 9.08756 3.98749 9.32717 4.26704L12.3839 7.83317H3.16667C2.79848 7.83317 2.5 8.13165 2.5 8.49984C2.5 8.86803 2.79848 9.1665 3.16667 9.1665H12.3839L9.32717 12.7327C9.08756 13.0122 9.11993 13.4331 9.39948 13.6727C9.67903 13.9123 10.0999 13.8799 10.3395 13.6004L13.9676 9.36757C14.3956 8.86825 14.3956 8.13145 13.9676 7.63213L10.3395 3.39932Z'
                    fill='white'
                  />
                </svg>
              </Box>
            ) : (
              ''
            )}
          </Box>
        ) : (
          <Box className='transfer-overview-footer'>
            <Box
              className='back-button'
              onClick={() => {
                setStep(step - 1);
                sessionStorage.setItem('step', (step - 1).toString());
              }}
            >
              Back
            </Box>
            <Box
              className='page-button'
              width={'150px'}
              onClick={() => sendTransfer()}
            >
              Send Now
            </Box>
          </Box>
        )}
      </Box>

      <Box className='mobile-transfer-container'>
        {
          mobileStep === 0 &&
          <MobileTransferView
            accounts={accounts}
            beneficiaries={beneficiaries}
            transfer={transfer}
            setTransfer={setTransfer}
            setStep={setMobileStep}
            currencies={currencies}
            createBeneficiary={createBeneficiary}
          />
        }
        {
          mobileStep === 1 &&
          <MobileTransactionOverviewView
            transfer={transfer}
            sendTransfer={sendTransfer}
            setStep={setMobileStep}
          />
        }
      </Box>

      {isChangePin && (
        <TransactionVerifyModalComponent
          title={'Change PIN'}
          // userEmail={user.emailAddress || ''}
          userEmail={''}
          onCancel={cancelPin}
          onConfirm={confirmPin}
          isVerifyTransactionInvalidCode={isVerifyTransactionInvalidCode}
          verifyTransactionModalClose={verifyTransactionModalClose}
        />
      )}

      {successModel && (
        <SuccessChangePinModalComponent
          receiveName={receiveName}
          title={'Change PIN'}
          onCancel={onSuccessModelCancel}
          onConfirm={onSuccessModelConfirm}
        />
      )}

      {failureModel && (
        <FailureModalComponent onCancel={onFailureModelCancel} />
      )}
    </TransferViewStyle>
  );
};
