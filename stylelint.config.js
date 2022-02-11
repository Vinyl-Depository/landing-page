module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-standard-scss',
		'stylelint-config-prettier',
		'stylelint-config-prettier-scss',
	],
	plugins: ['stylelint-scss', 'stylelint-order'],
	rules: {
		'scss/at-import-partial-extension': false,
	},
};
