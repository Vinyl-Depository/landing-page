import React from 'react';

import { NextPage } from 'next';
// eslint-disable-next-line import/no-deprecated
// eslint-disable-next-line import/default

import PageNotFound from '@/containers/PageNotFound';

interface IProps {}

// eslint-disable-next-line react/display-name
const NotFound: NextPage<IProps> = () => {
	return <PageNotFound />;
};

export default NotFound;
