module.exports = {
	branches: ['main'],
	repositoryUrl: 'git+https://github.com/Vinyl-Depository/landing-page.git/',
	plugins: [
		'@semantic-release/commit-analyzer',
		'@semantic-release/release-notes-generator',
		'@semantic-release/changelog',
		'@semantic-release/github',
		'@semantic-release/git',
		['@semantic-release/npm', { npmPublish: false }],
	],
};
