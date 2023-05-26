import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { useModal } from 'hooks';
import { ICurrency, IDetailBeneficiary } from "new_models";
import { NewBeneficiaryModalStyle } from './index.style';
import { NewModalComponent, NewInputComponent, NewButtonComponent, DropDownComponent } from "components/common";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

type NewBeneficiaryModalProps = {
  onCancel: () => void;
  onSubmit: (newBeneficiary: IDetailBeneficiary) => void;
  currencies: ICurrency[];
};

type INewDropDownItem = {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  bankName: Yup.string().required(),
  bankAddress: Yup.string().required(),
  currencyId: Yup.number(),
  iban: Yup.string().required(),
  sortCode: Yup.string().required(),
  accountNumber: Yup.string().required(),
  bicSwift: Yup.string().required(),
  wireRoutingNumber: Yup.string().required(),
  achRoutingNumber: Yup.string().required(),
});

export const NewBeneficiaryModal: React.FC<NewBeneficiaryModalProps> = ({
  onCancel,
  onSubmit,
  currencies,
}) => {
  const [items, setItems] = useState<INewDropDownItem[]>([]);
  const [currencyId, setCurrencyId] = useState<number>(108);
  const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm<IDetailBeneficiary>({
    resolver: yupResolver(schema),
  });
  const {
    isShowing: NewBeneficiaryModalShowing,
    close: NewBeneficiaryModalClose,
    show: NewBeneficiaryModalShow,
  } = useModal();

  const onCancelClick = () => {
    onCancel();
  };

  const onSubmitHandler = (data: IDetailBeneficiary) => {
    data.currencyId = currencyId;
    onSubmit(data);
  }

  const onChangeValue = (value: string) => {
    const currentId = currencies.filter((item) => item.code === value)[0].id;
    setCurrencyId(currentId);
  }

  useEffect(() => {
    let middle: INewDropDownItem[] = [];
    currencies.map((item) => {
      const newItem: INewDropDownItem = {
        value: item.id,
        label: item.code,
      }
      middle.push(newItem);
    });
    setItems(middle);
  }, [currencies]);

  return (
    <NewModalComponent.Root
      isClosable={false}
      onClose={NewBeneficiaryModalClose}
    >
      <NewBeneficiaryModalStyle>
        <Box className='modal-container'>
          <NewModalComponent.Header>
            <Box className='modal-header'>
              Add New Beneficiary
            </Box>
          </NewModalComponent.Header>

          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <NewModalComponent.Content>
              <Box className='modal-content'>
                <Grid container spacing={2} sx={{ width: '100%' }}>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='name'
                      label='Name'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='email'
                      label='Email'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='bankName'
                      label='Bank Name'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='bankAddress'
                      label='Bank Address'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <DropDownComponent
                      required={false}
                      label='Currency'
                      values={currencies.map((currency) => currency.code)}
                      onChangeValue={onChangeValue}
                    />
                    {/* <NewInputComponent
                      name='currencyId'
                      label='Currency'
                      className='text-input'
                      register={register}
                    /> */}
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='iban'
                      label='IBAN'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={6} xs={6}>
                    <NewInputComponent
                      name='sortCode'
                      label='Sort Code'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={12} xs={12}>
                    <NewInputComponent
                      name='accountNumber'
                      label='Account Number'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={4} xs={4}>
                    <NewInputComponent
                      name='bicSwift'
                      label='BIC Swift'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={4} xs={4}>
                    <NewInputComponent
                      name='wireRoutingNumber'
                      label='Wire Routing Number'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                  <Grid item lg={4} xs={4}>
                    <NewInputComponent
                      name='achRoutingNumber'
                      label='ACH Routing Number'
                      className='text-input'
                      register={register}
                      border={true}
                    />
                  </Grid>
                </Grid>
              </Box>
            </NewModalComponent.Content>

            <Box sx={{ height: '2rem ' }}></Box>
            <NewModalComponent.Footer>
              <Box className='model-footer'>
                <NewButtonComponent
                  className='button fontweight-bold border-color-grey button-hover-grey'
                  onClick={onCancelClick}
                >
                  Cancel
                </NewButtonComponent>
                <NewButtonComponent
                  type='submit'
                  className='button bg-accent-blue fontweight-bold color-white'
                >
                  Create Beneficiary
                </NewButtonComponent>
              </Box>
            </NewModalComponent.Footer>
          </form>
        </Box>
      </NewBeneficiaryModalStyle>
    </NewModalComponent.Root>
  );
};
