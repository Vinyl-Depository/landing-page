import React from 'react';

import SellerView from './Seller.view';

interface Props {}

const Seller: React.FC<Props> = () => {
	return <SellerView></SellerView>;
};

Seller.displayName = 'Seller';
Seller.defaultProps = {};

export default React.memo(Seller);
