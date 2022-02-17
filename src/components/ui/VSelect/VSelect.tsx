import React, { useState } from 'react';

import icons from 'src/icons';

import VSelectView from './VSelect.view';

interface IProps {
	readonly placeholder: string;
	readonly options: ReadonlyArray<string>;
	readonly className?: string;
	readonly iconName?: keyof typeof icons | null;
}

const VSelect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [selectedOptionState, setSelectedOptionState] = useState<string | null>(null);
	const [isOpenState, setIsOpenState] = useState<boolean>(false);

	const onSelectOption = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: string) => {
		event.stopPropagation();

		setSelectedOptionState(() => option);
		setIsOpenState(() => false);
	};

	const onCloseOptions = () => setIsOpenState(() => false);

	const onOpenOptions = () => setIsOpenState(() => true);

	return (
		<VSelectView
			placeholder={props.placeholder}
			options={props.options}
			selectedOption={selectedOptionState}
			isOpen={isOpenState}
			className={props.className}
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
