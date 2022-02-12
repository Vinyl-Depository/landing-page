import { NextApiResponse } from 'next';
import Mailchimp from 'mailchimp-api-v3';

import { ISubscribeSellerRequest } from '@/models/api/request/subcribe';
import { ISubscribeSellerResponse } from '@/models/api/response/subscribe';
import { validateEmail } from '@/utils/validators';
import { countriesList } from '@/data/countries';

export default async function handler(
	req: ISubscribeSellerRequest,
	res: NextApiResponse<ISubscribeSellerResponse>,
) {
	if (req.method === 'POST') {
		// Validate the provided email is string and matches the email regex
		if (typeof req.body.email !== 'string' || !validateEmail(req.body.email)) {
			res.status(400).send({
				success: false,
				message: 'Provided invalid email',
			});

			return;
		}

		// Validate the provided first name is non-empty string
		if (typeof req.body.firstName !== 'string' || req.body.firstName === '') {
			res.status(400).send({
				success: false,
				message: 'Provided invalid first name',
			});

			return;
		}

		// Validate the provided country is valid
		if (typeof req.body.country !== 'string' || !countriesList.includes(req.body.country)) {
			res.status(400).send({
				success: false,
				message: 'Provided invalid country',
			});

			return;
		}

		const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);

		// Try to store the email in mailchimp
		try {
			await mailchimp.post(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
				email_address: req.body.email,
				status: 'subscribed',
				tags: [process.env.MAILCHIMP_APPROVAL_LANDING_SUB_TAG],
				merge_fields: {
					FNAME: req.body.firstName,
					COUNTRY: req.body.country,
				},
			});

			res.status(200).send({
				success: true,
				message: 'Successfully fulfilled subscription action',
			});

			return;
		} catch (e) {
			res.status(500).send({
				success: false,
				message: e as string,
			});

			return;
		}
	}

	res.status(404).send({
		success: false,
		message: 'Invalid API call',
	});

	return;
}
