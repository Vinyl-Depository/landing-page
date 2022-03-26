import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import introImgMobileResponsive from '@/images/intro-logo-mobile.png';
import introImgWebResponsive from '@/images/intro-logo-web.png';

import VSvg from '@/ui/VSvg';

import classes from './Intro.module.scss';

interface IProps {
	readonly joinersCount: number;
	readonly emailInput: string | null;
	readonly isEmailInputOnError: boolean | null;
	readonly onEmailInputChange: (_: string) => void;
	readonly onFormSubmit: (event: React.FormEvent) => void;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let validationMessage: JSX.Element | string = t('intro.successValidationMessage');
	let validationMessageClassName = classes['validationMessageSuccess'];

	if (props.isEmailInputOnError) {
		validationMessage = (
			<>
				<span className={classes['validationMessageError__firstRow']}>
					<b>{t('intro.errorValidationMessageFirstRow')}</b>
				</span>
				<br />
				<span className={classes['validationMessageError__secondRow']}>
					{t('intro.errorValidationMessageSecondRow')}
				</span>
			</>
		);
		validationMessageClassName = classes['validationMessageError'];
	}

	return (
		<div className={classes['introSectionContainer']} data-test-id="intro-section">
			<section className={classes['introSection']}>
				<h1 className={classes['introSection__header']}>{t('intro.mainHeader')}</h1>
				<div className={classes['introSection__ipadImg']}>
					<Image
						src={introImgWebResponsive}
						alt="Intro"
						placeholder="blur"
						objectFit="contain"
						priority
					/>
				</div>

				<div className={classes['introSection__mobileImg']}>
					<Image
						src={introImgMobileResponsive}
						alt="Intro"
						placeholder="blur"
						objectFit="contain"
						priority
					/>
				</div>

				<div className={classes['introWishlistContainer']}>
					<p className={classes['introWishlistTextContainer']}>
						<span className={classes['introWishlistTextContainer__main']}>
							{t('intro.waitListFirstPartDescription')}
							<span className={classes['introWishlistTextContainer__counter']}>
								&nbsp;
								{props.joinersCount}
								&nbsp;
							</span>
							{t('intro.waitListSecondPartDescription')}
						</span>
					</p>
					<form
						className={classes['introWishlistFormContainer']}
						data-test-id="intro-form"
						noValidate
						onSubmit={props.onFormSubmit}
					>
						<input
							className={classes['introWishlistFormContainer__input']}
							type="email"
							placeholder={t('intro.wishListFormPlaceHolder')}
							value={props.emailInput ?? ''}
							data-test-id="intro-input"
							onChange={({ currentTarget: { value } }) => props.onEmailInputChange(value)}
						/>
						<button className={classes['introWishlistFormContainer__submit']} type="submit">
							{t('intro.wishListFormButton')}
						</button>

						<span
							className={validationMessageClassName}
							style={{ visibility: props.isEmailInputOnError === null ? 'hidden' : 'visible' }}
							data-test-id="intro-validation-message"
						>
							{validationMessage}
						</span>

						<button className={classes['introWishlistFormContainer__submitIpad']} type="submit">
							<VSvg name="submitButton" />
						</button>
					</form>
				</div>
				<div className={classes['introSection__webImg']}>
					<Image
						src={introImgWebResponsive}
						alt="Intro"
						placeholder="blur"
						objectFit="contain"
						priority
					/>
				</div>
			</section>
		</div>
	);
};

IntroView.displayName = 'IntroSectionView';
IntroView.defaultProps = {};

export default React.memo(IntroView);
