import React, { useEffect, useState } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useForm } from 'react-hook-form';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Box, Button, Grid } from '@mui/material';
import { EditBeneficiaryModalStyle } from './index.style';
import { DropDownComponent, InputComponent } from 'components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

type EditBeneficiaryModalProps = {
  title: string;
  id: number;
  name: string;
  currency: string;
  sortCode: string;
  accountNumber: string;
  closeModal: () => void;
  deleteBeneficiary: (id: number) => void;
  updateBeneficiary: (
    id: number,
    name: string,
    currency: string,
    sortCode: string,
    accountNumber: string
  ) => void;
};

type beneficiary = {
  name: string;
  currency: string;
  sortCode: string;
  accountNumber: string;
};

const defaultValue: beneficiary = {
  name: '',
  currency: '',
  sortCode: '',
  accountNumber: '',
};

const currencies = ['EUR', 'USD'];

type IBeneficiaryForm = {
  name: string;
  currency: string;
  sortCode: string;
  accountNumber: string;
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  currency: Yup.string().required(),
  sortCode: Yup.string().required(),
  accountNumber: Yup.string().required()
});

export const EditBeneficiaryModal: React.FC<EditBeneficiaryModalProps> = ({
  title,
  id,
  name,
  currency,
  sortCode,
  accountNumber,
  closeModal,
  deleteBeneficiary,
  updateBeneficiary,
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  // const [formValues, setFormValues] = useState<beneficiary>(defaultValue);

  const { register, handleSubmit, formState: { errors, isValid }, reset, getValues, watch } = useForm<IBeneficiaryForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      currency: "",
      sortCode: "",
      accountNumber: ""
    }
  });

  // useEffect(() => {
  //   setFormValues({
  //     name,
  //     currency,
  //     sortCode,
  //     accountNumber,
  //   });
  // }, []);

  const onCancelUpdateClicked = () => {
    setIsEdit(false);
  };

  // const onUpdateClicked = () => {
  //   updateBeneficiary(
  //     id,
  //     formValues.name,
  //     formValues.currency,
  //     formValues.sortCode,
  //     formValues.accountNumber
  //   );
  //   setIsEdit(false);
  // };

  const onDeleteClicked = () => {
    deleteBeneficiary(id);
  };

  // const handleInputChange = (event: any) => {
  //   const { name, value } = event.target;

  //   setFormValues({
  //     ...formValues,
  //     [name]: value,
  //   });
  // };

  // const onChangeValue = (value: string) => {
  //   setFormValues({
  //     ...formValues,
  //     currency: value,
  //   });
  // };

  const onSubmitHandler = (data: IBeneficiaryForm) => {
    setIsEdit(false);
  }

  return (
    <EditBeneficiaryModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          {!isEdit ? title : `Update beneficiary (${title})`}
          {!isEdit && (
            <Box
              className='edit-button-container'
              onClick={() => setIsEdit(true)}
            >
              <SaveAsIcon />
              Edit
            </Box>
          )}
        </Box>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box className='modal-content'>
            <Box>
              <InputComponent
                required={false}
                label='Name'
                value={watch().name}
                type='text'
                name='name'
                register={register}
              // onChange={handleInputChange}
              />
            </Box>
            <Box sx={{ marginTop: '2rem' }}>
              {/* <DropDownComponent
                required={false}
                label='Currency'
                value={watch().currency}
                values={currencies} */}
              {/* // register={register}
              // onChangeValue={onChangeValue}
              /> */}
            </Box>
            <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
              <Grid item lg={6}>
                <InputComponent
                  required={false}
                  label='Sort code'
                  value={watch().sortCode}
                  type='text'
                  name='sortCode'
                  register={register}
                // onChange={handleInputChange}
                />
              </Grid>
              <Grid item lg={6}>
                <InputComponent
                  required={false}
                  label='Account number'
                  value={watch().accountNumber}
                  type='text'
                  name='accountNumber'
                  register={register}
                // onChange={handleInputChange}
                />
              </Grid>
            </Grid>
          </Box>

          <Box className='modal-footer'>
            {!isEdit && (
              <>
                <Box> </Box>
                <Button
                  onClick={() => closeModal()}
                  className='close-button'
                  variant='outlined'
                >
                  Close
                </Button>
              </>
            )}
            {isEdit && (
              <>
                <Button
                  onClick={onDeleteClicked}
                  className='delete-button'
                  variant='outlined'
                >
                  <DeleteForeverIcon />
                </Button>
                <Box>
                  <Button
                    onClick={onCancelUpdateClicked}
                    className='cancel-button'
                    variant='outlined'
                  >
                    Cancel
                  </Button>
                  <Button
                    // onClick={onUpdateClicked}
                    type="submit"
                    className='close-button'
                    variant='outlined'
                  >
                    Update beneficiary
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </form>
      </Box>
    </EditBeneficiaryModalStyle>
  );
};
