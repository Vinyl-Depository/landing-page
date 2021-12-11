import React from 'react';

import Main from './components/pages/Main/Main';
import { Fragment } from 'react';
interface Props {}

const AppView: React.FC<Props> = () => {
	return (
		<Fragment>
			<Main></Main>
		</Fragment>
	);
};

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
