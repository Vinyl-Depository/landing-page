import React from 'react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import yazifImage from '@/images/yazif.png';

import classes from './PageNotFound.module.scss';

interface IProps {}

const PageNotFoundView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<section className={classes['container']}>
			<div className={classes['container__image']}>
				<Image src={yazifImage} alt="CHEDDAR guy image" placeholder="blur" objectFit="contain" />
			</div>
			<h1 className={classes['container__header']}>{t('pageNotFound.header')}</h1>
			<div className={classes['pageNotFoundSubText']}>
				<span className={classes['pageNotFoundSubText__text']}>{t('pageNotFound.subText')}</span>
				<span>&nbsp;</span>
				<a href="https://vinyldepository.com" className={classes['pageNotFoundSubText__link']}>
					<Trans i18nKey="pageNotFound.clickHere" />
				</a>
			</div>
		</section>
	);
};

PageNotFoundView.displayName = 'PageNotFoundView';
PageNotFoundView.defaultProps = {};

export default React.memo(PageNotFoundView);
