import React from 'react';

import IntroView from './Intro.view';

interface Props {}

const Intro: React.FC<Props> = () => {
	return <IntroView></IntroView>;
};

Intro.displayName = 'Intro';
Intro.defaultProps = {};

export default React.memo(Intro);
