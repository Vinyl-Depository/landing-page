import React from 'react';

import MainView from './Main.view';

interface Props {}

const Main: React.FC<Props> = () => {
	return <MainView></MainView>;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
