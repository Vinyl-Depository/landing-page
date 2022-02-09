import React from 'react';

import IntroView from './Intro.view';

interface IProps {
	readonly joinersCount: number;
}

const Intro: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <IntroView joinersCount={props.joinersCount} />;
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
