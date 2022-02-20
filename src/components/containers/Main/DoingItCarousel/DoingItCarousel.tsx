import React, { useState } from 'react';

import DoingItCarouselView from './DoingItCarousel.view';

interface IProps {}

const DoingItCarousel: React.FC<IProps> = () => {
	const [selectedItemIndexState, setSelectedItemIndexState] = useState<number>(0);

	const setSelectedItemIndex = (index: number) => setSelectedItemIndexState(() => index);

	return (
		<DoingItCarouselView
			selectedItemIndex={selectedItemIndexState}
			setSelectedItemIndex={setSelectedItemIndex}
		/>
	);
};

DoingItCarousel.displayName = 'DoingItCarousel';
DoingItCarousel.defaultProps = {};

export default React.memo(DoingItCarousel);
