import React from 'react';
import { Grid, Box, BoxProps } from '@mui/material';
import { UploadDocumentsViewStyle } from './index.style';
import { UploadFileComponent, NewButtonComponent, KYBDocumentComponent } from 'components/common';

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { AppActionTypes } from 'new_redux/store';
import { IBusinessDetail } from 'new_models';
import { UserKYCStatus } from 'types';


type UploadDocumentsViewProps = BoxProps & {
  business: IBusinessDetail
  uploadKYBDocuments: (files: AppActionTypes.Business.IUploadKYBDocuments) => void;
};

export const UploadDocumentsView: React.FC<UploadDocumentsViewProps> = (props) => {
  const { business, uploadKYBDocuments } = props;

  console.log('business: ', business);

  const { handleSubmit, formState: { errors, isValid }, setValue, watch } = useForm<AppActionTypes.Business.IUploadKYBDocuments>({});

  const getFile = (type: string, file: any) => {
    if (type === 'incorporation') setValue('incorporation', file);
    if (type === 'operation') setValue('operation', file);
  }

  const onSubmitHandler = (data: AppActionTypes.Business.IUploadKYBDocuments) => {
    if (watch().incorporation && watch().operation) {
      uploadKYBDocuments(data);
    }
  }

  return <UploadDocumentsViewStyle>
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Grid container spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box className="info-panel">
            <Box className="panel-comment"> Incorporation Document </Box>
            <Box className="panel">
              {
                !business.incorporationDocumentUrl &&
                <UploadFileComponent
                  type='incorporation'
                  getFile={getFile}
                />
              }
              {
                business.incorporationDocumentUrl &&
                <KYBDocumentComponent
                  documentUrl={business.incorporationDocumentUrl}
                  status={business.businessProfileStatus}
                />
              }
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}>
          <Box className="info-panel">
            <Box className="panel-comment"> Proof of Operation Address </Box>
            <Box className="panel">
              {
                !business.operationDocumentUrl &&
                <UploadFileComponent
                  type='operation'
                  getFile={getFile}
                />
              }
              {
                business.operationDocumentUrl &&
                <KYBDocumentComponent
                  documentUrl={business.operationDocumentUrl}
                  status={business.businessProfileStatus}
                />
              }
            </Box>
          </Box>
        </Grid>
      </Grid>

      <div className='margin-top-32px button-container'>
        <NewButtonComponent className='button-item' disabled={true}>
          Cancel
        </NewButtonComponent>
        <NewButtonComponent
          type='submit'
          className='button-item'
        // disabled={!isValid}
        >
          Update
        </NewButtonComponent>
      </div>
    </form>
  </UploadDocumentsViewStyle>
}