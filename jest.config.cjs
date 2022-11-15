module.exports = {
  roots: ['<rootDir>/tests'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.js',
    '!<rootDir>/src/main/**'
  ],
  verbose: true,
  testEnvironment: 'node',
  coverageProvider: 'babel',
}
