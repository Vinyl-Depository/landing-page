import React, { useState } from 'react';

import { validateEmail } from '@/utils/validators';

import IntroView from './Intro.view';

interface IProps {
	readonly joinersCount: number;
}

const Intro: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [isEmailInputOnErrorState, setIsEmailInputOnErrorState] = useState<boolean | null>(null);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (emailInputState === null) {
			return;
		}

		if (emailInputState === '' || !validateEmail(emailInputState)) {
			return setIsEmailInputOnErrorState(() => true);
		}

		// If the email is valid then set a success state and reset the email input

		setIsEmailInputOnErrorState(() => false);
		setEmailInputState(() => null);
	};

	return (
		<IntroView
			joinersCount={props.joinersCount}
			emailInput={emailInputState}
			isEmailInputOnError={isEmailInputOnErrorState}
			onEmailInputChange={onEmailInputChange}
			onFormSubmit={onFormSubmit}
		/>
	);
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
