/** @format */

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    // extends: ["plugin:@typescript-eslint/recommended", "react-app", "plugin:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2019,
        sourceType: "module",
    },
    settings: {
        //自动发现React的版本，从而进行规范react代码
        react: {
            pragma: "React",
            version: "detect",
        },
    },
    plugins: ["@typescript-eslint", "react"],
    rules: {
        "no-unused-vars": "off",
        "anchor-is-valid": "off",
        "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
        "@typescript-eslint/explicit-function-return-type": "off",
        // indent: ["error", "tab"],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        // semi: ["error", "always"],
    },
    overrides: [
        // Override some TypeScript rules just for .js files
        {
            files: ["*.js"],
            rules: {
                "@typescript-eslint/no-var-requires": "off", //
                "@typescript-eslint/no-unused-vars": "off",
                "@typescript-eslint/anchor-is-valid": "off",
            },
        },
    ],
}
