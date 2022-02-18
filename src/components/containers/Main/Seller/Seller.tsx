import React, { useState } from 'react';

import { validateEmail } from '@/utils/validators';

import SellerView from './Seller.view';

interface IProps {}

const Seller: React.FC<IProps> = () => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [nameInputState, setNameInputState] = useState<string | null>(null);
	const [isEmailOnErrorState, setIsEmailOnErrorState] = useState<boolean>(false);
	const [isNameOnErrorState, setIsNameOnErrorState] = useState<boolean>(false);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);

	const onNameInputChange = (input: string) => setNameInputState(() => input);

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		let formHasFailed = false;

		if (!emailInputState || !validateEmail(emailInputState)) {
			setIsEmailOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!nameInputState) {
			setIsNameOnErrorState(() => true);

			formHasFailed = true;
		}

		if (!formHasFailed) {
			setEmailInputState(() => null);
			setNameInputState(() => null);
		}
	};

	return (
		<SellerView
			emailInput={emailInputState}
			nameInput={nameInputState}
			isEmailOnError={isEmailOnErrorState}
			isNameOnError={isNameOnErrorState}
			onEmailInputChange={onEmailInputChange}
			onNameInputChange={onNameInputChange}
			onFormSubmit={onFormSubmit}
		/>
	);
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
