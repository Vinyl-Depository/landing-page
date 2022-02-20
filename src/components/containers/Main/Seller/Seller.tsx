import React, { useState, useEffect } from 'react';

import { validateEmail } from '@/utils/validators';
import useBackend from '@/hooks/backend';
import { ISubscribeSellerResponse } from '@/models/api/response/subscribe';
import { countriesList } from '@/data/countries';

import SellerView from './Seller.view';

interface IProps {}

const Seller: React.FC<IProps> = () => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [nameInputState, setNameInputState] = useState<string | null>(null);
	const [countryState, setCountryState] = useState<string | null>(null);
	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState<boolean>(false);
	const [isNameOnErrorState, setIsNameOnErrorState] = useState<boolean>(false);
	const [isCountryOnErrorState, setIsCountryOnErrorState] = useState<boolean>(false);
	const [isFormOnSuccessState, setIsFormOnSuccessState] = useState<boolean>(false);

	const {
		response: subscriptionResponse,
		error: subscriptionError,
		request: subscriptionRequest,
	} = useBackend<ISubscribeSellerResponse>('/api/subscribe-seller', 'POST', {
		email: emailInputState,
		firstName: nameInputState,
		country: countryState,
	});

	useEffect(() => {
		if (subscriptionResponse) {
			setIsFormOnSuccessState(() => true);
		}

		if (subscriptionResponse || subscriptionError) {
			setEmailInputState(() => null);
			setNameInputState(() => null);
			setCountryState(() => null);
		}
	}, [subscriptionResponse, subscriptionError]);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);

	const onNameInputChange = (input: string) => setNameInputState(() => input);

	const onCountrySelect = (country: string) => setCountryState(() => country);

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		setIsEmailOnErrorState(() => false);
		setIsNameOnErrorState(() => false);
		setIsCountryOnErrorState(() => false);

		let formHasFailed = false;

		if (!emailInputState || !validateEmail(emailInputState)) {
			setIsEmailOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!nameInputState) {
			setIsNameOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!countryState || !countriesList.includes(countryState)) {
			setIsCountryOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!formHasFailed) {
			subscriptionRequest();
		}
	};

	return (
		<SellerView
			emailInput={emailInputState}
			nameInput={nameInputState}
			country={countryState}
			isEmailOnError={isEmailOnErrorState}
			isNameOnError={isNameOnErrorState}
			isCountryOnError={isCountryOnErrorState}
			isFormOnSuccess={isFormOnSuccessState}
			onEmailInputChange={onEmailInputChange}
			onNameInputChange={onNameInputChange}
			onCountrySelect={onCountrySelect}
			onFormSubmit={onFormSubmit}
		/>
	);
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
