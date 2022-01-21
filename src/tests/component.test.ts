import { concatClasses } from '../utils/component';

describe('[utils/component]', () => {
	it('concatClasses | Function should return empty string for given input of empty object', () => {
		const result = concatClasses({}, 'test');

		expect(result === '').toEqual(true);
	});

	it('concatClasses | Function should return empty string for given input without arguments', () => {
		const result = concatClasses({ testKey: 'testValue' });

		expect(result === '').toEqual(true);
	});

	it('concatClasses | Function should return empty string for given input with nullish arguments', () => {
		const result = concatClasses({ testKey: 'testValue' }, null, null);

		expect(result === '').toEqual(true);
	});

	it('concatClasses | Function should return empty string for given input where the arguments have no matches in the classes object', () => {
		const result = concatClasses({ testKey: 'testValue' }, 'test1', 'test2');

		expect(result === '').toEqual(true);
	});

	it('concatClasses | Function should return "testValue" when provide single argument', () => {
		const result = concatClasses({ testKey: 'testValue' }, 'testKey');

		expect(result === 'testValue').toEqual(true);
	});

	it('concatClasses | Function should return correct result when provide multiple arguments', () => {
		const result = concatClasses({ testKey: 'testValue', testKeyMore: 'testValueMore' }, 'testKey', 'testKeyMore');

		expect(result === 'testValue testValueMore').toEqual(true);
	});
});
