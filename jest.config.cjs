module.default = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [
        "node_modules/(?!(decode-uri-component|filter-obj|split-on-first|query-string)/)"
    ],
    transform: { 
        '\\.[jt]sx?$': 'babel-jest', 
        "^.+\\.css$": "jest-transform-css"
    },
    // ModuleNameMapper sólo si ocupamos importar CSS en nuestros componentes para el testing
    moduleNameMapper: {
        // '\\.(css|less)$': 'identity-obj-proxy',
        // '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(css|less)$': '<rootDir>/tests/mocks/styleMock.js',
    },
}