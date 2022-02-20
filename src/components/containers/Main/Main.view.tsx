import React from 'react';

import DoingIt from './DoingIt';
import DoingItCarousel from './DoingItCarousel';
import Intro from './Intro';
import JoinWishlist from './JoinWishlist';
// import RecommenderApp from './RecommenderApp';
import Seller from './Seller';
import TypicalMarketplaces from './TypicalMarketplaces';

interface IProps {
	readonly joinersCount: number;
}

const MainView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<>
			<Intro joinersCount={props.joinersCount} />
			<TypicalMarketplaces />
			<DoingIt />
			<DoingItCarousel />
			{/* <RecommenderApp /> */}
			<JoinWishlist joinersCount={props.joinersCount} />
			<Seller />
		</>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
