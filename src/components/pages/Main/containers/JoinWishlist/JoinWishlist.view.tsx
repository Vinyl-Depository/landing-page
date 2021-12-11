import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import VSvg from '../../../../ui/VSvg/VSvg';

import vinylLogo from '../../../../../assets/images/join-whistlist-vinyl-logo.png';
import emailLogo from '../../../../../assets/images/join-whistlist-emails.png';

import classes from './JoinWishlist.module.scss';

interface Props {}

const JoinWishlistView: React.FC<Props> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['joinWishlistSectionContainer']}>
			<section className={classes['joinWishlistSection']}>
				<div className={classes['joinWishlistSection-logos']}>
					<img className={classes['joinWishlistSection-logos__vinylLogo']} src={vinylLogo} alt="Join whistlist" />
					<img className={classes['joinWishlistSection-logos__emailLogo']} src={emailLogo} alt="Join whistlist emails" />
				</div>
				<div className={classes['joinWishlistText']}>
					<h2 className={classes['joinWishlistHeader']}>
						<Trans i18nKey="joinWishlist.header" />
						<span className={classes['joinWishlistHeader__counter']}></span>
						{/*need to apply the '569' into a diffrent coloer  */}
					</h2>
					<form className={classes['joinWishlistForm']}>
						<input
							className={classes['joinWishlistForm__input']}
							type="email"
							placeholder={t('joinWishlist.formPlaceholder')}
						/>
						<button className={classes['joinWishlistForm__submit']} type="submit">
							{t('joinWishlist.button')}
						</button>
						<button className={classes['joinWishlistForm__mobileSubmit']}>
							<VSvg name="submitButton" />
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

JoinWishlistView.displayName = 'JoinWishlistView';
JoinWishlistView.defaultProps = {};

export default React.memo(JoinWishlistView);
