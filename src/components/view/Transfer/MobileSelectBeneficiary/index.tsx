import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { MobileHeaderComponent, SearchComponent, MobileAccountTableComponent, MobileBeneficiaryTableComponent, NewBeneficiaryModal } from 'components/common';
import { MobileSelectBeneficiaryViewStyle } from "./index.style";
import { IBeneficiary, IAccount, ICurrency, IDetailBeneficiary } from 'new_models';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance' | 'imgLink'
>;

type MobileSelectBeneficiaryViewProps = {
  closeSelectBeneficiary: (status: boolean) => void;
  beneficiaries: IBeneficiary[];
  accounts: ISubAccountType[];
  selectAccount: (value: {
    toAccountId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => void;
  selectBeneficiary: (value: {
    toBeneficiaryId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => void;
  currencies: ICurrency[];
  createBeneficiary: (newBeneficiary: IDetailBeneficiary) => void;
};

export const MobileSelectBeneficiaryView: React.FC<MobileSelectBeneficiaryViewProps> = (props) => {
  const { closeSelectBeneficiary, accounts, beneficiaries, selectAccount, selectBeneficiary, currencies, createBeneficiary } = props;

  const [isOwned, setIsOwned] = useState<boolean>(false);
  const [currentAccountIndex, setCurrentAccountIndex] = useState<ISubAccountType>();
  const [currentBeneficiaryIndex, setCurrentBeneficiaryIndex] = useState<IBeneficiary>();
  const [isNewBeneficiary, setIsNewBeneficiary] = useState<boolean>(false);

  const handleCloseModal = () => {
    if (isOwned && currentAccountIndex) {
      selectAccount({
        toAccountId: currentAccountIndex.id,
        toCurrency: currentAccountIndex.currencyCode,
        toName: currentAccountIndex.name,
        isOwnedAccount: isOwned
      });
    } else if (!isOwned && currentBeneficiaryIndex) {
      selectBeneficiary({
        toBeneficiaryId: currentBeneficiaryIndex.id,
        toCurrency: currentBeneficiaryIndex.currencyCode,
        toName: currentBeneficiaryIndex.name ?? "",
        isOwnedAccount: isOwned
      })
    }
    closeSelectBeneficiary(false);
  }

  const onCancelNewBeneficiaryModal = () => {
    setIsNewBeneficiary(false);
  };

  const onCreateNewBeneficiaryModal = (newBeneficiary: IDetailBeneficiary) => {
    createBeneficiary(newBeneficiary);
    setIsNewBeneficiary(false);
  }

  const onNewBeneficiaryModal = () => {
    setIsNewBeneficiary(true);
  };

  return <MobileSelectBeneficiaryViewStyle>
    <Box className='mobile-header-container'>
      <MobileHeaderComponent
        title='Select Beneficiary'
        backPath="ASD"
        prevAction={handleCloseModal}
        extraActionComponent={
          <Box>
            <SearchComponent />
            <Box className="display-flex row-gap-1rem" onClick={onNewBeneficiaryModal}>
              <AddIcon className="border border-color-gray circle-border color-blue" />
              <Box className="col-gap-1rem"> Add New Beneficiary </Box>
            </Box>
            <Box className="switch row-gap-1rem">
              <Button className="switch-button color-black" onClick={() => setIsOwned(false)}> Beneficiary </Button>
              <Button className="switch-button color-black" onClick={() => setIsOwned(true)}> Account </Button>
            </Box>
          </Box>
        }
      />
      <Box sx={{ height: '16rem' }}> </Box>
      {
        isOwned
          ? <MobileAccountTableComponent
            accounts={accounts}
            seleted={currentAccountIndex ?? {} as ISubAccountType}
            setCurrentAccount={setCurrentAccountIndex}
          />
          : <MobileBeneficiaryTableComponent
            beneficiaries={beneficiaries}
            seleted={currentBeneficiaryIndex ?? {} as IBeneficiary}
            setCurrentBeneficiary={setCurrentBeneficiaryIndex}
          />
      }
    </Box>
    {
      isNewBeneficiary && <NewBeneficiaryModal
        onCancel={onCancelNewBeneficiaryModal}
        onSubmit={onCreateNewBeneficiaryModal}
        currencies={currencies}
      />
    }
  </MobileSelectBeneficiaryViewStyle>
}