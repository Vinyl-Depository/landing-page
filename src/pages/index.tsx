import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Mailchimp from 'mailchimp-api-v3';

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
	const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

	const startedDayDate = new Date('2022-03-30').getDate();
	const startedMonthDate = new Date('2022-03-30').getMonth() + 1;
	const currentDayDate = new Date().getDate();
	const currentMonthDate = new Date().getMonth() + 1;

	// Coutner increased every day in the number of days that have been passed since the beginning of the count multiplied 17.
	// Counter refvalidate every 24 hours

	const counter = ((currentMonthDate - startedMonthDate) * 30 + (currentDayDate - startedDayDate)) * 17;

	try {
		const listMembersData: IListMembersData = await mailchimp.get(
			`/lists/${process.env.MAILCHIMP_LIST_ID}`,
		);

		return {
			props: { joinersCount: listMembersData.stats.member_count + counter },
			revalidate: 28800,
		};
	} catch {
		return {
			props: { joinersCount: counter },
			revalidate: 28800,
		};
	}
};

export default Home;
