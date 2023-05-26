import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISaaSUserCorporation } from "new_models";

import * as AppActionTypes from "../types";

type SaaSUserCorporationState = {
	saasUserCorporation?: ISaaSUserCorporation;
};

const initialState: SaaSUserCorporationState = {};

const accountSlice = createSlice({
	name: "saasUserCorporation",
	initialState: initialState,
	reducers: {
		// Get SaaSUserCorporation
		getSaaSUserCorporationRequest(
			_state: SaaSUserCorporationState,
			_action: PayloadAction<AppActionTypes.SaaSUserCorporation.IGetSaaSUserCorporationRequestAction>
		) {},
		getSaaSUserCorporationSuccess(
			state: SaaSUserCorporationState,
			action: PayloadAction<AppActionTypes.SaaSUserCorporation.IGetSaaSUserCorporationSuccessAction>
		) {
			state.saasUserCorporation = action.payload.saasUserCorporation;
		},
		getSaaSUserCorporationFailure(_state: SaaSUserCorporationState) {},
	},
});

export const reducer = accountSlice.reducer;
export const actions = accountSlice.actions;
