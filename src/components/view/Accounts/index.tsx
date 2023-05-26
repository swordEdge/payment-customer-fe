import React, { useState, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useModal } from 'hooks';
import { IAccount, ICurrency, ITransaction, IUser, IAccountOverview, IBusinessDetail } from 'new_models';
import { AccountAddModal } from './AccountAddModal';
import { AccountOverviewView } from './AccountOverview';
import { AwatingActionView } from './AwatingAction';
import { CurrencyBalanceOverviewView } from './CurrencyBalanceOverview';
import { KYBStepView } from './KYBStep';
import { RecentTransactionView } from './RecentTransaction';
import { AccountsViewStyle } from './index.style';
import { AccountHeaderComponent, NewModalComponent } from 'components/common';
import { PlatformContext } from 'contexts';

type ICreateAccount = Partial<
  Pick<IAccount, "name" | "currencyId" | "color">
>;

type AccountsViewProps = {
  user: IUser,
  business: IBusinessDetail,
  currencies: ICurrency[];
  accounts: IAccount[];
  overviewAccounts: IAccountOverview[];
  recentTrans: Pick<
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
  createAccount: (newAccount: ICreateAccount) => void;
};

export const AccountsView: React.FC<AccountsViewProps> = ({
  user,
  business,
  currencies,
  accounts,
  overviewAccounts,
  recentTrans,
  createAccount
}) => {
  const { platformType } = useContext(PlatformContext);

  const [isNewAccount, setIsNewAccount] = useState<boolean>(false);
  const {
    isShowing: accountCreateSuccessModalShowing,
    close: accountCreateSuccessModalClose,
    show: accountCreateSuccessModalShow,
  } = useModal();

  const isProfileCompleted = useMemo(() => {
    if (user) {
      if (user.email && user.phoneNumber) {
        return true;
      }
      return false;
    }
  }, [user]);

  const leftDays = useMemo(() => {
    if (user) {
      const difference = new Date().getDate() - (new Date(user.createdAt ?? "").getDate());
      return 30 - difference;
    }
    return 30;
  }, [user]);

  const onNewAccount = () => {
    setIsNewAccount(true);
  };

  const onNewAccountCancel = () => {
    setIsNewAccount(false);
  };

  const onNewAccountConfirm = (newAccount: ICreateAccount) => {
    createAccount(newAccount);
    setIsNewAccount(false);
  };

  return (
    <AccountsViewStyle>
      <Box className='overview-container'>
        <Box className='mobile-account-header'>
          <AccountHeaderComponent notificationAmount={2} />
          <Box sx={{ height: '3rem' }}> </Box>
        </Box>
        {
          !isProfileCompleted && <AwatingActionView leftDays={leftDays} />
        }
        {
          platformType === "Business" && <KYBStepView business={business} />
        }
        <CurrencyBalanceOverviewView
          overviewAccounts={overviewAccounts}
        />
        <AccountOverviewView
          currencies={currencies}
          accounts={accounts}
          onNewAccount={onNewAccount}
        />
        <RecentTransactionView recentTrans={recentTrans} />
      </Box>

      {isNewAccount && (
        <AccountAddModal
          currencies={currencies}
          onCancel={onNewAccountCancel}
          onConfirm={onNewAccountConfirm}
        />
      )}

      {/* <button onClick={accountCreateSuccessModalShow}>
        Show Success Modal
      </button> */}
      {accountCreateSuccessModalShowing && (
        <NewModalComponent.Root
          isClosable={true}
          alert='success'
          onClose={accountCreateSuccessModalClose}
        >
          <NewModalComponent.Header>Success!</NewModalComponent.Header>
          <NewModalComponent.Content>
            Your new GBP Account has been opened with the account number of
            60412839076!
          </NewModalComponent.Content>
          <NewModalComponent.Footer></NewModalComponent.Footer>
        </NewModalComponent.Root>
      )}
      <Box sx={{ height: '3rem' }}></Box>
    </AccountsViewStyle>
  );
};
