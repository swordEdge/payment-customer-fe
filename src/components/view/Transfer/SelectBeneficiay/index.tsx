import React, { useMemo, useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Box, IconButton, InputAdornment, OutlinedInput, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import { NewBeneficiaryModal } from 'components/common';
import { SelectAccountTableComponent } from '../AccountTable';
import { BeneficiaryTableComponent } from '../BeneficiaryTable';
import { SelectBeneficiaryStyle } from './index.style';

import { ToggleComponent } from 'components/common';
import { IAccount, IBeneficiary, IToggleButton, ITransfer, ICurrency, IDetailBeneficiary } from 'new_models';

type ISubAccountType = Pick<
  IAccount,
  'id' | 'name' | 'accountNumber' | 'currencyCode' | 'totalBalance'
>;

const buttons: IToggleButton[] = [
  {
    title: 'Beneficiary',
    path: '0',
  },
  {
    title: 'Own Accounts',
    path: '1',
  },
];

type SelectBeneficiaryProps = {
  transfer: ITransfer;
  beneficiaries: IBeneficiary[];
  accounts: ISubAccountType[];
  currencies: ICurrency[];
  createBeneficiary: (newBeneficiary: IDetailBeneficiary) => void;
  onSelectedToAccount: (value: {
    toAccountId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => void;
  onSelectedToBeneficiary: (value: {
    toBeneficiaryId: number;
    toCurrency: string;
    toName: string;
    isOwnedAccount: boolean;
  }) => void;
};

export const SelectBeneficiaryComponent: React.FC<SelectBeneficiaryProps> = ({
  transfer,
  beneficiaries,
  accounts,
  currencies,
  onSelectedToAccount,
  onSelectedToBeneficiary,
  createBeneficiary
}) => {
  const [currentButton, setCurrentButton] = useState<number>(0);
  const [isNewBeneficiaryModal, setIsNewBeneficiaryModal] = useState<boolean>(false);

  const toAccounts = useMemo(() => {
    return accounts.filter(
      (account: ISubAccountType) => account.id !== transfer.fromAccountId
    );
  }, [accounts]);

  const onSelectedAccount = (item: ISubAccountType) => {
    onSelectedToAccount({
      toAccountId: item.id,
      toCurrency: item.currencyCode,
      toName: item.name,
      isOwnedAccount: true,
    });
  };

  const onSelectedBeneficiary = (item: IBeneficiary) => {
    onSelectedToBeneficiary({
      toBeneficiaryId: item.id,
      toCurrency: item.currencyCode,
      toName: item.displayName,
      isOwnedAccount: false,
    });
  };

  const onCancelNewBeneficiaryModal = () => {
    setIsNewBeneficiaryModal(false);
  };

  const onCreateNewBeneficiaryModal = (newBeneficiary: IDetailBeneficiary) => {
    createBeneficiary(newBeneficiary);
    setIsNewBeneficiaryModal(false);
  }

  const onNewBeneficiaryModal = () => {
    setIsNewBeneficiaryModal(true);
  };

  return (
    <SelectBeneficiaryStyle>
      <Box className='select-beneficiary-title'>
        <Box>
          <ToggleComponent
            buttons={buttons}
            currentButtons={currentButton}
            setCurrentButtons={setCurrentButton}
            width='10rem'
          />
        </Box>
        <Box>
          <Button
            onClick={() => onNewBeneficiaryModal()}
            className='add-button'
            variant='outlined'
            style={{
              textDecoration: "none",
              textTransform: "none",
              borderRadius: "20px",
              color: "black",
              borderColor: "black",
              marginRight: "20px"
            }}
          >
            <AddIcon sx={{ fontSize: '1.2rem' }} />
            New Beneficiary
          </Button>

          <OutlinedInput
            className='search-container'
            type='text'
            autoComplete='off'
            placeholder='Search'
            startAdornment={
              <InputAdornment position='start'>
                <IconButton
                  aria-label='toggle password visibility'
                  edge='start'
                >
                  <SearchOutlinedIcon className='search-icon' />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Box className='select-beneficiary-body'>
        {currentButton === 0 ? (
          <BeneficiaryTableComponent
            data={beneficiaries}
            selectedId={!transfer.isOwnedAccount ? transfer.toBeneficiaryId : 0}
            onSelected={onSelectedBeneficiary}
          />
        ) : (
          <SelectAccountTableComponent
            data={toAccounts}
            selectedId={transfer.isOwnedAccount ? transfer.toAccountId : 0}
            onSelected={onSelectedAccount}
          />
        )}
      </Box>

      {isNewBeneficiaryModal && (
        <NewBeneficiaryModal
          onCancel={onCancelNewBeneficiaryModal}
          onSubmit={onCreateNewBeneficiaryModal}
          currencies={currencies}
        />
      )}
    </SelectBeneficiaryStyle>
  );
};
