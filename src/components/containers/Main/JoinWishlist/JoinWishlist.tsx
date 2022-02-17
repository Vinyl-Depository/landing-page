import React, { useState } from 'react';

import { validateEmail } from '@/utils/validators';
import { EmailValidation } from '@/models/email';

import JoinWishlistView from './JoinWishlist.view';

interface IProps {
	readonly joinersCount: number;
}

const JoinWishlist: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [emailValidationState, setEmailValidationState] = useState<EmailValidation | null>(null);

	const emailInputChangeHandler = (input: string) => setEmailInputState(() => input);

	const formSubmitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (emailInputState === null) {
			return;
		}

		if (emailInputState === '') {
			return setEmailValidationState(() => EmailValidation.BadInput);
		}

		// If the email is valid then set a success state and reset the email input
		if (validateEmail(emailInputState)) {
			setEmailValidationState(() => EmailValidation.Success);
			setEmailInputState(() => null);

			return;
		}

		setEmailValidationState(() => EmailValidation.BadInput);
	};
	return (
		<JoinWishlistView
			joinersCount={props.joinersCount}
			emailInputChangeHandler={emailInputChangeHandler}
			formSubmitHandler={formSubmitHandler}
			emailInput={emailInputState}
			emailValidation={emailValidationState}
		/>
	);
};

JoinWishlist.displayName = 'JoinWishlist';
JoinWishlist.defaultProps = {};

export default React.memo(JoinWishlist);
