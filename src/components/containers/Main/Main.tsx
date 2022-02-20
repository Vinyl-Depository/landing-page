import React from 'react';

import MainView from './Main.view';

interface IProps {
	readonly joinersCount: number;
}

const Main: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <MainView joinersCount={props.joinersCount} />;
};

Main.displayName = 'Main';
Main.defaultProps = {};

export default React.memo(Main);
