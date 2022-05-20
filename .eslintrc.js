module.exports = {
    extends: ["react-app"],
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        sourceType: "module",
    },
    rules: {
        "react/prop-types": 0,
        indent: ["error", 4],
    },
};
