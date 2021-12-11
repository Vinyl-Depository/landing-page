import React from 'react';

import HeaderView from './Header.view';

interface Props {}

const HeaderOne: React.FC<Props> = () => {
	return <HeaderView></HeaderView>;
};

HeaderOne.displayName = 'HeaderOne';
HeaderOne.defaultProps = {};

export default React.memo(HeaderOne);
