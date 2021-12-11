import React from 'react';

import FooterView from './Footer.view';

interface Props {}

const Footer: React.FC<Props> = () => {
	return <FooterView></FooterView>;
};

Footer.displayName = 'Footer';
Footer.defaultProps = {};

export default React.memo(Footer);
