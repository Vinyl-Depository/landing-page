import React from 'react';
import type { NextPage } from 'next';

import PageNotFound from '@/containers/PageNotFound';

const NotFound: NextPage = () => {
	NotFound.displayName = 'NotFound';

	return <PageNotFound />;
};

export default NotFound;
