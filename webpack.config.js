module.exports = {
    entry: {
        bundle: './src/app/app.ts',
    },
    output: {
        filename: 'bundle.js',
        path: './dist'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
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