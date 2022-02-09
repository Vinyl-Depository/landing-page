import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import browseImg from '@/images/doing-it-browse.png';
import searchImg from '@/images/doing-it-search.png';
import pileUpImg from '@/images/doing-it-pileup.png';
import personalizedImg from '@/images/doing-it-personalized.png';
import sellerImg from '@/images/doing-it-seller.png';

import classes from './DoingIt.module.scss';

interface IProps {}

const DoingItView: React.FC<IProps> = () => {
	const { t } = useTranslation();
	return (
		<div className={classes['doingItSectionContainer']}>
			<section className={classes['doingItSection']}>
				<h1 className={classes['doingItSection__header']}>{t('doingIt.header')}</h1>
				<div className={classes['doingItFirstRow']}>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={browseImg} alt="doing it browse" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.browse.title')}</h4>
						<span className={classes['doingItItem__text']}>
							<Trans i18nKey="doingIt.browse.description" />
						</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={searchImg} alt="doing it search" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.search.title')}</h4>
						<span className={classes['doingItItem__text']}>{t('doingIt.search.description')}</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={pileUpImg} alt="doing it pilu up and choose" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.pileUp.title')}</h4>
						<span className={classes['doingItItem__text']}>{t('doingIt.pileUp.description')}</span>
					</div>
				</div>
				<div className={classes['doingItSecondRow']}>
					<div className={`${classes['doingItItem']} ${classes['doingItItem--withMargin']}`}>
						<img className={classes['doingItItem__img']} src={personalizedImg} alt="doing it personalized" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.personalizedExperience.title')}</h4>
						<span className={classes['doingItItem__text']}>{t('doingIt.personalizedExperience.description')}</span>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={sellerImg} />
						<h2 className={classes['doingItItem__title']}>{t('doingIt.trustedSellers.title')}</h2>
						<span className={classes['doingItItem__text']}>{t('doingIt.trustedSellers.description')}</span>
					</div>
				</div>
			</section>
		</div>
	);
};

DoingItView.displayName = 'DoingItView';
DoingItView.defaultProps = {};

export default React.memo(DoingItView);
