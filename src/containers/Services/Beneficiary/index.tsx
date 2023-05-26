import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ServiceViews } from 'components';
import { AppActions, RootState, AppDispatch } from 'new_redux/store';
import { IDetailBeneficiary } from 'new_models';

export const BeneficiaryContainer = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { beneficiaries } = useSelector(
    (state: RootState) => state.beneficiary
  );
  const { currencies } = useSelector((state: RootState) => state.currency);

  const onCreateBeneficiary = (formValues: any) => {
    // dispatch(AppActions.loading.setLoading({ loadingStatus: true }));
    // dispatch(
    //   AppActions.beneficiary.createBeneficiary({
    //     name: formValues.name,
    //     currency: formValues.currency,
    //     sortCode: formValues.sortCode,
    //     accountNumber: formValues.accountNumber,
    //   })
    // );
  };

  const onDeleteBeneficiary = (index: number) => {
    // dispatch(AppActions.loading.setLoading({ loadingStatus: true }));
    // dispatch(AppActions.beneficiary.deleteBeneficiary({ id: index }));
  };

  const handleCreateBeneficiary = (newBeneficiary: IDetailBeneficiary) => {
    dispatch(AppActions.beneficiary.createBeneficiaryRequest({
      beneficiary: newBeneficiary,
      next: () => { dispatch(AppActions.beneficiary.getBeneficiariesRequest({})); }
    }));
  }

  useEffect(() => {
    dispatch(AppActions.beneficiary.getBeneficiariesRequest({}));
    dispatch(AppActions.currency.getCurrenciesRequest({}));
  }, [dispatch])

  return (
    <ServiceViews.ServiceBeneficiaryView
      beneficiaries={beneficiaries}
      currencies={currencies}
      createBeneficiary={handleCreateBeneficiary}
      deleteBeneficiary={onDeleteBeneficiary}
    />
  );
};
