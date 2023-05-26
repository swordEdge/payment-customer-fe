import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBusinessDetail, IBusinessMember } from "new_models";

import * as AppActionTypes from "../types";

type BusinessState = {
  business: IBusinessDetail,
  members: IBusinessMember[],
  member: IBusinessMember
};

const initialState: BusinessState = {
  business: {} as IBusinessDetail,
  members: [],
  member: {} as IBusinessMember
};

const businessSlicke = createSlice({
  name: "business",
  initialState: initialState,
  reducers: {
    // Get Businesss Profile
    getBusinessProfileRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IGetBusinessProfileRequestAction>
    ) { },
    getBusinessProfileSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IGetBusinessProfileSuccessAction>
    ) {
      state.business = action.payload.businessProfile
    },
    getBusinessProfileFailure(_state: BusinessState) { },

    // Update Business Detail
    updateBusinessDetailRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IUpdateBusinessDetailRequestAction>
    ) { },
    updateBusinessDetailSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IUpdateBusinessDetailSuccessAction>
    ) {
      state.business = {
        ...state.business,
        ...action.payload.business
      };
    },
    updateBusinessDetailFailure(_state: BusinessState) { },

    // Update Business Address Request
    updateBusinessAddressRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IUpdateBusinessAddressRequestAction>
    ) { },
    updateBusinessAddressSucess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IUpdateBusinessAddressSuccessAction>
    ) {
      state.business = {
        ...state.business,
        ...action.payload.business
      }
    },
    updateBusinessAddressFailure(_state) { },

    // Get Business Members Request
    getBusinessMembersRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IGetBusinessMembersRequestAction>
    ) { },
    getBusinessMembersSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IGetBusinessMembersSuccessAction>
    ) { state.members = action.payload.members; },
    getBusinessMembersFailure(_state: BusinessState) { },

    // Get Certain Business Member Request
    getCertainBusinessMemberRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IGetCertainBusinessMemberRequestAction>
    ) { },
    getCertainBusinessMemberSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IGetCertainBusinessMemberSuccessAction>
    ) {
      state.member = action.payload.member;
    },
    getCertainBusinessMemberFailure(_state: BusinessState) { },

    // Create Business Member Request
    createBusinessMemberRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.ICreateBusinessMemberRequestAction>
    ) { },
    createBusinessMemberSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.ICreateBusinessMemberSuccessAction>
    ) {
      state.members = action.payload.members;
    },
    createBusinessMemberFailure(_state: BusinessState) { },

    // Delete Business Member Request
    deleteBusinessMemberRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IDeleteBusinessMemberRequestAction>
    ) { },
    deleteBusinessMemberSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IDeleteBusinessMemberSuccessAction>
    ) { },
    deleteBusinessMemberFailure(_state: BusinessState) { },

    // Update Business Member Request
    updateBusinessMemberRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IUpdateBusinessAddressRequestAction>
    ) { },
    updateBusinessMemberSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IUpdateBusinessAddressSuccessAction>
    ) { },
    updateBusinessMemberFailure(_state: BusinessState) { },

    // Upload KYB Documents Request
    uploadKYBDocumentsRequest(
      _state: BusinessState,
      _action: PayloadAction<AppActionTypes.Business.IUploadKYBDocumentsRequestAction>
    ) { },
    uploadKYBDocumentsSuccess(
      state: BusinessState,
      action: PayloadAction<AppActionTypes.Business.IUploadKYBDocumentsSuccessAction>
    ) {
      state.business = {
        ...action.payload.businessCustomerCorporation
      };
    },
    uploadKYBDocumentsFailure(_state: BusinessState) { }
  }
});

export const reducer = businessSlicke.reducer;
export const actions = businessSlicke.actions;