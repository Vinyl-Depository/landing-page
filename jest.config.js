module.exports = {
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/index.tsx',
		'<rootDir>/src/setupTests.ts',
		'<rootDir>/src/reportWebVitals.ts',
		'<rootDir>/src/assets/',
		'<rootDir>/src/i18n/',
	],
	coverageThreshold: {
		global: {
			branches: 30,
			functions: 30,
			lines: 30,
			statements: 30,
		},
	},
};
