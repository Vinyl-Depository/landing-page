import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

import { concatClasses } from '../../../../../utils/component';

import browseImg from '../../../../../assets/images/doing-it-browse.jpg';
import searchImg from '../../../../../assets/images/doing-it-search.jpg';
import pileUpImg from '../../../../../assets/images/doing-it-pileup.jpg';
import personalizedImg from '../../../../../assets/images/doing-it-personalized.jpg';
import sellerImg from '../../../../../assets/images/doing-it-seller.jpg';

import DoingItCarouselItem from '../DoingItCarouselItem/DoingItCarouselItem';
import VSvg from '../../../../ui/VSvg/VSvg';

import classes from './DoingItCarousel.module.scss';

interface IProps {
	readonly selectedItemIndex: number;
	readonly setSelectedItemIndex: (_: number) => void;
}

const DoingItCarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	const renderIndicator = (_: (e: React.MouseEvent | React.KeyboardEvent) => void, isSelected: boolean, index: number) => {
		if (isSelected) {
			return <button className={concatClasses(classes, 'indicator', 'indicator--selected')} type="button" role="button"></button>;
		}

		return (
			<button className={classes['indicator']} onClick={() => props.setSelectedItemIndex(index)} type="button" role="button"></button>
		);
	};

	const renderArrowPrev = (clickHandler: () => void, hasPrev: boolean) => {
		if (!hasPrev) {
			return null;
		}

		return <VSvg className={concatClasses(classes, 'arrow', 'arrow--prev')} name="carouselArrow" onClick={clickHandler} />;
	};

	const renderArrowNext = (clickHandler: () => void, hasNext: boolean) => {
		if (!hasNext) {
			return null;
		}

		return <VSvg className={concatClasses(classes, 'arrow', 'arrow--next')} name="carouselArrow" onClick={clickHandler} />;
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
			<DoingItCarouselItem image={browseImg} title={t('doingIt.browse.title')} text={t('doingIt.browse.description')} />
			<DoingItCarouselItem image={searchImg} title={t('doingIt.search.title')} text={t('doingIt.search.description')} />
			<DoingItCarouselItem image={pileUpImg} title={t('doingIt.pileUp.title')} text={t('doingIt.pileUp.description')} />
			<DoingItCarouselItem
				image={personalizedImg}
				title={t('doingIt.personalizedExperience.title')}
				text={t('doingIt.personalizedExperience.description')}
			/>
			<DoingItCarouselItem
				image={sellerImg}
				title={t('doingIt.trustedSellers.title')}
				text={t('doingIt.trustedSellers.description')}
			/>
		</Carousel>
	);
};

DoingItCarouselView.displayName = 'DoingItCarouselView';
DoingItCarouselView.defaultProps = {};

export default React.memo(DoingItCarouselView);
