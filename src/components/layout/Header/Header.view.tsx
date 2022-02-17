import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import brandLogo from '@/images/brand-logo.png';
import playStoreLogo from '@/images/google-play.png';
import appStoreLogo from '@/images/app-store.png';

import VSvg from '@/ui/VSvg';

import { concatClasses } from '@/utils/component';

import classes from './Header.module.scss';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['headerContainer']}>
			<header className={classes['header']}>
				<div className={classes['mobileHeadrMenu']}>
					<VSvg className={classes['mobileHeaderMenu__icon']} name="hamburgerMenu" />
				</div>
				<div className={classes['leftHeader']}>
					<Link href="/" passHref>
						<a className={classes['leftHeader__logo']}>
							<Image
								src={brandLogo}
								alt="Vinyl Depository"
								placeholder="blur"
								layout="fill"
								objectFit="contain"
							/>
						</a>
					</Link>
					<Link href={'.sellersSection'}>
						<a className={classes['headerContact']}>{t('header.contactUs')}</a>
					</Link>
				</div>
				<div className={classes['rightHeader']}>
					<p className={classes['rightHeader__text']}>{t('header.rightHeaderText')}</p>
					<Link href="yazif.com" passHref>
						<a
							className={concatClasses(
								classes,
								'rightHeader__button',
								'rightHeader__button--android',
							)}
						>
							<Image
								src={playStoreLogo}
								alt="android button"
								placeholder="blur"
								layout="fill"
								objectFit="contain"
							/>
						</a>
					</Link>
					<Link href="yazif.com" passHref>
						<a className={classes['rightHeader__button']}>
							<Image
								src={appStoreLogo}
								alt="apple button"
								placeholder="blur"
								layout="fill"
								objectFit="contain"
							/>
						</a>
					</Link>
				</div>
			</header>
		</div>
	);
};

HeaderView.displayName = 'HeaderOneView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
