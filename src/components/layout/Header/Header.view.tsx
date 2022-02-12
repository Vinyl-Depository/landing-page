import React from 'react';
import { useTranslation } from 'react-i18next';

import brandLogo from '@/images/brand-logo.png';
import playStoreLogo from '@/images/google-play.png';
import appStoreLogo from '@/images/app-store.png';

import VSvg from '@/ui/VSvg';

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
					<a className={classes['headerLogo']} href="../../pages/Main/Main.tsx">
						<img className={classes['headerLogo__img']} src={brandLogo} alt="Vinyl Depository" />
					</a>
					<a className={classes['headerContact']}>{t('header.contactUs')}</a>
				</div>
				<div className={classes['rightHeader']}>
					<p className={classes['rightHeader__text']}>{t('header.rightHeaderText')}</p>
					<a
						className={`${classes['rightHeaderButton']} ${classes['rightHeaderButton--android']}`}
						href="../../pages/Main/Main.tsx"
					>
						<img
							className={classes['rightHeaderButton__img']}
							src={playStoreLogo}
							alt="android button"
						/>
					</a>
					<a className={classes['rightHeaderButton']} href="../../pages/Main/Main.tsx">
						<img
							className={classes['rightHeaderButton__img']}
							src={appStoreLogo}
							alt="apple button"
						/>
					</a>
				</div>
			</header>
		</div>
	);
};

HeaderView.displayName = 'HeaderOneView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
