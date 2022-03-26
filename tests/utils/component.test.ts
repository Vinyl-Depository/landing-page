import { concatClasses, concatDiverseClasses } from '@/utils/component';

describe('[utils/component]', () => {
	it('concatClasses | Function should return empty string for given input of empty object', () => {
		const result = concatClasses({}, 'test', 'test2');

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

	it('concatClasses | Function should return correct concatanation when using 2 classes', () => {
		const result = concatClasses(
			{ testKey1: 'testValue1', testKey2: 'testValue2' },
			'testKey1',
			'testKey2',
		);

		expect(result === 'testValue1 testValue2').toEqual(true);
	});

	it('concatClasses | Function should return correct result when provide multiple arguments (more than 2)', () => {
		const result = concatClasses(
			{ testKey: 'testValue', testKeyMore: 'testValueMore', another: 'anotherValue' },
			'testKey',
			'testKeyMore',
			'another',
		);

		expect(result === 'testValue testValueMore anotherValue').toEqual(true);
	});

	it('concatDiverseClasses | Function should return empty string for given input of empty classes', () => {
		const result = concatDiverseClasses('', '');

		expect(result === '').toEqual(true);
	});

	it('concatDiverseClasses | Function should return empty string for given input of undefined classes', () => {
		const result = concatDiverseClasses(undefined, undefined);

		expect(result === '').toEqual(true);
	});

	it('concatDiverseClasses | Function should return correct concatanation when using 2 classes', () => {
		const result = concatDiverseClasses('testKey1', 'testKey2');

		expect(result === 'testKey1 testKey2').toEqual(true);
	});

	it('concatDiverseClasses | Function should return correct result when provide multiple arguments (more than 2)', () => {
		const result = concatDiverseClasses('testKey', 'testKeyMore', 'another');

		expect(result === 'testKey testKeyMore another').toEqual(true);
	});
});
