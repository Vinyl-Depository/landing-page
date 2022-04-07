import { validateEmail } from '@/utils/validators';

describe('[utils/validators]', () => {
	it('validateEmail | Function should return false for empty email', () => {
		const result = validateEmail('');

		expect(result === false).toEqual(true);
	});

	it('validateEmail | Function should return false for invalid email', () => {
		const result = validateEmail('TEST');

		expect(result === false).toEqual(true);
	});

	it('validateEmail | Function should return true for valid email', () => {
		const result = validateEmail('TEST@TEST.com');

		expect(result === true).toEqual(true);
	});
});
