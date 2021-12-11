import React, { CSSProperties } from 'react';

import icons from '../../../assets/icons';

import VSvgView from './VSvg.view';

interface Props {
	readonly name: keyof typeof icons;
	readonly className?: string;
	readonly style?: CSSProperties;
	readonly onClick?: () => void;
}

const VSvg: React.FC<Props> = (props: React.PropsWithChildren<Props>) => {
	return (
		<VSvgView style={props.style} className={props.className} name={props.name} onClick={props.onClick}>
			{props.children}
		</VSvgView>
	);
};

VSvg.displayName = 'VSvg';
VSvg.defaultProps = {};

export default React.memo(VSvg);
