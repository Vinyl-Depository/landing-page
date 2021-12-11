import React from 'react';

import DoingItView from './DoingIt.view';

interface Props {}

const DoingIt: React.FC<Props> = () => {
	return <DoingItView></DoingItView>;
};

DoingIt.displayName = 'DoingIt';
DoingIt.defaultProps = {};

export default React.memo(DoingIt);
