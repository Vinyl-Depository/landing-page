import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
					<h2 className={classes['recommenderAppSectionDataContainer__title']}>
						<Trans i18nKey="recommenderApp.header" />
					</h2>
					<p className={classes['recommenderAppSectionDataContainer__text']}>
						<Trans i18nKey="recommenderApp.description" />
					</p>
					<span className={classes['recommenderAppSectionDataContainer__getAppText']}>
						{t('recommenderApp.getTheApp')}
					</span>
					<div className={classes['getTheAppContainer']}>
						<div className={classes['getTheAppLinksContainer']}>
							<Link href="/" passHref>
								<a className={classes['getTheAppContainerButton']}>
									<div className={classes['getTheAppContainerButton__img']}>
										<Image
											src={googlePlayLogo}
											alt="get on google play"
											placeholder="blur"
											objectFit="contain"
											layout="fill"
										/>
									</div>
								</a>
							</Link>

							<Link href="/" passHref>
								<a
									className={`${classes['getTheAppContainerButton']} ${classes['getTheAppContainerButton--apple']}`}
								>
									<div className={classes['getTheAppContainerButton__img']}>
										<Image
											src={appStoreLogo}
											alt="get on apple store"
											placeholder="blur"
											objectFit="contain"
											layout="fill"
										/>
									</div>
								</a>
							</Link>
						</div>
						<div className={classes['getTheAppContainer__logo']}>
							<Image
								src={brandLogo}
								alt="Vinyl Depository"
								placeholder="blur"
								objectFit="contain"
								layout="fill"
							/>
						</div>
					</div>
				</div>
				<div className={classes['recommenderAppSectionInner__firstPhone']}>
					<Image
						src={firstPhone}
						alt="first phone"
						placeholder="blur"
						objectFit="cover"
						layout="fill"
					/>
				</div>
				<div className={classes['recommenderAppSectionInner__secondPhone']}>
					<Image
						src={secondPhone}
						alt="second phone"
						placeholder="blur"
						objectFit="cover"
						layout="fill"
					/>
				</div>
			</div>
			<div className={classes['recommenderAppSection__groupPhone']}>
				<Image
					src={groupPhoneIpad}
					alt="group of phones"
					placeholder="blur"
					objectFit="cover"
					layout="fill"
				/>
			</div>
		</section>
	);
};

RecommenderAppView.displayName = 'RecommenderAppView';
RecommenderAppView.defaultProps = {};

export default React.memo(RecommenderAppView);
