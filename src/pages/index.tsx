import React from 'react';
import type { GetStaticProps, NextPage } from 'next';

import MailchimpAPI from '@/utils/mailchimp-api';
import Main from '@/containers/Main';

interface IListMembersData {
	readonly stats: { readonly member_count: number };
}

interface IProps {
	readonly joinersCount: number;
}

const Home: NextPage<IProps> = (props) => {
	return <Main joinersCount={props.joinersCount} />;
};

Home.displayName = 'Home';
Home.defaultProps = {};

export const getStaticProps: GetStaticProps = async () => {
	// Counter increases in the number of days that have been passed since the beginning of the count multiplied 17.
	// Counter refvalidate every 24 hours

	const initialDate = new Date('2022-04-07');
	const currentDate = new Date();
	const msDiffernce = Math.abs(currentDate.getTime() - initialDate.getTime());
	const daysDifference = Math.ceil(msDiffernce / (1000 * 60 * 60 * 24));
	const counterBias = daysDifference * 17;

	try {
		const listMembersData = await MailchimpAPI.get<IListMembersData>(
			`/lists/${process.env.MAILCHIMP_LIST_ID}`,
		);

		return {
			props: { joinersCount: listMembersData.data.stats.member_count + counterBias },
			revalidate: 28800,
		};
	} catch {
		return {
			props: { joinersCount: counterBias },
			revalidate: 28800,
		};
	}
};

export default Home;
