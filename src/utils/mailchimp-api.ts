import axios from 'axios';

const MAILCHIMP_SERVER = process.env.MAILCHIMP_API_KEY.split('-')[0];
const CLEAR_API_KEY = process.env.MAILCHIMP_API_KEY.split('-')[1];
const AUTHORIZATION_BUFFER = Buffer.from(`any:${CLEAR_API_KEY}`);

const mailchimpAxios = axios.create({
	baseURL: `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0`,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': `Basic ${AUTHORIZATION_BUFFER}`,
	},
});

export const post = <T>(url: string, body: Record<string, unknown>) => {
	return mailchimpAxios.post<T>(url, body);
};
