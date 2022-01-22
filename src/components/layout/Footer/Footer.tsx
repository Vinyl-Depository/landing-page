import React from 'react';

import FooterView from './Footer.view';

interface IProps {}

const Footer: React.FC<IProps> = () => {
	return <FooterView></FooterView>;
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default React.memo(Footer);
