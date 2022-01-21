import React from 'react';
import { useTranslation } from 'react-i18next';

import brandLogo from '../../../assets/images/brand-logo.png';
import playStoreLogo from '../../../assets/images/google-play.png';
import appStoreLogo from '../../../assets/images/app-store.png';

import classes from './Header.module.scss';

interface IProps {}

const HeaderView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['headerContainer']}>
			<header className={classes['header']}>
				<div className={classes['mobileHeadrMenu']}>
					<svg
						className={classes['mobileHeadrMenu__icon']}
						viewBox="0 0 37 33"
						width="37"
						height="33"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M.875.833h35.25V4.75H.875V.833Zm0 13.709h35.25v3.916H.875v-3.916Zm0 13.708h35.25v3.917H.875V28.25Z"
							fill="#232233"
						/>
					</svg>
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
						<img className={classes['rightHeaderButton__img']} src={playStoreLogo} alt="android button" />
					</a>
					<a className={classes['rightHeaderButton']} href="../../pages/Main/Main.tsx">
						<img className={classes['rightHeaderButton__img']} src={appStoreLogo} alt="apple button" />
					</a>
				</div>
			</header>
		</div>
	);
};

HeaderView.displayName = 'HeaderOneView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
