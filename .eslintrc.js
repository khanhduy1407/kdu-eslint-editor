"use strict"

module.exports = {
    root: true,
    extends: "plugin:@mysticatea/es2020",

    overrides: [
        // Use the latest espree in kdu files.
        {
            files: "**/*.kdu",
            parserOptions: {
                parser: require.resolve("espree"),
            },
        },
    ],
}
