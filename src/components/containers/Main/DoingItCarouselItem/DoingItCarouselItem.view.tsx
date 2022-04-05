import React from 'react';
import Image, { type StaticImageData } from 'next/image';

import classes from './DoingItCarouselItem.module.scss';

interface IProps {
	readonly image: StaticImageData;
	readonly title: string;
	readonly text: string | JSX.Element;
	readonly testId?: string;
	readonly children?: React.ReactNode;
}

const DoingItCarouselItemView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']} data-test-id={props.testId}>
			<div className={classes['container__img']}>
				<Image
					src={props.image}
					alt={props.title}
					placeholder="blur"
					objectFit="contain"
					layout="fill"
				/>
			</div>
			<h4 className={classes['container__title']}>{props.title}</h4>
			<span className={classes['container__text']}>{props.text}</span>
		</div>
	);
};

DoingItCarouselItemView.displayName = 'DoingItCarouselItemView';
DoingItCarouselItemView.defaultProps = {};

export default React.memo(DoingItCarouselItemView);
