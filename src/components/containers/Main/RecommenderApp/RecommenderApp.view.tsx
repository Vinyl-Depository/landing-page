import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import googlePlayLogo from '@/images/google-play.png';
import appStoreLogo from '@/images/app-store.png';
import brandLogo from '@/images/brand-logo.png';
import firstPhone from '@/images/first-phone.png';
import secondPhone from '@/images/second-phone.png';
import groupPhoneIpad from '@/images/group-phones.png';

import classes from './RecommenderApp.module.scss';

interface IProps {}

const RecommenderAppView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<section className={classes['recommenderAppSection']}>
			<div className={classes['recommenderAppSectionInner']}>
				<div className={classes['recommenderAppSectionDataContainer']}>
					<h1 className={classes['recommenderAppSectionDataContainer__title']}>
						<Trans i18nKey="recommenderApp.header" />
					</h1>
					<p className={classes['recommenderAppSectionDataContainer__text']}>
						<Trans i18nKey="recommenderApp.description" />
					</p>
					<span className={classes['recommenderAppSectionDataContainer__getAppText']}>
						{t('recommenderApp.getTheApp')}
					</span>
					<div className={classes['getTheAppContainer']}>
						<div className={classes['getTheAppLinksContainer']}>
							<a className={classes['getTheAppContainerButton']} href="index.html">
								<img
									className={classes['getTheAppContainerButton__img']}
									src={googlePlayLogo}
									alt="get on google play"
								/>
							</a>
							<a
								className={`${classes['getTheAppContainerButton']} ${classes['getTheAppContainerButton--apple']}`}
								href="index.html"
							>
								<img
									className={classes['getTheAppContainerButton__img']}
									src={appStoreLogo}
									alt="get on apple store"
								/>
							</a>
						</div>
						<img
							className={classes['getTheAppContainer__logo']}
							src={brandLogo}
							alt="Vinyl Depository"
						/>
					</div>
				</div>
				<img
					className={classes['recommenderAppSectionInner__firstPhone']}
					src={firstPhone}
					alt="first phone"
				/>
				<img
					className={classes['recommenderAppSectionInner__secondPhone']}
					src={secondPhone}
					alt="second phone"
				/>
			</div>
			<img
				className={classes['recommenderAppSection__groupPhone']}
				src={groupPhoneIpad}
				alt="group of phones"
			/>
		</section>
	);
};

RecommenderAppView.displayName = 'RecommenderAppView';
RecommenderAppView.defaultProps = {};

export default React.memo(RecommenderAppView);
