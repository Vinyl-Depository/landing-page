import React, { useState } from 'react';

import { validateEmail } from '@/utils/validators';
import { EmailValidation } from '@/models/email';
import { NameValidation } from '@/models/name';

import SellerView from './Seller.view';

interface IProps {}

const Seller: React.FC<IProps> = () => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [nameInputState, setNameInputState] = useState<string | null>(null);

	const [emailValidationState, setEmailValidationState] = useState<EmailValidation | null>(null);
	const [nameValidationState, setNameValidationState] = useState<NameValidation | null>(null);

	const emailInputChangeHandler = (input: string) => setEmailInputState(() => input);
	const nameInputChangeHandler = (input: string) => setNameInputState(() => input);

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (emailInputState === null) {
			return setEmailValidationState(() => EmailValidation.BadInput);
		}

		if (nameInputState === null) {
			setNameValidationState(() => NameValidation.BadInput);
		}

		if (emailInputState === '') {
			return setEmailValidationState(() => EmailValidation.BadInput);
		}

		if (nameInputState === '') {
			return setNameValidationState(() => NameValidation.BadInput);
		}

		// If the email is valid then set a success state and reset the email input
		if (validateEmail(emailInputState)) {
			setEmailValidationState(() => EmailValidation.Success);
			setEmailInputState(() => null);
			setNameInputState(() => null);

			return;
		}
	};

	return (
		<SellerView
			emailInputChangeHandler={emailInputChangeHandler}
			nameInputChangeHandler={nameInputChangeHandler}
			formSubmitHandler={formSubmitHandler}
			emailInput={emailInputState}
			nameInput={nameInputState}
			emailValidation={emailValidationState}
			nameValidation={nameValidationState}
		/>
	);
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
