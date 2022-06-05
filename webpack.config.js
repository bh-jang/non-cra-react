const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx', // Root File
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: "file-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js" ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html"}),
        new CleanWebpackPlugin(),
    ]
}