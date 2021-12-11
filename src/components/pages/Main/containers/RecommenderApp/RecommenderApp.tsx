import React from 'react';

import RecommenderAppView from './RecommenderApp.view';

interface Props {}

const RecommenderApp: React.FC<Props> = () => {
	return <RecommenderAppView></RecommenderAppView>;
};

RecommenderApp.displayName = 'RecommenderApp';
RecommenderApp.defaultProps = {};

export default React.memo(RecommenderApp);
