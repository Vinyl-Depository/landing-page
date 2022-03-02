module.exports = {
	ci: {
		collect: {
			numberOfRuns: 3,
			staticDistDir: './.next',
		},
		assert: {
			preset: 'lighthouse:recommended',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
