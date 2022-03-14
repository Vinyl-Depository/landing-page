import React from 'react';
import type { NextPage } from 'next';
// import Mailchimp from 'mailchimp-api-v3';

import Main from '@/containers/Main';

// interface IListMembersData {
// 	readonly stats: { readonly member_count: number };
// }

interface IProps {
	readonly joinersCount: number;
}

const Home: NextPage<IProps> = (props) => {
	return <Main joinersCount={props.joinersCount} />;
};

Home.displayName = 'Home';
Home.defaultProps = {};

// export const getStaticProps: GetStaticProps = async () => {
// 	const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

// 	try {
// 		const listMembersData: IListMembersData = await mailchimp.get(
// 			`/lists/${process.env.MAILCHIMP_LIST_ID}`,
// 		);

// 		return {
// 			props: { joinersCount: listMembersData.stats.member_count },
// 			revalidate: 25200,
// 		};
// 	} catch {
// 		return console.log('error');
// 	}
// };

export default Home;
