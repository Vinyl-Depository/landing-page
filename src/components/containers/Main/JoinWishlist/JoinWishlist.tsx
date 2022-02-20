import React, { useState, useEffect } from 'react';

import { validateEmail } from '@/utils/validators';
import useBackend from '@/hooks/backend';
import { ISubscribeResponse } from '@/models/api/response/subscribe';

import JoinWishlistView from './JoinWishlist.view';

interface IProps {
	readonly joinersCount: number;
}

const JoinWishlist: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [emailInputState, setEmailInputState] = useState<string | null>(null);
	const [isEmailInputOnErrorState, setIsEmailInputOnErrorState] = useState<boolean | null>(null);

	const {
		response: subscriptionResponse,
		error: subscriptionError,
		request: subscriptionRequest,
	} = useBackend<ISubscribeResponse>('/api/subscribe', 'POST', {
		email: emailInputState,
	});

	useEffect(() => {
		if (subscriptionResponse) {
			setIsEmailInputOnErrorState(() => false);
			setEmailInputState(() => null);
		} else if (subscriptionError) {
			setIsEmailInputOnErrorState(() => true);
		}
	}, [subscriptionResponse, subscriptionError]);

	const onEmailInputChange = (input: string) => setEmailInputState(() => input);

	const onFormSubmit = (event: React.FormEvent) => {
		event.preventDefault();

		if (emailInputState === null) {
			return;
		}

		if (emailInputState === '' || !validateEmail(emailInputState)) {
			return setIsEmailInputOnErrorState(() => true);
		}

		// If the email is valid - try to subscribe
		subscriptionRequest();
	};

	return (
		<JoinWishlistView
			joinersCount={props.joinersCount}
			emailInput={emailInputState}
			isEmailInputOnError={isEmailInputOnErrorState}
			onEmailInputChange={onEmailInputChange}
			onFormSubmit={onFormSubmit}
		/>
	);
};

JoinWishlist.displayName = 'JoinWishlist';
JoinWishlist.defaultProps = {};

export default React.memo(JoinWishlist);
