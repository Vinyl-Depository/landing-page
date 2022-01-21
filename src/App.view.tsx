import React from 'react';

import Main from './components/pages/Main/Main';
import { Fragment } from 'react';
interface IProps {}

const AppView: React.FC<IProps> = () => {
	return (
		<Fragment>
			<Main></Main>
		</Fragment>
	);
};

AppView.displayName = 'AppView';
AppView.defaultProps = {};

export default React.memo(AppView);
