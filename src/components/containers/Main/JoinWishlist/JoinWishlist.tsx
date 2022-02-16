import React from 'react';

import JoinWishlistView from './JoinWishlist.view';

interface IProps {
	readonly joinersCount: number;
}

const JoinWishlist: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <JoinWishlistView joinersCount={props.joinersCount} />;
};

JoinWishlist.displayName = 'JoinWishlist';
JoinWishlist.defaultProps = {};

export default React.memo(JoinWishlist);
