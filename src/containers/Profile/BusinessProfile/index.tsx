import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileViews } from 'components';
import { AppActionTypes, AppActions, AppDispatch, RootState } from 'new_redux/store';

export const BusinessProfileContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { business, members } = useSelector((state: RootState) => state.business);

  const handleBusinessUpdate = (data: AppActionTypes.Business.IUpdateBusinessDetail) => {
    dispatch(AppActions.business.updateBusinessDetailRequest({ business: data }));
  }

  const handleBusinessAddressUpdate = (data: AppActionTypes.Business.IUpdateBusinessAddress) => {
    dispatch(AppActions.business.updateBusinessAddressRequest({ businessAddress: data }));
  }

  const handleDeleteBusinessMember = (id: number) => {
    dispatch(AppActions.business.deleteBusinessMemberRequest({ id: id }));
  }

  const handleUploadKYBDocuments = (files: AppActionTypes.Business.IUploadKYBDocuments) => {
    dispatch(AppActions.business.uploadKYBDocumentsRequest({ files: files }));
  }

  useEffect(() => {
    dispatch(AppActions.business.getBusinessProfileRequest({}));
    dispatch(AppActions.business.getBusinessMembersRequest({}));
  }, []);

  return <ProfileViews.BusinessProfileView
    business={business}
    members={members}
    updateBusinessDetail={handleBusinessUpdate}
    updateBusinessAddress={handleBusinessAddressUpdate}
    deleteBusinessMember={handleDeleteBusinessMember}
    uploadKYBDocuments={handleUploadKYBDocuments}
  />
}