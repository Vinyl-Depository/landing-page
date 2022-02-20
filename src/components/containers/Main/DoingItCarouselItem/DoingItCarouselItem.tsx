import React from 'react';

import DoingItCarouselItemView from './DoingItCarouselItem.view';

interface IProps {
	readonly image: StaticImageData;
	readonly title: string;
	readonly text: string | JSX.Element;
}

const DoingItCarouselItem: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <DoingItCarouselItemView image={props.image} title={props.title} text={props.text} />;
};

DoingItCarouselItem.displayName = 'DoingItCarouselItem';
DoingItCarouselItem.defaultProps = {};

export default React.memo(DoingItCarouselItem);
