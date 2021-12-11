import React from 'react';

import AppView from './App.view';

interface Props {}

const App: React.FC<Props> = () => {
	return <AppView />;
};

export default React.memo(App);
