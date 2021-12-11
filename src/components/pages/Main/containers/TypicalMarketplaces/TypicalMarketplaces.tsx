import React from 'react';

import TypicalMarketplacesView from './TypicalMarketplaces.view';

interface Props {}

const TypicalMarketplaces: React.FC<Props> = () => {
	return <TypicalMarketplacesView></TypicalMarketplacesView>;
};

TypicalMarketplaces.displayName = 'TypicalMarketplaces';
TypicalMarketplaces.defaultProps = {};

export default React.memo(TypicalMarketplaces);
