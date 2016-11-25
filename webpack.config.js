module.exports = {
    entry: {
        bundle: './src/ts/app.ts',
    },
    output: {
        filename: 'bundle.js',
        path: './public'
    },
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint-loader'
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};