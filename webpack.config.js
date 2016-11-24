var extractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app.ts",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/, loader: 'ts-loader'
            },
            { 
                test: /\.scss$/, 
                loader: ["style", "css", "sass"]
            }
        ]
    }
};