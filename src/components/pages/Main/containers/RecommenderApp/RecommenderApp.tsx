import React from 'react';

import RecommenderAppView from './RecommenderApp.view';

interface IProps {}

const RecommenderApp: React.FC<IProps> = () => {
	return <RecommenderAppView></RecommenderAppView>;
};

RecommenderApp.displayName = 'RecommenderApp';
RecommenderApp.defaultProps = {};

export default React.memo(RecommenderApp);
