module.exports = {
	ci: {
		collect: {
			startServerCommand: 'yarn run start:lhci',
			url: ['http://localhost:8080'],
		},
		assert: {
			preset: 'lighthouse:recommended',
		},
		upload: {
			target: 'temporary-public-storage',
		},
	},
};
