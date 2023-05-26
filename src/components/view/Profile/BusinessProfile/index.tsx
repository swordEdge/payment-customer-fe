import React, { useState } from 'react';
import { Box, BoxProps } from '@mui/material';
import { BusinessProfileViewStyle } from './index.style';
import { PendingSvg, VerifiedSvg } from 'assets/icons';
import { BusinessProfileStepComponent } from 'components';

import { BusinessDetailView } from './BusinessDetail';
import { BusinessAddressView } from './BusinessAddress';
import { DirectorShareholdersView } from './DirectorShareholders';
import { UploadDocumentsView } from './UploadDocuments';
import { IBusinessDetail, IBusinessMember } from 'new_models';
import { AppActionTypes } from 'new_redux/store';

type BusinessProfileViewProps = BoxProps & {
  business: IBusinessDetail;
  members: IBusinessMember[];
  updateBusinessDetail: (business: AppActionTypes.Business.IUpdateBusinessDetail) => void;
  updateBusinessAddress: (businessAddress: AppActionTypes.Business.IUpdateBusinessAddress) => void;
  deleteBusinessMember: (id: number) => void;
  uploadKYBDocuments: (files: AppActionTypes.Business.IUploadKYBDocuments) => void;
};

export const BusinessProfileView: React.FC<BusinessProfileViewProps> = (props) => {
  const { business, members, updateBusinessDetail, updateBusinessAddress, deleteBusinessMember, uploadKYBDocuments } = props;

  const [step, setStep] = useState<number>(0);
  return <BusinessProfileViewStyle>
    <Box className='header margin-top-32px'>
      <Box className='header-comment'> Business Profile </Box>
      <Box className='status-container'>
        <img className="status-icon" src={PendingSvg} />
        <Box className="status-comment color-yellow"> Pending submission </Box>
      </Box>
    </Box>

    <Box className='step-container margin-top-32px'>
      <BusinessProfileStepComponent
        currentStep={step}
        setStep={setStep}
      />
    </Box>

    <Box className='info-container margin-top-32px'>
      {step === 0 && <BusinessDetailView business={business} updateBusinessDetail={updateBusinessDetail} />}
      {step === 1 && <BusinessAddressView business={business} updateBusinessAddress={updateBusinessAddress} />}
      {step === 2 && <DirectorShareholdersView members={members} deleteBusinessMember={deleteBusinessMember} />}
      {step === 3 && <UploadDocumentsView business={business} uploadKYBDocuments={uploadKYBDocuments} />}
    </Box>
  </BusinessProfileViewStyle>
};