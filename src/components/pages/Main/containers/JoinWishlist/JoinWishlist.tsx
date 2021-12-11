import React from 'react';

import JoinWishlistView from './JoinWishlist.view';

interface Props {}

const JoinWishlist: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
	return <JoinWishlistView>{props.children}</JoinWishlistView>;
};

JoinWishlist.displayName = 'JoinWishlist';
JoinWishlist.defaultProps = {};

export default React.memo(JoinWishlist);
