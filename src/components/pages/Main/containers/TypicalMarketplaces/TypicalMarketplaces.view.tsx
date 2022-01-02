import React from 'react';
import { useTranslation } from 'react-i18next';

import marketplaceImg from '../../../../../assets/images/marketplace.jpg';
import marketplaceMobileImg from '../../../../../assets/images/marketplace-mobile.jpg';

import classes from './TypicalMarketplaces.module.scss';

interface Props {}

const TypicalMarketplacesView: React.FC<Props> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['typicalMarketplacesSectionContainer']}>
			<section className={classes['typicalMarketplacesSection']}>
				<h3 className={classes['typicalMarketplacesSection__header']}>{t('typicalMarketplaces.header')}</h3>
				<div className={classes['typicalMarketplacesTextContainer']}>
					<p className={classes['typicalMarketplacesTextContainer__text']}>{t('typicalMarketplaces.description')}</p>
					<img className={classes['typicalMarketplacesTextContainer__img']} src={marketplaceImg} alt="marketpalce" />
					<img className={classes['typicalMarketplacesTextContainer__mobileImg']} src={marketplaceMobileImg} alt="marketpalce" />
				</div>
			</section>
		</div>
	);
};

TypicalMarketplacesView.displayName = 'TypicalMarketplacesView';
TypicalMarketplacesView.defaultProps = {};

export default React.memo(TypicalMarketplacesView);
