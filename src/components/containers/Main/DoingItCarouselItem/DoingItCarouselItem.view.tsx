import React from 'react';

import classes from './DoingItCarouselItem.module.scss';

interface IProps {
	readonly image: StaticImageData;
	readonly title: string;
	readonly text: string | JSX.Element;
	readonly children?: React.ReactNode;
}

const DoingItCarouselItemView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<img className={classes['container__img']} src={props.image} alt={props.title} />
			<h4 className={classes['container__title']}>{props.title}</h4>
			<span className={classes['container__text']}>{props.text}</span>
		</div>
	);
};

DoingItCarouselItemView.displayName = 'DoingItCarouselItemView';
DoingItCarouselItemView.defaultProps = {};

export default React.memo(DoingItCarouselItemView);
