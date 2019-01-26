const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/build')
    },
    watch: true,
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        plugins: [
                            [
                                '@babel/plugin-proposal-class-properties',
                                { asd: true }
                            ],
                            '@babel/plugin-transform-typescript'
                        ],
                        presets: [
                            '@babel/preset-typescript',
                            '@babel/react',
                            '@babel/preset-env'
                        ]
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
