import React from 'react';
import { Box, TextField } from '@mui/material';
import { MobileHeaderComponent, NewButtonComponent } from 'components/common';
import { MobileTransactionOverviewViewStyle } from './index.style';
import { ITransfer } from 'new_models';

type MobileTransactionOverviewViewProps = {
  transfer: ITransfer;
  sendTransfer: () => void;
  setStep: (step: number) => void;
};

export const MobileTransactionOverviewView: React.FC<MobileTransactionOverviewViewProps> = (props) => {
  const { transfer, sendTransfer, setStep } = props;

  return <MobileTransactionOverviewViewStyle>
    <Box className='mobile-header-container'>
      <MobileHeaderComponent
        title='Transaction Overview'
        backPath="ASD"
        prevAction={() => setStep(0)}
      />
      <Box sx={{ height: '6rem' }}> </Box>
    </Box>

    <Box className="amount-container">
      <Box className="amount-input">
        <Box className="font-size-big font-weight-semibold font-family-main"> Transfer Amount </Box>
        <Box sx={{ height: '2rem' }}></Box>
        <TextField
          id="standard-number"
          value={`${transfer.currency} ${transfer.amount}`}
          className="input-container"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            className: "input"
          }}
        />
      </Box>
      <Box className="state">
        <Box className="color-gray"> Transfer Fee </Box>
        <Box> 2% </Box>
      </Box>
      <Box className="state">
        <Box className="color-gray"> Conversion Rate </Box>
        <Box> {transfer.rate?.toFixed(5)} </Box>
      </Box>
    </Box>

    <Box sx={{ height: '1rem' }}></Box>

    <Box className="bg-color-white">
      <Box className="state">
        <Box className="color-gray"> {
          transfer.isOwnedAccount
            ? "Own Account"
            : "Beneficiary"
        } </Box>
        <Box> {transfer.toName}</Box>
      </Box>
      <Box className="state">
        <Box className="color-gray"> Transfer Method </Box>
        <Box> Normal Transfer </Box>
      </Box>
      <Box className="state">
        <Box className="color-gray"> Transfer Date </Box>
        <Box> {new Date().toDateString()} </Box>
      </Box>
      <Box className="state">
        <Box className="color-gray"> Memo </Box>
        <Box> </Box>
      </Box>
    </Box>
    <Box className="confirm-button">
      <NewButtonComponent
        className='submit-button bg-primary font-family-main'
        type="submit"
        onClick={sendTransfer}
      >
        Confirm
      </NewButtonComponent>
    </Box>
  </MobileTransactionOverviewViewStyle>
}