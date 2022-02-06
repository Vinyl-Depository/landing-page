import React from 'react';

import DoingIt from './DoingIt';
import DoingItCarousel from './DoingItCarousel';
import Intro from './Intro';
import JoinWishlist from './JoinWishlist';
import RecommenderApp from './RecommenderApp';
import Seller from './Seller';
import TypicalMarketplaces from './TypicalMarketplaces';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<Intro />
			<TypicalMarketplaces />
			<DoingIt />
			<DoingItCarousel />
			<RecommenderApp />
			<JoinWishlist />
			<Seller />
		</React.Fragment>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
