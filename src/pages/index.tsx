import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import Main from '@/containers/Main';

interface IProps {
	readonly joinersCount: number;
}

const Home: NextPage<IProps> = (props) => {
	return <Main joinersCount={props.joinersCount} />;
};

Home.displayName = 'Home';
Home.defaultProps = {};

export const getStaticProps: GetStaticProps = () => {
	const randomNumber = (min: number, max: number) => {
		return Math.floor(Math.random() * (max - min)) + min + 1;
	};

	const today = new Date();
	const day = today.getDate();
	const month = today.getMonth() + 1;

	const joinersCount = day * randomNumber(17, 21) + month * 10;

	return {
		props: { joinersCount },
		revalidate: 86400,
	};
};

export default Home;
