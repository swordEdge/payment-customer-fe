import React, { useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
  IAccount,
  IBeneficiary,
  ICurrency,
  ITransfer,
  IUser,
  IDetailBeneficiary
} from 'new_models';
import { TransferViews } from 'components';
import { PATH } from 'consts';
import { AppActions, RootState, AppDispatch } from 'new_redux/store';
import { useTimedNotification } from 'hooks';

const defaultValues: ITransfer = {
  fromAccountId: 0,
  isOwnedAccount: true,
  sendAmount: 0
};

export const TransferContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  // const { user, expired } = useSelector((state: RootState) => state.user);
  const { accounts } = useSelector((state: RootState) => state.account);
  const { beneficiaries } = useSelector(
    (state: RootState) => state.beneficiary
  );
  const { currencies } = useSelector((state: RootState) => state.currency);
  const { fee } = useSelector((state: RootState) => state.transaction);
  // const { subscriptionID, subscriptions } = useSelector(
  //   (state: RootState) => state.subscription
  // );
  // const transaction_fail = useSelector(
  //   (state: RootState) => state.transaction.error
  // );
  const [receiverName, setReceiverName] = useState<string>('');
  const [isChangePin, setIsChangePin] = useState<boolean>(false);
  const [transfer, setTransfer] = useState<ITransfer>(defaultValues);
  const [successModel, setSuccessModel] = useState<boolean>(false);
  const [failureModel, setFailureModel] = useState<boolean>(false);

  const {
    isShowing: isNotificationShowing,
    show: notificationShow,
    close: notificationClose,
  } = useTimedNotification(5000);

  const handleVerifyPhone = (newUser: IUser) => {
  };

  const handleVerifyEmail = (newUser: IUser) => {
  };

  const handleSuccessModal = () => {
    setSuccessModel(true);
  };

  const handleSuccessModalCancel = () => {
    setSuccessModel(false);
    navigate(PATH.ACCOUNTS);
  };

  const handleFailureModalCancel = () => {
    setFailureModel(false);
  };

  const handleSuccessModalConfirm = () => {
    setSuccessModel(false);
  };

  const handleCancelPin = () => {
    setIsChangePin(false);
  }

  const handleCheckPin = (code: string) => {
    handleSendTransfer(code);
  }


  const handleFetchFee = (newTransfer: Pick<ITransfer, 'amount' | 'fromAccountId' | 'toAccountId' | 'toBeneficiaryId'> & { isBeneficiary: boolean }) => {
    dispatch(AppActions.transaction.getFeeRequest({
      sendAmount: newTransfer.amount,
      isBeneficiary: newTransfer.isBeneficiary,
      fromAccountId: newTransfer.fromAccountId,
      toAccountId: newTransfer.isBeneficiary ? newTransfer.toBeneficiaryId : newTransfer.toAccountId,
      next: () => { }
    }))
  }

  const handleChangeTransfer = (newTransfer: ITransfer) => {
    setTransfer(newTransfer);
    sessionStorage.setItem('transfer', JSON.stringify(newTransfer));
  }

  const handleCreateBeneficiary = (newBeneficiary: IDetailBeneficiary) => {
    dispatch(AppActions.beneficiary.createBeneficiaryRequest({
      beneficiary: newBeneficiary,
      next: () => { dispatch(AppActions.beneficiary.getBeneficiariesRequest({})); }
    }));
  };

  const handleVerifyUser = () => {
    dispatch(AppActions.transaction.mftCodeRequest({
      next: () => {
        setIsChangePin(true);
      }
    }));
  };

  const handleSendTransfer = (code: string) => {
    if (transfer.isOwnedAccount) {
      dispatch(AppActions.transaction.createOwnAccountTransactionRequest({
        transaction: {
          fromAccountId: transfer.fromAccountId,
          toAccountId: transfer.toAccountId,
          sendAmount: transfer.sendAmount,
          code
        },
        next: () => {
          setIsChangePin(false);
          setSuccessModel(true);
        },
        errorAction: (error: string) => {
          if (error === "Invalid Code") {
            notificationShow();
          }
        }
      }));
    } else {
      dispatch(AppActions.transaction.createBeneficiaryTransactionRequest({
        transaction: {
          fromAccountId: transfer.fromAccountId,
          toBeneficiaryId: transfer.toBeneficiaryId,
          sendAmount: transfer.sendAmount,
          code
        },
        next: () => {
          setIsChangePin(false);
          setSuccessModel(true);
        },
        errorAction: (error: string) => {
          if (error === "Invalid Code") {
            notificationShow();
          }
        }
      }));
    }
  };

  useEffect(() => {
    dispatch(AppActions.currency.getCurrenciesRequest({}));
    dispatch(AppActions.account.getAccountsRequest({}));
    dispatch(AppActions.beneficiary.getBeneficiariesRequest({}));
  }, [dispatch])

  useEffect(() => {
    // dispatch(AppActions.user.checkExpire());
    // dispatch(AppActions.user.getMe());
    const oTransfer = sessionStorage.getItem('transfer');
    const data = JSON.parse(oTransfer as string);
    setTransfer(data ? data : defaultValues);
    setReceiverName(data ? data.toName : '');
  }, []);

  return (
    <TransferViews.TransferView
      // user={user}
      accounts={accounts}
      beneficiaries={beneficiaries}
      currencies={currencies}
      // subscriptionID={subscriptionID}
      subscriptionID={1}
      // subscriptions={subscriptions}
      subscriptions={[]}
      transfer={transfer}
      receiveName={receiverName}
      // transaction_fail={transaction_fail}
      transaction_fail={false}
      isChangePin={isChangePin}
      confirmPin={handleCheckPin}
      cancelPin={handleCancelPin}
      successModel={successModel}
      failureModel={failureModel}
      setTransfer={handleChangeTransfer}
      setFailureModel={setFailureModel}
      verifyEmail={handleVerifyEmail}
      verifyPhone={handleVerifyPhone}
      verifyUser={handleVerifyUser}
      onSuccessModel={handleSuccessModal}
      onSuccessModelCancel={handleSuccessModalCancel}
      onFailureModelCancel={handleFailureModalCancel}
      onSuccessModelConfirm={handleSuccessModalConfirm}
      createBeneficiary={handleCreateBeneficiary}
      // sendTransfer={handleSendTransfer}
      sendTransfer={handleVerifyUser}
      isVerifyTransactionInvalidCode={isNotificationShowing}
      verifyTransactionModalClose={notificationClose}
      fee={fee}
      onFetchFee={handleFetchFee}
    />
  );
};
