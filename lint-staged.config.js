module.exports = {
	'{src,tests}/**/*.{ts,tsx}': ['bash -c tsc', 'eslint --fix'],
	'cypress/**/*.ts': ['tsc -p cypress/tsconfig.json', 'eslint -c cypress/.eslintrc.js --fix'],
	'src/**/*.scss': 'stylelint --fix',
	'**/*.{ts,tsx,scss,js,json}': 'prettier --write',
	'src/**/*.{ts,tsx}': 'jest --bail --findRelatedTests',
};
