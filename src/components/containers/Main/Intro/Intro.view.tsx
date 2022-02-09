import React from 'react';
import { useTranslation } from 'react-i18next';

import introImagIpadResponsive from '@images/intro-logo-ipad.jpg';
import introImgMobileResponsive from '@/images/intro-logo-mobile.png';
import introImgWebResponsive from '@/images/intro-logo-web.jpg';

import VSvg from '@/ui/VSvg';

import classes from './Intro.module.scss';

interface IProps {
	readonly joinersCount: number;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['introSectionContainer']}>
			<section className={classes['introSection']}>
				<h1 className={classes['introSection__header']}>{t('intro.mainHeader')}</h1>
				<img className={classes['introSection__ipadImg']} src={introImagIpadResponsive} alt="Intro image" loading="lazy" />
				<img className={classes['introSection__mobileImg']} src={introImgMobileResponsive} alt="Intro image" loading="lazy" />

				<div className={classes['introWishlistContainer']}>
					<p className={classes['introWishlistTextContainer']}>
						<span className={classes['introWishlistTextContainer__main']}>
							{t('intro.waitListFirstPartDescription')}
							<span className={classes['introWishlistTextContainer__counter']}> {props.joinersCount} </span>
							{t('intro.waitListSecondPartDescription')}
						</span>
						<span className={classes['introWishlistTextContainer__sub']}>({t('intro.waitListDescriptionSub')})</span>
					</p>
					<form className={classes['introWishlistFormContainer']}>
						<input
							className={classes['introWishlistFormContainer__input']}
							type="email"
							placeholder={t('intro.wishListFormPlaceHolder')}
						/>
						<button className={classes['introWishlistFormContainer__submit']} type="submit">
							{t('intro.wishListFormButton')}
						</button>
						<button className={classes['introWishlistFormContainer__submitIpad']} type="submit">
							<VSvg name="submitButton" />
						</button>
					</form>
				</div>

				<img className={classes['introSection__webImg']} src={introImgWebResponsive} alt="Intro image" loading="lazy" />
			</section>
		</div>
	);
};

IntroView.displayName = 'IntroSectionView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
