export {};

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly MAILCHIMP_API_KEY: string;
			readonly MAILCHIMP_LIST_ID: string;
			readonly MAILCHIMP_APPROVAL_LANDING_SUB_TAG: string;
		}
	}
}
