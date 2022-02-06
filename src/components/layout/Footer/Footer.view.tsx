import React from 'react';
import { Trans } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import brandLogo from '../../../assets/images/brand-logo-white.png';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return (
		<footer className={classes['footer']}>
			<img className={classes['footer__logo']} src={brandLogo} alt="Vinyl Depository" />
			<div className={classes['footerText']}>
				<span className={concatClasses(classes, 'footerText__text', 'footerText__text--withMargin')}>
					<Trans i18nKey="footer.middleText" />
				</span>
				<span className={classes['footerText__text']}>
					<Trans i18nKey="footer.rightText" />
				</span>
			</div>
		</footer>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
