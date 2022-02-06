import { NextApiRequest } from 'next';

export interface ISubscribeRequest extends NextApiRequest {
	readonly body: {
		readonly email: string;
	};
}
