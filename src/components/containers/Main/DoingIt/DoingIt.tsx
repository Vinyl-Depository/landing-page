import React from 'react';

import DoingItView from './DoingIt.view';

interface IProps {}

const DoingIt: React.FC<IProps> = () => {
	return <DoingItView />;
};

DoingIt.displayName = 'DoingIt';
DoingIt.defaultProps = {};

export default React.memo(DoingIt);
