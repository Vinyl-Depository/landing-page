import React, { useState } from 'react';

import { validateEmail } from '@/utils/validators';

import SellerView from './Seller.view';

interface IProps {}

const Seller: React.FC<IProps> = () => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [nameInputState, setNameInputState] = useState<string | null>(null);
	const [countrySelectedIndexState, setCountrySelectedIndexState] = useState<number | null>(null);
	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState<boolean>(false);
	const [isNameOnErrorState, setIsNameOnErrorState] = useState<boolean>(false);
	const [isCountryOnErrorState, setIsCountryOnErrorState] = useState<boolean>(false);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);

	const onNameInputChange = (input: string) => setNameInputState(() => input);

	const onCountrySelectSelected = (index: number) => setCountrySelectedIndexState(() => index);

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

		if (countrySelectedIndexState === null) {
			setIsCountryOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!formHasFailed) {
			setEmailInputState(() => null);
			setNameInputState(() => null);
			setCountrySelectedIndexState(() => null);
		}
	};

	return (
		<SellerView
			emailInput={emailInputState}
			nameInput={nameInputState}
			countrySelectedIndex={countrySelectedIndexState}
			isEmailOnError={isEmailOnErrorState}
			isNameOnError={isNameOnErrorState}
			isCountryOnError={isCountryOnErrorState}
			onEmailInputChange={onEmailInputChange}
			onNameInputChange={onNameInputChange}
			onCountrySelectIndexSelected={onCountrySelectSelected}
			onFormSubmit={onFormSubmit}
		/>
	);
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
