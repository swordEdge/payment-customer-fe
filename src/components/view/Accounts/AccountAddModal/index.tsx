import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Divider, Grid, Typography } from '@mui/material';
import { ICurrency, IAccount } from 'new_models';
import { AccountAddModalStyle } from './index.style';
import { InputComponent, NewDropDownComponent, DropDownComponent } from 'components/common';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';

const colorItems = [
  {
    label: 'Cyan',
    class: 'cCyan',
  },
  {
    label: 'Pink',
    class: 'cPink',
  },
  {
    label: 'Yellow',
    class: 'cYellow',
  },
  {
    label: 'Purple',
    class: 'cPurple',
  },
  {
    label: 'Blue',
    class: 'cBlue',
  },
  {
    label: 'Green',
    class: 'cGreen',
  },
  {
    label: 'Gray',
    class: 'cGrey',
  },
  {
    label: 'Red',
    class: 'cRed',
  },
];

type ICreateAccount = Partial<
  Pick<IAccount, "name" | "currencyId" | "color">
>;

type AccountAddModalProps = {
  currencies: ICurrency[];
  onCancel: () => void;
  onConfirm: (formValues: ICreateAccount) => void;
};

const defaultValues: ICreateAccount = {
  name: 'My Account',
  currencyId: 108,
  color: "cCyan"
};

const schema = Yup.object().shape({
  name: Yup.string().required(),
  currencyId: Yup.number().required(),
  color: Yup.string()
});

export const AccountAddModal: React.FC<AccountAddModalProps> = ({
  currencies,
  onCancel,
  onConfirm,
}) => {
  const { register, handleSubmit, formState: { errors, isValid }, reset, getValues, watch } = useForm<ICreateAccount>({
    resolver: yupResolver(schema),
    defaultValues: defaultValues
  });
  const [cardColor, setCardColor] = useState<string>("cCyan");
  const [currencyId, setCurrencyId] = useState<number>(108);

  const onCancelClick = () => {
    onCancel();
  };

  const onSubmitHandler = (data: ICreateAccount) => {
    data.color = cardColor;
    data.currencyId = currencyId;
    onConfirm(data);
  }

  const onChangeValue = (value: string) => {
    const currentId = currencies.filter((item) => item.code === value)[0].id;
    setCurrencyId(currentId);
  }

  return (
    <AccountAddModalStyle>
      <Box className='modal-container'>
        <Box className='modal-header'>
          Create Account
          <Box className='close-button'>

            <CloseIcon onClick={onCancelClick} />
          </Box>
        </Box>

        <Divider sx={{ marginTop: '1rem' }} />

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <Box className='modal-content'>
            <Box className='content-item'>
              <InputComponent
                required={true}
                label='Account Name'
                type='text'
                name='name'
                register={register}
              />
            </Box>
            <Box className='content-item'>
              <DropDownComponent
                required={false}
                label='Currency'
                values={currencies.map((currency) => currency.code)}
                onChangeValue={onChangeValue}
              />
              {/* <NewDropDownComponent.Root
              // register={register}
              > */}
              {/* {currencies.map((currency: ICurrency, index) => (
                <NewDropDownComponent.Item>
                  <Box>{currency.code}</Box>
                </NewDropDownComponent.Item>
              ))}
            </NewDropDownComponent.Root> */}
            </Box>
            <Box className='content-item'>
              <Typography className='color-box-title'>
                Account Color (Optional)
              </Typography>
              <Grid container spacing={2} className='color-box'>
                {colorItems.map((item, index) => (
                  <Grid item lg={3} md={4} xs={6} key={index}>
                    <Box className={`color-item ${item.class} ${item.class === cardColor ? "border-active" : ""}`} onClick={() => setCardColor(item.class)}>{item.label}</Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Box className='modal-footer'>
            <Button
              onClick={onCancelClick}
              className='cancel-button'
              variant='outlined'
            >
              Cancel
            </Button>
            <Button
              type="submit"
              // onClick={onConfirmClick}
              className='confirm-button'
              variant='outlined'
            >
              Confirm
            </Button>
          </Box>
        </form>
      </Box >
    </AccountAddModalStyle >
  );
};
