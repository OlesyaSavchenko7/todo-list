export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: [
      '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
      'json',
      'node',
  ],
  moduleDirectories: [
      'node_modules',
  ],
  testMatch: [
      '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  rootDir: '../../',
    transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>config/jest/mocks/styleMock.ts',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>config/jest/mocks/fileMock.ts',
    '^src(.*)$': '<rootDir>src$1',
  },
};
