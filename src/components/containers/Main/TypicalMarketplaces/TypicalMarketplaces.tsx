import React from 'react';

import TypicalMarketplacesView from './TypicalMarketplaces.view';

interface IProps {}

const TypicalMarketplaces: React.FC<IProps> = () => {
	return <TypicalMarketplacesView />;
};

TypicalMarketplaces.displayName = 'TypicalMarketplaces';
TypicalMarketplaces.defaultProps = {};

export default React.memo(TypicalMarketplaces);
