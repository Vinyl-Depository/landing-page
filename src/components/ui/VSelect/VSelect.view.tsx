import React from 'react';

import { concatDiverseClasses } from '@/utils/component';

import icons from 'src/icons';

import VSvg from '../VSvg';

import classes from './VSelect.module.scss';

type UtilitiesClasses = 'container' | 'placeholder' | 'optionsContainer' | 'optionText' | 'icon';

interface IProps {
	readonly selectedIndex: number | null;
	readonly innerRef: React.RefObject<HTMLDivElement>;
	readonly placeholder: string;
	readonly options: ReadonlyArray<string>;
	readonly isOpen: boolean;
	readonly className?: string;
	readonly placeholderClassName?: string;
	readonly optionsContainerClassName?: string;
	readonly optionTextClassName?: string;
	readonly iconClassName?: string;
	readonly iconName?: keyof typeof icons | null;
	readonly onSelectOption: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, index: number) => void;
	readonly onCloseOptions: () => void;
	readonly onOpenOptions: () => void;
}

const VSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const classesMap: Record<UtilitiesClasses, string> = {
		container: concatDiverseClasses(classes['container'], props.className),
		placeholder: concatDiverseClasses(classes['container__text'], props.placeholderClassName),
		optionsContainer: concatDiverseClasses(classes['optionsContainer'], props.optionsContainerClassName),
		optionText: concatDiverseClasses(classes['optionsContainer__option'], props.optionTextClassName),
		icon: concatDiverseClasses(classes['container__icon'], props.iconClassName),
	};

	return (
		<div ref={props.innerRef} className={classesMap.container} onClick={props.onOpenOptions}>
			<span className={classesMap.placeholder}>
				{props.selectedIndex ? props.options[props.selectedIndex] : props.placeholder}
			</span>
			{props.iconName && <VSvg name={props.iconName} className={classesMap.icon} />}

			{props.isOpen && (
				<div className={classesMap.optionsContainer}>
					{props.options.map((option, index) => (
						<span
							key={index}
							className={classesMap.optionText}
							onClick={(event) => props.onSelectOption(event, index)}
						>
							{option}
						</span>
					))}
				</div>
			)}
		</div>
	);
};

VSelectView.displayName = 'VSelectView';
VSelectView.defaultProps = {};

export default React.memo(VSelectView);
