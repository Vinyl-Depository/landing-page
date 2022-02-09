import React from 'react';

import JoinWishlistView from './JoinWishlist.view';

interface IProps {}

const JoinWishlist: React.FC<IProps> = () => {
	return <JoinWishlistView />;
};

JoinWishlist.displayName = 'JoinWishlist';
JoinWishlist.defaultProps = {};

export default React.memo(JoinWishlist);
