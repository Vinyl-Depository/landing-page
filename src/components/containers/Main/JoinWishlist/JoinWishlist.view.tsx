import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';
import { EmailValidation } from '@/models/form';

import vinylLogo from '@/images/join-whistlist-vinyl-logo.png';
import emailLogo from '@/images/join-whistlist-emails.png';

import VSvg from '@/ui/VSvg';

import classes from './JoinWishlist.module.scss';

interface IProps {
	readonly joinersCount: number;
	readonly emailInputChangeHandler: (_: string) => void;
	readonly emailInput: string | null;
	readonly formSubmitHandler: (event: React.FormEvent) => void;
	readonly emailValidation: EmailValidation | null;
}

const JoinWishlistView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let validationMessage: JSX.Element | string | null = null;
	let validationMessageClassName: string | null = null;

	if (props.emailValidation === EmailValidation.Success) {
		validationMessage = t('intro.successValidationMessage');
		validationMessageClassName = classes['validationMessageSuccess'] ?? '';
	} else if (props.emailValidation === EmailValidation.BadInput) {
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
		validationMessageClassName = classes['validationMessageError'] ?? '';
	}

	return (
		<div className={classes['joinWishlistSectionContainer']}>
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
						noValidate
						onSubmit={props.formSubmitHandler}
					>
						<input
							className={classes['joinWishlistForm__input']}
							type="email"
							placeholder={t('joinWishlist.formPlaceholder')}
							value={props.emailInput ?? ''}
							onChange={({ currentTarget: { value } }) => props.emailInputChangeHandler(value)}
						/>
						<button className={classes['joinWishlistForm__submit']} type="submit">
							{t('joinWishlist.button')}
						</button>

						<button className={classes['joinWishlistForm__mobileSubmit']} type="submit">
							<VSvg name="submitButton" />
						</button>
						{props.emailValidation && (
							<span className={validationMessageClassName ?? ''}>{validationMessage}</span>
						)}
					</form>
				</div>
			</section>
		</div>
	);
};

JoinWishlistView.displayName = 'JoinWishlistView';
JoinWishlistView.defaultProps = {};

export default React.memo(JoinWishlistView);
