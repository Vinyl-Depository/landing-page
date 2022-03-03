module.exports = {
	'src/**/*.{ts,tsx}': 'eslint --fix',
	'src/**/*.scss': 'stylelint --fix',
	'*.{ts,tsx,scss,js,json}': 'prettier --write',
};
