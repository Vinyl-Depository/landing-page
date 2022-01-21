import React from 'react';
import { useTranslation } from 'react-i18next';

import browseImg from '../../../../../assets/images/doing-it-browse.jpg';
import searchImg from '../../../../../assets/images/doing-it-search.jpg';
import pileUpImg from '../../../../../assets/images/doing-it-pileup.jpg';
import personalizedImg from '../../../../../assets/images/doing-it-personalized.jpg';
import sellerImg from '../../../../../assets/images/doing-it-seller.jpg';

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
						<p className={classes['doingItItem__text']}>{t('doingIt.browse.description')}</p>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={searchImg} alt="doing it search" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.search.title')}</h4>
						<p className={classes['doingItItem__text']}>{t('doingIt.search.description')}</p>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={pileUpImg} alt="doing it pilu up and choose" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.pileUp.title')}</h4>
						<p className={classes['doingItItem__text']}>{t('doingIt.pileUp.description')}</p>
					</div>
				</div>
				<div className={classes['doingItSecondRow']}>
					<div className={`${classes['doingItItem']} ${classes['doingItItem--withMargin']}`}>
						<img className={classes['doingItItem__img']} src={personalizedImg} alt="doing it personalized" />
						<h4 className={classes['doingItItem__title']}>{t('doingIt.personalizedExperience.title')}</h4>
						<p className={classes['doingItItem__text']}>{t('doingIt.personalizedExperience.description')}</p>
					</div>
					<div className={classes['doingItItem']}>
						<img className={classes['doingItItem__img']} src={sellerImg} />
						<h2 className={classes['doingItItem__title']}>{t('doingIt.trustedSellers.title')}</h2>
						<p className={classes['doingItItem__text']}>{t('doingIt.trustedSellers.description')}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

DoingItView.displayName = 'DoingItView';
DoingItView.defaultProps = {};

export default React.memo(DoingItView);
