import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import { NewBeneficiaryModal } from 'components/common';

// import { BeneficiaryModal } from './BeneficiaryModal';
import { BeneficiaryTableView } from './BeneficiaryTable';
import { DeleteBeneficiaryConfirmModal } from './DeleteBeneficiaryConfirm';
import { EditBeneficiaryModal } from './EditBeneficiaryModal';
import { ServiceBeneficiaryViewStyle } from './index.style';

import {
  BeneficiaryComponent,
  MobileHeaderComponent,
  SearchComponent,
} from 'components/common';
import { PATH } from 'consts';
import { IBeneficiary, ICurrency, IDetailBeneficiary } from 'new_models';
import { AppActions } from 'redux/store';

type ServiceBeneficiaryViewProps = {
  beneficiaries: IBeneficiary[];
  currencies: ICurrency[];
  createBeneficiary: (newBeneficiary: IDetailBeneficiary) => void;
  deleteBeneficiary: (id: number) => void;
};

export const ServiceBeneficiaryView: React.FC<ServiceBeneficiaryViewProps> = ({
  beneficiaries,
  currencies,
  createBeneficiary,
  deleteBeneficiary,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [isDeleteConfirm, setIsDeleteConfirm] = useState<boolean>(false);
  const [currentBeneficiary, setCurrentBeneficiary] = useState<number>(0);

  const onMobileHeaderPrevClick = (path: string) => {
    navigate(path);
  };

  const onAddClick = () => {
    setIsCreateModal(true);
  };

  const onBeneficiaryClicked = (index: number) => {
    setCurrentBeneficiary(index);
    setIsEditModal(true);
  };

  const onCreate = (newBeneficiaries: IDetailBeneficiary) => {
    createBeneficiary(newBeneficiaries);
    setIsCreateModal(false);
  };

  const onCreateCancel = () => {
    setIsCreateModal(false);
  };

  const onEditClose = () => {
    setIsEditModal(false);
  };

  const onDeleteBeneficiary = (id: number) => {
    deleteBeneficiary(id);
    setIsEditModal(false);
    setIsDeleteConfirm(true);
  };

  const onCancelDelete = () => {
    setIsDeleteConfirm(false);
    setIsEditModal(true);
  };

  const onConfirmDelete = () => {
    setIsDeleteConfirm(false);
  };

  const onCancelNewBeneficiaryModal = () => {
    setIsCreateModal(false);
  };

  const handleUpdateBeneficiary = (
    id: number,
    name: string,
    currency: string,
    sortCode: string,
    accountNumber: string
  ) => {
    dispatch(
      AppActions.beneficiary.updateBeneficiary({
        id: id,
        name: name,
        currency: currency,
        sortCode: sortCode,
        accountNumber: accountNumber,
      })
    );
  };

  return (
    <ServiceBeneficiaryViewStyle>
      <Box className='mobile-header-container'>
        <MobileHeaderComponent
          title='My Beneficiaries'
          backPath={PATH.SERVICES}
          prevAction={onMobileHeaderPrevClick}
          actionIcon={
            <AddCircleOutlineIcon onClick={() => setIsCreateModal(true)} />
          }
          extraActionComponent={<SearchComponent />}
        />
      </Box>

      <Box className='mobile-main-container'>
        <BeneficiaryComponent
          avatar='/asset/Avatars/sample2.jpg'
          beneficiaryId={1}
          name='Eoin Cronan'
          accountNumber='1234 5678 8900'
        />
        <BeneficiaryComponent
          avatar='/asset/Avatars/sample2.jpg'
          beneficiaryId={2}
          name='Sumsun He'
          accountNumber='1234 5678 8900'
        />
        <BeneficiaryComponent
          avatar='/asset/Avatars/sample2.jpg'
          beneficiaryId={3}
          name='Yina Mou'
          accountNumber='1234 5678 8900'
        />
        <BeneficiaryComponent
          avatar='/asset/Avatars/sample2.jpg'
          beneficiaryId={4}
          name='Yina Mou'
          accountNumber='1234 5678 8900'
        />
        <BeneficiaryComponent
          avatar='/asset/Avatars/sample2.jpg'
          beneficiaryId={5}
          name='Yina Mou'
          accountNumber='1234 5678 8900'
        />
      </Box>

      <Box className='main-container'>
        <Link className='back-button' to={PATH.SERVICES_ALL}>
          <ArrowBackIosIcon sx={{ fontSize: '1rem' }} />
          Back
        </Link>

        <Box className='title-container'>
          <Box className='title-typo'> My Beneficiary </Box>
          <Box className='action-bar-container'>
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
            <Button
              onClick={onAddClick}
              className='add-button'
              variant='outlined'
            >
              <AddIcon sx={{ fontSize: '1.2rem' }} />
              Add Beneficiary
            </Button>
          </Box>
        </Box>

        <Box className='beneficiary-table'>
          <BeneficiaryTableView
            data={beneficiaries}
            beneficiaryClick={onBeneficiaryClicked}
            currencies={currencies}
          />
        </Box>
      </Box>

      {isCreateModal && (
        <NewBeneficiaryModal
          onCancel={onCancelNewBeneficiaryModal}
          onSubmit={onCreate}
          currencies={currencies}
        />
      )}

      {/* {isEditModal && (
        <EditBeneficiaryModal
          title={beneficiaries[currentBeneficiary].name}
          id={beneficiaries[currentBeneficiary].id}
          name={beneficiaries[currentBeneficiary].name}
          currency={beneficiaries[currentBeneficiary].currency}
          sortCode={beneficiaries[currentBeneficiary].sortCode}
          accountNumber={beneficiaries[currentBeneficiary].accountNumber}
          closeModal={onEditClose}
          deleteBeneficiary={onDeleteBeneficiary}
          updateBeneficiary={handleUpdateBeneficiary}
        />
      )} */}

      {isDeleteConfirm && (
        <DeleteBeneficiaryConfirmModal
          cancelDelete={onCancelDelete}
          confirmDelete={onConfirmDelete}
        />
      )}
    </ServiceBeneficiaryViewStyle>
  );
};
