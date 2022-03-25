import React from 'react';
import Select from 'react-select';
import { Trans, useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';

import { countriesList } from '@/data/countries';

import classes from './Seller.module.scss';

interface IProps {
	readonly emailInput: string | null;
	readonly nameInput: string | null;
	readonly country: string | null;
	readonly isEmailOnError: boolean;
	readonly isNameOnError: boolean;
	readonly isCountryOnError: boolean;
	readonly isFormOnSuccess: boolean;
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
		<section id="seller" className={classes['sellersSection']} data-test-id="seller-section">
			<Element className={classes['sellersSectionInner']} name="sellerSection">
				<div className={classes['sellersSectionText']}>
					<h2 className={classes['sellersSectionText__title']}>
						<Trans i18nKey="seller.title" />
					</h2>
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
						components={{ IndicatorSeparator: null }}
						theme={(theme) => ({
							...theme,
							colors: {
								...theme.colors,
								primary: '#afb3da',
								primary25: '#f4f5f7',
							},
						})}
						styles={{
							control: (provided) => ({
								...provided,
								backgroundColor: '#f4f5f7',
								border: 'none',
							}),
							menu: (provided) => ({
								...provided,
								backgroundColor: '#fafafa',
							}),
							menuList: (provided) => ({
								...provided,
								maxHeight: '200px',
							}),
							option: (provided) => ({
								...provided,
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							placeholder: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							singleValue: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							input: (provided) => ({
								...provided,
								width: '100%',
								fontSize: '1.4rem',
								color: '#474a57',
							}),
							noOptionsMessage: (provided) => ({
								...provided,
								padding: '5px 0',
								fontSize: '1.3rem',
								color: '#474a57',
							}),
						}}
						value={{
							label: props.country ?? t('seller.form.countryInput'),
							value: props.country,
						}}
						filterOption={(option, input) =>
							option.value.toLowerCase().startsWith(input.toLowerCase())
						}
						onChange={(selected) => props.onCountrySelect(selected!.value!)}
					/>
					<span
						className={classes['sellersSectionForm__errorValidationMessage']}
						style={{ visibility: props.isCountryOnError ? 'visible' : 'hidden' }}
					>
						{t('seller.form.errorValidationCountryMessage')}
					</span>

					<div className={classes['formSubmitContainer']}>
						<button className={classes['formSubmitContainer__submit']} type="submit">
							{t('seller.form.submitButton')}
						</button>
						{props.isFormOnSuccess && (
							<span className={classes['formSubmitContainer__successMessage']}>
								<Trans i18nKey="seller.form.successMessage" />
							</span>
						)}
					</div>
				</form>
			</Element>
		</section>
	);
};

SellerView.displayName = 'SellerView';
SellerView.defaultProps = {};

export default React.memo(SellerView);
