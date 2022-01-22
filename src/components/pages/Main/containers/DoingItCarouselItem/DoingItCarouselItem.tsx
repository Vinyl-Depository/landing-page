import React from 'react';

import DoingItCarouselItemView from './DoingItCarouselItem.view';

interface IProps {
	readonly image: string;
	readonly title: string;
	readonly text: string;
}

const DoingItCarouselItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<DoingItCarouselItemView image={props.image} title={props.title} text={props.text}>
			{props.children}
		</DoingItCarouselItemView>
	);
};

DoingItCarouselItem.displayName = 'DoingItCarouselItem';
DoingItCarouselItem.defaultProps = {};

export default React.memo(DoingItCarouselItem);