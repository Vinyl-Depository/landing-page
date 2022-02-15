// import { match } from 'assert';
import React, { useState } from 'react';
// import axios from 'axios';

import { validateEmail } from '@/utils/validators';

import IntroView from './Intro.view';

interface IProps {
	readonly joinersCount: number;
}

const Intro: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);

	const emailInputChangeHandler = (input: string) => {
		setEmailInputState(() => input);
	};

	const [emailInputIsValidState, setEmailInputIsValidState] = useState<boolean>(false);

	const [emailInputTouchedState, setEmailInputTouchedState] = useState<boolean>(false);

	const emailInputIsInValid = !emailInputIsValidState && emailInputTouchedState;

	const formSubmitHandler = (event: KeyboardEvent) => {
		event.preventDefault();

		setEmailInputTouchedState(true);

		if (emailInputState === null) {
			return;
		}

		if (validateEmail(emailInputState)) {
			// try {
			// 	const response = await axios.post('')

			// } catch (error) {

			// }
			setEmailInputIsValidState(() => true);
			setEmailInputState(() => null);
		} else {
			setEmailInputIsValidState(() => false);
		}
	};

	return (
		<IntroView
			joinersCount={props.joinersCount}
			emailInputChangeHandler={emailInputChangeHandler}
			formSubmitHandler={formSubmitHandler}
			emailInputState={emailInputState}
			emailInputIsInValid={emailInputIsInValid}
		/>
	);
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
