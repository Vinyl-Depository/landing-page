import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import marketplaceImg from '@/images/marketplace.png';
import marketplaceMobileImg from '@/images/marketplace-mobile.png';

import classes from './TypicalMarketplaces.module.scss';

interface IProps {}

const TypicalMarketplacesView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div
			className={classes['typicalMarketplacesSectionContainer']}
			data-test-id="typical-marketplaces-section"
		>
			<section className={classes['typicalMarketplacesSection']}>
				<h3 className={classes['typicalMarketplacesSection__header']}>
					{t('typicalMarketplaces.header')}
				</h3>
				<div className={classes['typicalMarketplacesTextContainer']}>
					<p className={classes['typicalMarketplacesTextContainer__text']}>
						{t('typicalMarketplaces.description')}
					</p>
					<div className={classes['typicalMarketplacesTextContainer__img']}>
						<Image
							src={marketplaceImg}
							alt="marketplace"
							placeholder="blur"
							objectFit="contain"
							layout="responsive"
						/>
					</div>
					<div className={classes['typicalMarketplacesTextContainer__mobileImg']}>
						<Image
							src={marketplaceMobileImg}
							alt="marketpalce"
							placeholder="blur"
							objectFit="contain"
						/>
					</div>
				</div>
			</section>
		</div>
	);
};

TypicalMarketplacesView.displayName = 'TypicalMarketplacesView';
TypicalMarketplacesView.defaultProps = {};

export default React.memo(TypicalMarketplacesView);
