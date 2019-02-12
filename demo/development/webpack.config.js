const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', // 开发模式
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase:'./dist',
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'development'
        }),
        new CleanWebpackPlugin(['dist']),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}