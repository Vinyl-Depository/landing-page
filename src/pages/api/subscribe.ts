import { NextApiResponse } from 'next';
import Mailchimp from 'mailchimp-api-v3';

import { ISubscribeRequest } from '@/models/api/request/subcribe';
import { ISubscribeResponse } from '@/models/api/response/subscribe';
import { validateEmail } from '@/utils/validators';

export default async function handler(req: ISubscribeRequest, res: NextApiResponse<ISubscribeResponse>) {
	if (req.method === 'POST') {
		// Validate the provided email is string and matches the email regex
		if (typeof req.body.email !== 'string' || !validateEmail(req.body.email)) {
			res.status(400).send({
				success: false,
				message: 'Provided invalid email',
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
