import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IBeneficiary } from 'models';

type StateType = {
  beneficiary?: IBeneficiary;
  beneficiaries: IBeneficiary[];
  gettingBeneficiary: boolean;
  gotBeneficiary: boolean;
  createdBeneficiary: boolean;
  error?: any;
  deleted: boolean;
};

const intialState: StateType = {
  beneficiaries: [],
  gettingBeneficiary: false,
  gotBeneficiary: false,
  createdBeneficiary: false,
  deleted: false,
};

const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState: intialState,
  reducers: {
    /**
     * get Beneficiaries
     */

    getBeneficiaries(state: StateType) {
      state.gettingBeneficiary = true;
      state.gotBeneficiary = false;
    },
    getBeneficiariesSuccess(state, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = true;
      state.beneficiaries = action.payload;
    },
    getBeneficiariesError(state, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = false;
      state.error = action.payload;
    },
    /**
     * Create Beneficiary
     */
    createBeneficiary(
      state: StateType,
      action: PayloadAction<
        Pick<IBeneficiary, 'name' | 'currency' | 'sortCode' | 'accountNumber'>
      >
    ) {
      state.gettingBeneficiary = true;
      state.gotBeneficiary = false;
      state.createdBeneficiary = false;
    },
    createBeneficiarySuccess(
      state: StateType,
      action: PayloadAction<IBeneficiary[]>
    ) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = true;
      state.createdBeneficiary = true;
      state.beneficiaries = action.payload;
    },
    createBeneficiaryError(state, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = false;
      state.createdBeneficiary = false;
      state.error = action.payload;
    },
    /**
     * Update Beneficiary
     */
    updateBeneficiary(
      state: StateType,
      action: PayloadAction<
        Pick<
          IBeneficiary,
          'id' | 'name' | 'currency' | 'sortCode' | 'accountNumber'
        >
      >
    ) {
      state.gettingBeneficiary = true;
      state.gotBeneficiary = false;
    },
    updateBeneficiarySuccess(
      state: StateType,
      action: PayloadAction<IBeneficiary[]>
    ) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = true;
      state.beneficiaries = action.payload;
    },
    updateBeneficiaryError(state, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = false;
      state.error = action.payload;
    },
    /**
     * Delete beneficiary
     */
    deleteBeneficiary(state: StateType, action: PayloadAction<{ id: number }>) {
      state.gettingBeneficiary = true;
      state.gotBeneficiary = false;
      state.deleted = false;
    },
    deleteBeneficiarySuccess(state: StateType, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = true;
      state.deleted = true;
      state.beneficiaries = action.payload;
    },
    deleteBeneficiaryError(state, action) {
      state.gettingBeneficiary = false;
      state.gotBeneficiary = false;
      state.error = action.payload;
    },
  },
});

export const actions = beneficiarySlice.actions;
export const reducer = beneficiarySlice.reducer;
