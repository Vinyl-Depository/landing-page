import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import vinylLogo from '@/images/join-whistlist-vinyl-logo.png';
import emailLogo from '@/images/join-whistlist-emails.png';

import VSvg from '@/ui/VSvg';

import classes from './JoinWishlist.module.scss';

interface IProps {
	readonly joinersCount: number;
	readonly emailInput: string | null;
	readonly isEmailInputOnError: boolean | null;
	readonly onEmailInputChange: (_: string) => void;
	readonly onFormSubmit: (event: React.FormEvent) => void;
}

const JoinWishlistView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let validationMessage: JSX.Element | string = t('intro.successValidationMessage');
	let validationMessageClassName = classes['validationMessageSuccess'];

	if (props.isEmailInputOnError) {
		validationMessage = (
			<>
				<span className={classes['validationMessageError__firstRow']}>
					<b>{t('intro.errorValidationMessageFirstRow')}</b>
				</span>
				<br />
				<span className={classes['validationMessageError__secondRow']}>
					{t('intro.errorValidationMessageSecondRow')}
				</span>
			</>
		);
		validationMessageClassName = classes['validationMessageError'];
	}

	return (
		<div className={classes['joinWishlistSectionContainer']} data-test-id="join-wishlist-section">
			<section className={classes['joinWishlistSection']}>
				<div className={classes['joinWishlistSectionLogos']}>
					<div className={classes['joinWishlistSectionLogos__logo']}>
						<Image
							src={vinylLogo}
							alt="Join whistlist"
							placeholder="blur"
							objectFit="contain"
							layout="fill"
						/>
					</div>
					<div className={classes['joinWishlistSectionLogos__logo']}>
						<Image
							src={emailLogo}
							alt="Join whistlist emails"
							placeholder="blur"
							objectFit="contain"
							layout="fill"
						/>
					</div>
				</div>
				<div className={classes['joinWishlistText']}>
					<h2 className={classes['joinWishlistHeader']}>
						<Trans i18nKey="joinWishlist.headerMain" />
						<span className={classes['joinWishlistHeader__counter']}>
							&nbsp;
							{props.joinersCount}
							&nbsp;
						</span>
						<Trans i18nKey="joinWishlist.headerSecondPart" />
					</h2>
					<form
						className={classes['joinWishlistForm']}
						data-test-id="join-wishlist-form"
						noValidate
						onSubmit={props.onFormSubmit}
					>
						<input
							className={classes['joinWishlistForm__input']}
							type="email"
							placeholder={t('joinWishlist.formPlaceholder')}
							value={props.emailInput ?? ''}
							data-test-id="join-wishlist-input"
							onChange={({ currentTarget: { value } }) => props.onEmailInputChange(value)}
						/>
						<button className={classes['joinWishlistForm__submit']} type="submit">
							{t('joinWishlist.button')}
						</button>

						<button className={classes['joinWishlistForm__mobileSubmit']} type="submit">
							<VSvg name="submitButton" />
						</button>
						<span
							className={validationMessageClassName}
							style={{ visibility: props.isEmailInputOnError === null ? 'hidden' : 'visible' }}
							data-test-id="join-wishlist-validation-message"
						>
							{validationMessage}
						</span>
					</form>
				</div>
			</section>
		</div>
	);
};

JoinWishlistView.displayName = 'JoinWishlistView';
JoinWishlistView.defaultProps = {};

export default React.memo(JoinWishlistView);
