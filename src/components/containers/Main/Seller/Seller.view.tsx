import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Element } from 'react-scroll';

import VSvg from '@/ui/VSvg';

import classes from './Seller.module.scss';

interface IProps {}

const SellerView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<Element name="seller">
			<section className={classes['sellersSection']}>
				<div className={classes['sellersSectionInner']}>
					<div className={classes['sellersSectionText']}>
						<h1 className={classes['sellersSectionText__title']}>
							<Trans i18nKey="seller.title" />
						</h1>
						<p className={classes['sellersSectionText__text']}>
							<Trans i18nKey="seller.description" />
						</p>
					</div>
					<form className={classes['sellersSectionForm']}>
						<label className={classes['sellersSectionForm__label']}>
							{t('seller.form.emailInput')}
						</label>
						<input
							className={classes['sellersSectionForm__input']}
							type="email"
							placeholder="Your email address"
						/>
						<label className={classes['sellersSectionForm__label']}>
							{t('seller.form.nameInput')}
						</label>
						<input
							className={classes['sellersSectionForm__input']}
							type="text"
							placeholder="Name / Store name"
						/>
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
		</Element>
	);
};

SellerView.displayName = 'SellerView';
SellerView.defaultProps = {};

export default React.memo(SellerView);
