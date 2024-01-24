module.exports = {
    testPathIgnorePatterns: ['/node_modules/', './dist'],
    coverageReporters: ['lcov', 'html'],
    resetModules: false,
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)?$',
    moduleFileExtensions: ['ts', 'js', 'tsx', 'json'],
};
