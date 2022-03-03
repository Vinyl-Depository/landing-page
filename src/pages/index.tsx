import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import Main from '@/containers/Main';
import { updateCounter } from '@/utils/counter';

interface IProps {
	readonly joinersCount: number;
}

const Home: NextPage<IProps> = (props) => {
	return <Main joinersCount={props.joinersCount} />;
};

Home.displayName = 'Home';
Home.defaultProps = {};

export const getStaticProps: GetStaticProps = () => {
	const joinersCount = updateCounter();

	return {
		props: { joinersCount },
		revalidate: 25200,
	};
};

export default Home;
