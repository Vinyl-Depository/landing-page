module.exports = {
	'{src,tests}/**/*.{ts,tsx}': 'eslint --fix',
	'cypress/**/*.ts': 'eslint -c cypress/.eslintrc.js --fix',
	'src/**/*.scss': 'stylelint --fix',
	'**/*.{ts,tsx,scss,js,json}': 'prettier --write',
	'src/**/*.{ts,tsx}': 'jest --bail --findRelatedTests',
};
