module.exports = {
	ci: {
		collect: {
			numberOfRuns: 3,
			startServerCommand: 'yarn run start',
			url: ['http://localhost'],
		},
		assert: {
			preset: 'lighthouse:recommended',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
