module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'import-pretier-default-support': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'no-unused-vars': 'warn',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': 'off',

        'max-len': [2, { ignoreComments: true, code: 100 }]
    },
    globals: {
        __IS_DEV__: true
    }
}
