module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'type-enum': [
			2,
			'always',
			['test', 'feat', 'fix', 'chore', 'docs', 'refactor', 'style', 'ci', 'perf', 'work'],
		],
	},
};
