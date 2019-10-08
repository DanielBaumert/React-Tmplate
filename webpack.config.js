const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = { 
    entry: './src/index.js',
    output: { 
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    mode: 'production',
    devtool: 'inline-source-map',
    module: {
        rules: [
            { 
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    },
                }
            },{ 
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', "index.html"),
            inject: "body"
        }),
        new MiniCssExtractPlugin({
            filename: path.resolve(__dirname, 'build', 'css', 'style.css'),
        }),
    ]
};