import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { EmailValidation } from '@/models/email';
import { NameValidation } from '@/models/name';

import VSvg from '@/ui/VSvg';

import classes from './Seller.module.scss';

interface IProps {
	readonly emailInputChangeHandler: (_: string) => void;
	readonly nameInputChangeHandler: (_: string) => void;
	readonly emailInput: string | null;
	readonly nameInput: string | null;
	readonly formSubmitHandler: (event: React.FormEvent) => void;
	readonly emailValidation: EmailValidation | null;
	readonly nameValidation: NameValidation | null;
}

const SellerView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let emailValidationMessage: JSX.Element | string | null = null;
	let nameValidationMessage: JSX.Element | string | null = null;
	let emailValidationMessageClassName: JSX.Element | string | null = null;
	let nameValidationMessageClassName: JSX.Element | string | null = null;

	if (props.emailValidation === EmailValidation.BadInput) {
		emailValidationMessage = (
			<>
				<span className={classes['emailValidationMessageError__firstRow']}>
					<b>the email had been failed</b>

					{/* <b>{t('seller.form.errorValidationMessageFirstRow')}</b> */}
				</span>
				<br />
				<span className={classes['emailValidationMessageError__secondRow']}>
					second row
					{/* {t('seller.form.errorValidationMessageSecondRow')} */}
				</span>
			</>
		);
		emailValidationMessageClassName = classes['emailValidationMessageError'] ?? '';
	}

	if (props.nameValidation === NameValidation.BadInput) {
		nameValidationMessage = (
			<>
				<span className={classes['validationMessageError__name']}>
					<b>{t('seller.form.errorValidationNameMessage')}</b>
				</span>
				;
			</>
		);
		nameValidationMessageClassName = classes['nameValidationMessageError'] ?? '';
	}

	return (
		<section id="seller" className={classes['sellersSection']}>
			<div className={classes['sellersSectionInner']}>
				<div className={classes['sellersSectionText']}>
					<h1 className={classes['sellersSectionText__title']}>
						<Trans i18nKey="seller.title" />
					</h1>
					<p className={classes['sellersSectionText__text']}>
						<Trans i18nKey="seller.description" />
					</p>
				</div>
				<form className={classes['sellersSectionForm']} noValidate onSubmit={props.formSubmitHandler}>
					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.emailInput')}
					</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="email"
						placeholder="Your email address"
						value={props.emailInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.emailInputChangeHandler(value)}
					/>
					{props.emailValidation && (
						<span className={emailValidationMessageClassName ?? ''}>
							{emailValidationMessage}
						</span>
					)}
					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.nameInput')}
					</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="text"
						placeholder="Name / Store name"
						value={props.nameInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.nameInputChangeHandler(value)}
					/>
					{props.nameValidation && (
						<span className={nameValidationMessageClassName ?? ''}>{nameValidationMessage}</span>
					)}
					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.countryTitle')}
					</label>
					<div className={classes['sellersSectionFormSelect']}>
						<span className={classes['sellersSectionFormSelect__text']}>
							{t('seller.form.countryInput')}
						</span>
						<VSvg name="arrowDown" className={classes['sellersSectionFormSelect__icon']} />
					</div>
					<button className={classes['sellersSectionForm__submit']} type="submit">
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

SellerView.displayName = 'SellerView';
SellerView.defaultProps = {};

export default React.memo(SellerView);
