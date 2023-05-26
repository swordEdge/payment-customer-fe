import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box } from '@mui/material';
import { MobileHeaderComponent } from 'components/common';
import { useModal } from 'hooks';
import { IAccount, ICurrency, ITransaction } from 'new_models';

import { AccountInfoView } from './AccountInfo';
import { AccountTransactionView } from './AccountTransaction';
import { CloseAccountModal } from './CloseAccountModal';
import { SuccessModal } from './SuccessModal';
import { TransactionModal } from './TransactionModal';
import { AccountDetailViewStyle } from './index.style';

import { PATH } from 'consts';

type AccountDetailViewProps = {
  currencies: ICurrency[];
  expired: boolean;
  account: IAccount;
  id: string;
  transactionById: ITransaction;
  accountTrans: Pick<
    ITransaction,
    | 'id'
    | 'name'
    | 'create_at'
    | 'inOuts'
    | 'amount'
    | 'accountName'
    | 'accountNumber'
    | 'cpDisplayName'
    | 'currencySymbol'
  >[];
  deleteAccount: (id: string) => void;
  setTransactionId: (id: string) => void;
};

export const AccountDetailView: React.FC<AccountDetailViewProps> = ({
  currencies,
  expired,
  account,
  id,
  transactionById: transactinoById,
  accountTrans,
  deleteAccount,
  setTransactionId,
}) => {
  const navigate = useNavigate();

  const [isCloseAccount, setIsCloseAccount] = useState<boolean>(false);
  const [isSuccessModal, setIsSuccessModal] = useState<boolean>(false);
  const [isTransactionModal, setIsTransactionModal] = useState<boolean>(false);
  const {
    isShowing: transactionModalShowing,
    show: showTransactionModal,
    close: closeTransactionModal
  } = useModal();

  const onBackClick = () => {
    navigate(PATH.ACCOUNTS);
  };

  const onCloseAccountClick = () => {
    setIsCloseAccount(true);
  };

  const onCancelCloseModal = () => {
    setIsCloseAccount(false);
  };

  const onConfirmCloseModal = () => {
    setIsCloseAccount(false);
    setIsSuccessModal(true);
  };

  const onCancelSuccessModal = () => {
    setIsSuccessModal(false);
    navigate(PATH.ACCOUNTS);
  };
  const onCancelTransactionModal = () => {
    setIsTransactionModal(false);
  };
  const onTransactionModal = (id: string) => {
    setTransactionId(id);
    setIsTransactionModal(true);
  };

  useEffect(() => {
    if (expired) {
      navigate(PATH.LOGIN_ALL);
    }
  }, [expired]);

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  return (
    <AccountDetailViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='Change Password'
          backPath={PATH.ACCOUNTS}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={<RemoveCircleOutlineIcon onClick={() => setIsCloseAccount(true)} />}
        />
        <Box sx={{ height: '5rem' }}> </Box>
      </Box>

      <Box className='main-container'>
        <Box className='back-button' onClick={onBackClick}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back to Overview
        </Box>

        <Box className='account-info-container'>
          <AccountInfoView
            onCloseAccount={onCloseAccountClick}
            id={id ? id : '0'}
            currencies={currencies}
            account={account}
          />
        </Box>

        <Box className="show-transactions-button">
          <Box className="each-field">
            <Box className='field-name'>
              Transactions
            </Box>
            <Box className="field-value">
              <ArrowForwardIosIcon />
            </Box>
          </Box>
        </Box>

        <Box className='transaction-container'>
          <AccountTransactionView
            id={id ? id : '0'}
            onTransactionModal={onTransactionModal}
            currencies={currencies}
            accountTrans={accountTrans}
          />
        </Box>
      </Box>

      {isCloseAccount && (
        <CloseAccountModal
          onCancel={onCancelCloseModal}
          onConfirm={onConfirmCloseModal}
          id={id ? id : '0'}
          deleteAccount={deleteAccount}
        />
      )}

      {isSuccessModal && (
        <SuccessModal
          onCancel={onCancelSuccessModal}
          description='EUR Account has been closed'
        />
      )}

      {isTransactionModal && (
        <TransactionModal
          onCancel={onCancelTransactionModal}
          transaction={transactinoById}
          currencies={currencies}
        />
      )}

      {/* {transactionDetailModalShowing && (
        <NewModalComponent.Root
          isClosable={false}
          alert='success'
          onClose={transactionDetailModalClose}
        >
          <TransactionModal
            onCancel={transactionDetailModalClose}
            transaction={transactinoById}
            currencies={currencies}
          />
        </NewModalComponent.Root>
      )} */}
    </AccountDetailViewStyle>
  );
};
