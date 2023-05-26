import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppActionTypes, AppActions, AppDispatch } from 'new_redux/store';
import { ProfileViews } from 'components';

export const NewDirectorShareholderContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCreateBusinessMember = (data: AppActionTypes.Business.INewBusinessMember) => {
    dispatch(AppActions.business.createBusinessMemberRequest({ member: data }));
  }

  return <ProfileViews.NewDirectorShareholderView
    createBusinessMember={handleCreateBusinessMember}
  />;
};
