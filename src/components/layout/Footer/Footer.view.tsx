import React from 'react';
import Image from 'next/image';
import { Trans } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import brandLogo from '@/images/brand-logo-white.png';

import classes from './Footer.module.scss';

interface IProps {}

const FooterView: React.FC<IProps> = () => {
	return (
		<footer className={classes['footer']} data-test-id="footer">
			<div className={classes['footer__logo']}>
				<Image
					src={brandLogo}
					alt="Vinyl Depository"
					placeholder="blur"
					layout="fill"
					objectFit="contain"
				/>
			</div>

			<div className={classes['footerText']}>
				<span className={concatClasses(classes, 'footerText__text', 'footerText__text--withMargin')}>
					<Trans i18nKey="footer.middleText" />
				</span>
				<div className={classes['rightFooterTextContainer']}>
					<span className={classes['rightFooterTextContainer__text']}>
						<Trans i18nKey="footer.rightText" />
					</span>
					<span className={classes['rightFooterTextContainer__text']}>&nbsp;</span>
					<a
						href="http://pages.flycricket.io/vinyl-depository-br/privacy.html"
						target="_blank"
						className={classes['rightFooterTextContainer__text']}
						rel="noreferrer"
					>
						<Trans i18nKey="footer.privacyPolicy" />
					</a>
				</div>
			</div>
		</footer>
	);
};

FooterView.displayName = 'FooterView';
FooterView.defaultProps = {};

export default React.memo(FooterView);
