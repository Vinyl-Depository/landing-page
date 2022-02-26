import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import yazifImage from '@/images/yazif.png';
import classes from './PageNotFound.module.scss';

interface IProps {}

const PageNotFoundView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['pageNotFoundContainer']}>
			<div className={classes['pageNotFoundContainer__image']}>
				<Image src={yazifImage} alt="Intro image" placeholder="blur" objectFit="contain" />
			</div>
			<h1 className={classes['pageNotFoundContainer__header']}>{t('notFoundPage.header')}</h1>
			<div className={classes['pageNotFoundSubText']}>
				<span className={classes['pageNotFoundSubText__subText']}>{t('notFoundPage.subText')}</span>
				<a href="https://vinyldepository.com" className={classes['pageNotFoundSubText__link']}>
					<Trans i18nKey="notFoundPage.clickHere" />
				</a>
			</div>
		</div>
	);
};

PageNotFoundView.displayName = 'PageNotFoundView';
PageNotFoundView.defaultProps = {};

export default React.memo(PageNotFoundView);
