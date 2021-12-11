import React from 'react';

import DoingItCarouselView from './DoingItCarousel.view';

interface Props {}

const DoingItCarousel: React.FC<Props> = () => {
	return <DoingItCarouselView></DoingItCarouselView>;
};

DoingItCarousel.displayName = 'DoingItCarousel';
DoingItCarousel.defaultProps = {};

export default React.memo(DoingItCarousel);
