module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-prettier-scss',
		'stylelint-config-recess-order',
	],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'selector-class-pattern': [
			'^[a-z][A-Za-z0-9]*((--([a-z][A-Za-z0-9]*)(__([a-z][A-Za-z0-9]*))?)|(__([a-z][A-Za-z0-9]*)(--([a-z][A-Za-z0-9]*))?))?$',
			{ resolveNestedSelectors: true, message: 'Expected class selector to be camel case' },
		],
		'value-no-vendor-prefix': null,

		'scss/at-import-partial-extension': null,
	},
};
