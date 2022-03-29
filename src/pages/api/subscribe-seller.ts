import { NextApiResponse } from 'next';

import { ISubscribeSellerRequest } from '@/models/api/request/subcribe';
import { ISubscribeSellerResponse } from '@/models/api/response/subscribe';
import { validateEmail } from '@/utils/validators';
import { countriesList } from '@/data/countries';
import * as MailchimpAPI from '@/utils/mailchimp-api';

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

		// Try to store the email in mailchimp
		try {
			await MailchimpAPI.post<void>(`/lists/${process.env.MAILCHIMP_LIST_ID}/members`, {
				email_address: req.body.email,
				status: 'subscribed',
				tags: [
					process.env.MAILCHIMP_APPROVAL_LANDING_SUB_TAG,
					process.env.MAILCHIMP_SELLER_LANDING_SUB,
				],
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
