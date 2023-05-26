import React, { createContext, useState, useEffect } from "react";
import { PlatformType } from 'types';
import { ThemeProvider } from '@mui/material';
import { Theme } from '@mui/material/styles';
import {
	eurekapayTheme,
	mainTheme,
	smpwTheme,
	tifiTheme,
} from 'styles';
import { useDispatch, useSelector } from "react-redux";
import { AppActions, AppDispatch, RootState } from "new_redux/store";

type IPlatformContext = {
	saasUserCorporationId: number,
	platformType: PlatformType,
	getEmailFromSession: () => string,
	saveEmailOnSession: (email: string) => void,
	getCountryCodeFromSession: () => string,
	saveCountryCodeOnSession: (countryCode: string) => void,
	getPhoneNumberFromSession: () => string,
	savePhoneNumberOnSession: (phoneNumber: string) => void,
	getKYCVeriffUuidFromSession: () => string,
	saveKYCVeriffUuidOnSession: (kycVeriffUuid: string) => void,
	getBusinessNameFromSession: () => string,
	saveBusinessNameOnSession: (businessName: string) => void,
	resetSession: () => void
};

export const PlatformContext = createContext<IPlatformContext>({
	saasUserCorporationId: -1,
	platformType: 'Personal',
	getEmailFromSession: () => "",
	saveEmailOnSession: () => { },
	getCountryCodeFromSession: () => "",
	saveCountryCodeOnSession: () => { },
	getPhoneNumberFromSession: () => "",
	savePhoneNumberOnSession: () => { },
	getKYCVeriffUuidFromSession: () => "",
	saveKYCVeriffUuidOnSession: () => { },
	getBusinessNameFromSession: () => "",
	saveBusinessNameOnSession: () => { },
	resetSession: () => { }
});

type PlatformContextProviderProps = {
	children: React.ReactNode
}

export const PlatformContextProvider: React.FC<PlatformContextProviderProps> = ({ children }) => {
	const dispatch = useDispatch<AppDispatch>();

	const saasUserCorporation = useSelector((root: RootState) => root.saasUserCorporation);

	const [theme, setTheme] = useState<Theme>(mainTheme);

	const [platformType, setPlatformType] = useState<PlatformType>('Personal');

	useEffect(() => {
		const hostName = window.location.hostname;
		if (hostName.includes('tifi')) {
			setTheme(tifiTheme);
		} else if (hostName.includes('smpw')) {
			setTheme(smpwTheme);
		} else if (hostName.includes('eurekapay')) {
			setTheme(eurekapayTheme);
		}

		if (hostName.includes('business')) {
			sessionStorage.setItem('user', 'Business');
			setPlatformType('Business');
		} else {
			sessionStorage.setItem('user', 'Personal');
			setPlatformType('Personal');
		}

		const [domain] = window.location.hostname.split('.');
		dispatch(AppActions.saasUserCorporation.getSaaSUserCorporationRequest({
			domain: domain
		}));
	}, [window.location.hostname, dispatch]);

	const getEmailFromSession = () => {
		return sessionStorage.getItem('email') ?? "";
	}

	const saveEmailOnSession = (email: string) => {
		sessionStorage.setItem('email', email);
	}

	const getCountryCodeFromSession = () => {
		return sessionStorage.getItem('country_code') ?? "";
	}

	const saveCountryCodeOnSession = (countryCode: string) => {
		sessionStorage.setItem('country_code', countryCode);
	}

	const getBusinessNameFromSession = () => {
		return sessionStorage.getItem('business_name') ?? "";
	}

	const saveBusinessNameOnSession = (businessName: string) => {
		sessionStorage.setItem('business_name', businessName);
	}

	const getPhoneNumberFromSession = () => {
		return sessionStorage.getItem('phone_number') ?? "";
	}

	const savePhoneNumberOnSession = (phoneNumber: string) => {
		sessionStorage.setItem('phone_number', phoneNumber);
	}

	const getKYCVeriffUuidFromSession = () => {
		return sessionStorage.getItem('kycVeriffUuid') ?? "";
	}

	const saveKYCVeriffUuidOnSession = (kycVeriffUuid: string) => {
		sessionStorage.setItem('kycVeriffUuid', kycVeriffUuid);
	}

	const resetSession = () => {
		sessionStorage.removeItem('email');
		sessionStorage.removeItem('country_code');
		sessionStorage.removeItem('phone_number');
		sessionStorage.removeItem('kycVeriffUuid');
	}

	return (
		<PlatformContext.Provider value={{
			platformType: platformType,
			saasUserCorporationId: saasUserCorporation.saasUserCorporation?.id ?? -1,
			getEmailFromSession,
			saveEmailOnSession,
			getCountryCodeFromSession,
			saveCountryCodeOnSession: saveCountryCodeOnSession,
			getPhoneNumberFromSession,
			savePhoneNumberOnSession,
			getKYCVeriffUuidFromSession,
			saveKYCVeriffUuidOnSession,
			getBusinessNameFromSession,
			saveBusinessNameOnSession,
			resetSession
		}}>
			<ThemeProvider theme={theme}>
				{children}
			</ThemeProvider>
		</PlatformContext.Provider>
	);
};
