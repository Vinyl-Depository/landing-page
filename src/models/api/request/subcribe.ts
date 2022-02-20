import { NextApiRequest } from 'next';

export interface ISubscribeRequest extends NextApiRequest {
	readonly body: Readonly<{
		email: string;
	}>;
}

export interface ISubscribeSellerRequest extends NextApiRequest {
	readonly body: Readonly<{
		email: string;
		firstName: string;
		country: string;
	}>;
}
