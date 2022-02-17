import React from 'react';

import icons from 'src/icons';

import VSvg from '../VSvg';

import classes from './VSelect.module.scss';

interface IProps {
	readonly placeholder: string;
	readonly options: ReadonlyArray<string>;
	readonly selectedOption: string | null;
	readonly isOpen: boolean;
	readonly className?: string;
	readonly iconName?: keyof typeof icons | null;
	readonly onSelectOption: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: string) => void;
	readonly onCloseOptions: () => void;
	readonly onOpenOptions: () => void;
}

const VSelectView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = classes['container'] + (props.className ? ` ${props.className}` : '');

	return (
		<div className={containerClasses} onClick={props.onOpenOptions}>
			<span className={classes['container__text']}>{props.selectedOption ?? props.placeholder}</span>
			{props.iconName && <VSvg name={props.iconName} className={classes['container__icon']} />}

			{props.isOpen && (
				<div className={classes['optionsContainer']}>
					{props.options.map((option, index) => (
						<span
							key={index}
							className={classes['optionsContainer__option']}
							onClick={(event) => props.onSelectOption(event, option)}
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
