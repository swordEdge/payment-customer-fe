import React from 'react';
import { Box, Typography, BoxProps } from '@mui/material';
import { MobileBeneficiaryTableComponentStyle } from './index.style';
import { IBeneficiary } from 'new_models';
import { CheckedSvg } from 'assets/icons';

type MobileBeneficiaryTableComponentProps = BoxProps & {
  beneficiaries: IBeneficiary[],
  seleted: IBeneficiary,
  setCurrentBeneficiary: (current: IBeneficiary) => void;
};

export const MobileBeneficiaryTableComponent: React.FC<MobileBeneficiaryTableComponentProps> = (props) => {
  const { beneficiaries, seleted, setCurrentBeneficiary } = props;

  return <MobileBeneficiaryTableComponentStyle>
    {
      beneficiaries.map((beneficiary, index) => (
        <Box className="each-field bg-color-white" key={index} onClick={() => setCurrentBeneficiary(beneficiary)}>
          <Box className="field-info">
            <img className="avatar" src={beneficiary.imgLink ?? '/asset/Avatars/sample2.jpg'} alt="" />
            <Box>
              <Typography> {beneficiary.name} </Typography>
              <Typography className="account-number"> {beneficiary.accountNumber} </Typography>
            </Box>
          </Box>
          <Box className="field-value">
            {
              beneficiary.id === seleted.id
                ? <img src={CheckedSvg} />
                : <></>
            }
          </Box>
        </Box>
      ))
    }
  </MobileBeneficiaryTableComponentStyle >
}