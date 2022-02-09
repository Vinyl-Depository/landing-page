import type { GetStaticProps, NextPage } from 'next';

import Main from '@/containers/Main';

interface IProps {
	readonly joinersCount: number;
}

const Home: NextPage<IProps> = (props) => {
	return <Main joinersCount={props.joinersCount} />;
};

export const getStaticProps: GetStaticProps = () => {
	const joinersCount = 20;

	return {
		props: { joinersCount },
		revalidate: 60 * 5,
	};
};

export default Home;
