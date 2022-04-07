import axios, { AxiosError } from 'axios';

const MAILCHIMP_SERVER = process.env.MAILCHIMP_API_KEY?.split('-')[1];
const AUTH_BUFFER = Buffer.from(`any:${process.env.MAILCHIMP_API_KEY}`).toString('base64');

const mailchimpAxios = axios.create({
	baseURL: `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0`,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': `Basic ${AUTH_BUFFER}`,
	},
});

const MailchimpAPI = {
	post: <T>(url: string, body: Record<string, unknown>) => {
		return mailchimpAxios.post<T>(url, body);
	},
	get: <T>(url: string) => {
		return mailchimpAxios.get<T>(url);
	},
};

export interface IMailchimpError<T = unknown> extends AxiosError<T> {}

export default MailchimpAPI;
