import React from 'react';
import Select from 'react-select';
import { Trans, useTranslation } from 'react-i18next';

import { countriesList } from '@/data/countries';

import classes from './Seller.module.scss';

interface IProps {
	readonly emailInput: string | null;
	readonly nameInput: string | null;
	readonly country: string | null;
	readonly isEmailOnError: boolean;
	readonly isNameOnError: boolean;
	readonly isCountryOnError: boolean;
	readonly onEmailInputChange: (_: string) => void;
	readonly onNameInputChange: (_: string) => void;
	readonly onCountrySelect: (_: string) => void;
	readonly onFormSubmit: (_: React.FormEvent) => void;
}

const SellerView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const countrySelectOptions = countriesList.map((country) => ({
		value: country,
		label: country,
	}));

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
				<form className={classes['sellersSectionForm']} noValidate onSubmit={props.onFormSubmit}>
					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.emailInput')}
					</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="email"
						placeholder={t('seller.form.emailLabel')}
						value={props.emailInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.onEmailInputChange(value)}
					/>
					<span
						className={classes['sellersSectionForm__errorValidationMessage']}
						style={{ visibility: props.isEmailOnError ? 'visible' : 'hidden' }}
					>
						{t('seller.form.errorValidationEmailMessage')}
					</span>

					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.nameInput')}
					</label>
					<input
						className={classes['sellersSectionForm__input']}
						type="text"
						placeholder={t('seller.form.nameLabel')}
						value={props.nameInput ?? ''}
						onChange={({ currentTarget: { value } }) => props.onNameInputChange(value)}
					/>
					<span
						className={classes['sellersSectionForm__errorValidationMessage']}
						style={{ visibility: props.isNameOnError ? 'visible' : 'hidden' }}
					>
						{t('seller.form.errorValidationNameMessage')}
					</span>

					<label className={classes['sellersSectionForm__label']}>
						{t('seller.form.countryTitle')}
					</label>
					<Select
						className={classes['sellersSectionForm__selectCountry']}
						isSearchable
						options={countrySelectOptions}
						placeholder={t('seller.form.countryInput')}
						components={{ IndicatorSeparator: () => null }}
						theme={(theme) => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#afb3da',
								primary25: '#f4f5f7',
							},
						})}
						filterOption={(option, input) =>
							option.value.toLowerCase().startsWith(input.toLowerCase())
						}
						onChange={(selected) => props.onCountrySelect(selected!.value)}
					/>
					<span
						className={classes['sellersSectionForm__errorValidationMessage']}
						style={{ visibility: props.isCountryOnError ? 'visible' : 'hidden' }}
					>
						{t('seller.form.errorValidationCountryMessage')}
					</span>

					<button className={classes['sellersSectionForm__submit']} type="submit">
						{t('seller.form.submitButton')}
					</button>
				</form>
			</div>
		</section>
	);
};

SellerView.displayName = 'SellerView';
SellerView.defaultProps = {};

export default React.memo(SellerView);
