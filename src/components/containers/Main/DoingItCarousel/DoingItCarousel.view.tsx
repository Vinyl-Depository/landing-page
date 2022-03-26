import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Trans, useTranslation } from 'react-i18next';

import { concatClasses } from '@/utils/component';

import browseImg from '@/images/doing-it-browse.png';
import searchImg from '@/images/doing-it-search.png';
import pileUpImg from '@/images/doing-it-pileup.png';
import personalizedImg from '@/images/doing-it-personalized.png';
import sellerImg from '@/images/doing-it-seller.png';

import VSvg from '@/ui/VSvg';

import DoingItCarouselItem from '../DoingItCarouselItem';

import classes from './DoingItCarousel.module.scss';

interface IProps {
	readonly selectedItemIndex: number;
	readonly setSelectedItemIndex: (_: number) => void;
}

const DoingItCarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const renderIndicator = (
		_: (e: React.MouseEvent | React.KeyboardEvent) => void,
		isSelected: boolean,
		index: number,
	) => {
		if (isSelected) {
			return (
				<button
					className={concatClasses(classes, 'indicator', 'indicator--selected')}
					type="button"
					role="button"
				/>
			);
		}

		return (
			<button
				className={classes['indicator']}
				type="button"
				role="button"
				onClick={() => props.setSelectedItemIndex(index)}
			/>
		);
	};

	const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
		if (!hasPrev) {
			return null;
		}

		return (
			<VSvg
				className={concatClasses(classes, 'arrow', 'arrow--prev')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
		if (!hasNext) {
			return null;
		}

		return (
			<VSvg
				className={concatClasses(classes, 'arrow', 'arrow--next')}
				name="carouselArrow"
				onClick={clickHandler}
			/>
		);
	};

	return (
		<Carousel
			className={classes['carousel']}
			selectedItem={props.selectedItemIndex}
			showThumbs={false}
			showStatus={false}
			renderIndicator={renderIndicator}
			renderArrowPrev={renderArrowPrev}
			renderArrowNext={renderArrowNext}
		>
			<DoingItCarouselItem
				image={browseImg}
				title={t('doingIt.browse.title')}
				text={<Trans i18nKey="doingIt.browse.description" />}
				testId="doing-it-carousel-first-item"
			/>
			<DoingItCarouselItem
				image={searchImg}
				title={t('doingIt.search.title')}
				text={<Trans i18nKey="doingIt.search.description" />}
			/>
			<DoingItCarouselItem
				image={pileUpImg}
				title={t('doingIt.pileUp.title')}
				text={<Trans i18nKey="doingIt.pileUp.description" />}
			/>
			<DoingItCarouselItem
				image={personalizedImg}
				title={t('doingIt.personalizedExperience.title')}
				text={<Trans i18nKey="doingIt.personalizedExperience.description" />}
			/>
			<DoingItCarouselItem
				image={sellerImg}
				title={t('doingIt.trustedSellers.title')}
				text={<Trans i18nKey="doingIt.trustedSellers.description" />}
			/>
		</Carousel>
	);
};

DoingItCarouselView.displayName = 'DoingItCarouselView';
DoingItCarouselView.defaultProps = {};

export default React.memo(DoingItCarouselView);
