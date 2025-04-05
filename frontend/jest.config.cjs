module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src'],
	moduleDirectories: ['node_modules', '<rootDir>/src'],
	modulePaths: ['<rootDir>/src'],
}
