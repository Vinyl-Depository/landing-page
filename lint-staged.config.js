module.exports = {
	'{src,tests}/**/*.{ts,tsx}': ['tsc-files', 'eslint --fix'],
	'cypress/**/*.ts': ['tsc-files -p cypress/tsconfig.json', 'eslint -c cypress/.eslintrc.js --fix'],
	'src/**/*.scss': 'stylelint --fix',
	'**/*.{ts,tsx,scss,js,json}': 'prettier --write',
	'src/**/*.{ts,tsx}': 'jest --bail --findRelatedTests',
};
