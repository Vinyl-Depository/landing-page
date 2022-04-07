declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly MAILCHIMP_API_KEY?: string;
			readonly MAILCHIMP_LIST_ID?: string;
			readonly MAILCHIMP_APPROVAL_LANDING_SUB_TAG?: string;
			readonly MAILCHIMP_SELLER_LANDING_SUB?: string;
			readonly NEXT_PUBLIC_BACKEND_URL?: string;
		}
	}
}

export {};
