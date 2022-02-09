import React from 'react';

import SellerView from './Seller.view';

interface IProps {}

const Seller: React.FC<IProps> = () => {
	return <SellerView />;
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
