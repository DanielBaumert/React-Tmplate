const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    mode: 'production',
    module: {
        rules: [
            { 
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', "index.html")
        })
    ]
};