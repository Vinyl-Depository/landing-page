import React from 'react';

import HeaderView from './Header.view';

interface IProps {}

const HeaderOne: React.FC<IProps> = () => {
	return <HeaderView></HeaderView>;
};

HeaderOne.displayName = 'HeaderOne';
HeaderOne.defaultProps = {};

export default React.memo(HeaderOne);
