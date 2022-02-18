import React, { useRef, useState, useEffect } from 'react';

import icons from 'src/icons';

import VSelectView from './VSelect.view';

interface IProps {
	readonly placeholder: string;
	readonly options: ReadonlyArray<string>;
	readonly className?: string;
	readonly placeholderClassName?: string;
	readonly optionsContainerClassName?: string;
	readonly optionTextClassName?: string;
	readonly iconClassName?: string;
	readonly iconName?: keyof typeof icons | null;
}

const VSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedOptionState, setSelectedOptionState] = useState<string | null>(null);
	const [isOpenState, setIsOpenState] = useState<boolean>(false);

	const selectRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const clickHandler = (event: MouseEvent) => {
			if (
				selectRef.current &&
				event.target !== selectRef.current &&
				!selectRef.current.contains(event.target as HTMLElement)
			) {
				setIsOpenState(() => false);
			}
		};

		document.addEventListener('click', clickHandler);

		return () => {
			document.removeEventListener('click', clickHandler);
		};
	}, []);

	const onSelectOption = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: string) => {
		event.stopPropagation();

		setSelectedOptionState(() => option);
		setIsOpenState(() => false);
	};

	const onCloseOptions = () => setIsOpenState(() => false);

	const onOpenOptions = () => setIsOpenState(() => true);

	return (
		<VSelectView
			innerRef={selectRef}
			placeholder={props.placeholder}
			options={props.options}
			selectedOption={selectedOptionState}
			isOpen={isOpenState}
			className={props.className}
			placeholderClassName={props.placeholderClassName}
			optionsContainerClassName={props.optionsContainerClassName}
			optionTextClassName={props.optionTextClassName}
			iconClassName={props.iconClassName}
			iconName={props.iconName}
			onSelectOption={onSelectOption}
			onCloseOptions={onCloseOptions}
			onOpenOptions={onOpenOptions}
		/>
	);
};

VSelect.displayName = 'VSelect';
VSelect.defaultProps = {};

export default React.memo(VSelect);
