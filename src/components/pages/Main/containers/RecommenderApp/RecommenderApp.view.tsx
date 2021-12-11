import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import googlePlayLogo from '../../../../../assets/images/google-play.png';
import appStoreLogo from '../../../../../assets/images/app-store.png';
import brandLogo from '../../../../../assets/images/brand-logo.png';
import firstPhone from '../../../../../assets/images/first-phone.png';
import secondPhone from '../../../../../assets/images/second-phone.png';
import groupPhoneIpad from '../../../../../assets/images/group-phone-ipad.png';
import groupPhoneMobile from '../../../../../assets/images/group-Phone-mobile.png';

import classes from './RecommenderApp.module.scss';

interface Props {}

const RecommenderAppView: React.FC<Props> = () => {
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
					<span className={classes['recommenderAppSectionDataContainer__getAppText']}>{t('recommenderApp.getTheApp')}</span>
					<div className={classes['getTheAppContainer']}>
						<div className={classes['getTheAppLinksContainer']}>
							<a className={classes['getTheAppContainerButton']} href="index.html">
								<img className={classes['getTheAppContainerButton__img']} src={googlePlayLogo} alt="get on google play" />
							</a>
							<a
								className={`${classes['getTheAppContainerButton']} ${classes['getTheAppContainerButton--apple']}`}
								href="index.html"
							>
								<img className={classes['getTheAppContainerButton__img']} src={appStoreLogo} alt="get on apple store" />
							</a>
						</div>
						<img className={classes['getTheAppContainer__logo']} src={brandLogo} alt="Vinyl Depository" />
					</div>
				</div>
				<img className={classes['recommenderAppSectionInner__firstPhone']} src={firstPhone} alt="first phone" />
				<img className={classes['recommenderAppSectionInner__secondPhone']} src={secondPhone} alt="second phone" />
				<img className={classes['recommenderAppSectionInner__groupPhone-ipad']} src={groupPhoneIpad} alt="group of phones" />
				<img className={classes['recommenderAppSectionInner__groupPhone-mobile']} src={groupPhoneMobile} alt="group of phones" />
			</div>
		</section>
	);
};

RecommenderAppView.displayName = 'RecommenderAppView';
RecommenderAppView.defaultProps = {};

export default React.memo(RecommenderAppView);
