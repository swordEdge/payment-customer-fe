import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAccount, IBeneficiary } from "new_models";

import * as AppActionTypes from "../types";

type BeneficiaryState = {
  beneficiaries: IBeneficiary[]
};

const initialState: BeneficiaryState = {
  beneficiaries: [] as IBeneficiary[]
};

const beneficiarySlice = createSlice({
  name: "beneficiary",
  initialState: initialState,
  reducers: {
    // Get Beneficiaries
    getBeneficiariesRequest(
      _state: BeneficiaryState,
      _action: PayloadAction<AppActionTypes.Beneficiary.IGetBeneficiariesRequestAction>
    ) { },
    getBeneficiariesSuccess(
      state: BeneficiaryState,
      action: PayloadAction<AppActionTypes.Beneficiary.IGetBeneficiariesSuccessAction>
    ) {
      state.beneficiaries = action.payload.beneficiaries;
    },
    getBeneficiariesFailure(_state: BeneficiaryState) { },

    // Create Beneficiary
    createBeneficiaryRequest(
      _state: BeneficiaryState,
      _action: PayloadAction<AppActionTypes.Beneficiary.ICreateBeneficiaryRequestAction>
    ) { },
    createBeneficiarySuccess(
      state: BeneficiaryState,
      action: PayloadAction<AppActionTypes.Beneficiary.ICreateBeneficiarySuccessAction>
    ) { },
    createBeneficiaryFailure(_state: BeneficiaryState) { }
  }
});

export const reducer = beneficiarySlice.reducer;
export const actions = beneficiarySlice.actions;