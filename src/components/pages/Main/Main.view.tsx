import React from 'react';

import Header from '../../layout/Header/Header';
import Intro from '../../pages/Main/containers/Intro/Intro';
import TypicalMarketplaces from './containers/TypicalMarketplaces/TypicalMarketplaces';
import DoingIt from '../../pages/Main/containers/DoingIt/DoingIt';
// import RecommenderApp from '../../pages/Main/containers/RecommenderApp/RecommenderApp';
import JoinWishlist from '../../pages/Main/containers/JoinWishlist/JoinWishlist';
import Sellers from '../../pages/Main/containers/Seller/Seller';
import Footer from '../../layout/Footer/Footer';
import Carousel from '../../pages/Main/containers/DoingItCarousel/DoingItCarousel';

interface IProps {}

const MainView: React.FC<IProps> = () => {
	return (
		<React.Fragment>
			<Header />
			<Intro />
			<TypicalMarketplaces />
			<DoingIt />
			<Carousel />

			{/* <RecommenderApp /> */}
			<JoinWishlist />
			<Sellers />
			<Footer />
		</React.Fragment>
	);
};

MainView.displayName = 'MainView';
MainView.defaultProps = {};

export default React.memo(MainView);
