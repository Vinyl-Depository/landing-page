import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import introImgMobileResponsive from '@/images/intro-logo-mobile.png';
import introImgWebResponsive from '@/images/intro-logo-web.png';
import { EmailValidation } from '@/models/email';
import VSvg from '@/ui/VSvg';

import classes from './Intro.module.scss';

interface IProps {
	readonly joinersCount: number;
	readonly emailInputChangeHandler: (_: string) => void;
	readonly emailInput: string | null;
	readonly formSubmitHandler: (event: React.FormEvent) => void;
	readonly emailValidation: EmailValidation | null;
}

const IntroView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	let validationMessage: string | null = null;
	let validationMessageClassName: string | null = null;

	if (props.emailValidation === EmailValidation.Success) {
		validationMessage = 'Welcome! Thanks for joining :)';
		validationMessageClassName = classes['emailValidationSuccessMessage'] ?? '';
	} else if (props.emailValidation === EmailValidation.BadInput) {
		validationMessage =
			'Whoops, this doesnt seem to be a valid email! (Should be something like Jimi@Hendrix.com)';
		validationMessageClassName = classes['emailValidationBadInputMessage'] ?? '';
	}

	return (
		<div className={classes['introSectionContainer']}>
			<section className={classes['introSection']}>
				<h1 className={classes['introSection__header']}>{t('intro.mainHeader')}</h1>
				<div className={classes['introSection__ipadImg']}>
					<Image
						src={introImgWebResponsive}
						alt="Intro image"
						placeholder="blur"
						objectFit="contain"
						priority
					/>
				</div>

				<div className={classes['introSection__mobileImg']}>
					<Image
						src={introImgMobileResponsive}
						alt="Intro image"
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
						<span className={classes['introWishlistTextContainer__sub']}>
							{t('intro.waitListDescriptionSub')}
						</span>
					</p>
					<form
						className={classes['introWishlistFormContainer']}
						onSubmit={props.formSubmitHandler}
					>
						<input
							className={classes['introWishlistFormContainer__input']}
							type="email"
							placeholder={t('intro.wishListFormPlaceHolder')}
							formNoValidate
							value={props.emailInput ?? ''}
							onChange={({ currentTarget: { value } }) => props.emailInputChangeHandler(value)}
						/>
						<button className={classes['introWishlistFormContainer__submit']} type="submit">
							{t('intro.wishListFormButton')}
						</button>
						{props.emailValidation && (
							<span className={validationMessageClassName ?? ''}>{validationMessage}</span>
						)}
						<button className={classes['introWishlistFormContainer__submitIpad']} type="submit">
							<VSvg name="submitButton" />
						</button>
					</form>
				</div>
				<div className={classes['introSection__webImg']}>
					<Image
						src={introImgWebResponsive}
						alt="Intro image"
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
