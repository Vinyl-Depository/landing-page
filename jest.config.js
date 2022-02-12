const nextJest = require('next/jest');
const createJestConfig = nextJest({
	dir: './',
});
const customJestConfig = {
	collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
	coveragePathIgnorePatterns: ['<rootDir>/src/pages/', '<rootDir>/src/i18n/', '<rootDir>/src/icons.ts'],
	coverageThreshold: {
		global: {
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90,
		},
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/containers/(.*)$': '<rootDir>/src/components/containers/$1',
		'^@/layout/(.*)$': '<rootDir>/src/components/layout/$1',
		'^@/ui/(.*)$': '<rootDir>/src/components/ui/$1',
		'^@/utils/(.*)$': '<rootDir>/src/utils/$1',
		'^@/images/(.*)$': '<rootDir>/public/images/$1',
		'^@/models/(.*)$': '<rootDir>/src/models/$1',
	},
	moduleDirectories: ['node_modules', '<rootDir>/'],
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
