import React from 'react';
import type { StaticImageData } from 'next/image';

import DoingItCarouselItemView from './DoingItCarouselItem.view';

interface IProps {
	readonly image: StaticImageData;
	readonly title: string;
	readonly text: string | JSX.Element;
	readonly testId?: string;
}

const DoingItCarouselItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<DoingItCarouselItemView
			image={props.image}
			title={props.title}
			text={props.text}
			testId={props.testId}
		/>
	);
};

DoingItCarouselItem.displayName = 'DoingItCarouselItem';
DoingItCarouselItem.defaultProps = {};

export default React.memo(DoingItCarouselItem);
