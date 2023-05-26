import { all } from "redux-saga/effects";
import authSagas from "./auth";
import currencySagas from "./currency";
import accountSagas from "./account";
import userSagas from "./user";
import saasUserCorporations from "./saasUserCorporation";
import beneficiarySagas from "./beneficiary";
import transactionSagas from "./transaction";
import businessSagas from "./business";
import subscriptionSagas from "./subscription";

function* rootSaga() {
	yield all([
		...authSagas,
		...currencySagas,
		...accountSagas,
		...userSagas,
		...saasUserCorporations,
		...beneficiarySagas,
		...transactionSagas,
		...businessSagas,
		...subscriptionSagas
	]);
}

export default rootSaga;
