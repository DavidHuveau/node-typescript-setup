module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  rootDir: './',
  testPathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/build'],
  testMatch: ['<rootDir>/src/**/*.test.ts']
};
