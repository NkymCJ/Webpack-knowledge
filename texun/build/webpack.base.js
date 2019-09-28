const dev = require('./webpack.dev');
const prod = require('./webpack.prod');
const path = require('path');
const merge = require('webpack-merge');
module.exports = (env) => {
    // console.log(env); // 打印 { development: true } 或 { production: true }
    let isDev = env.development;
    const base = {
        // 入口
        entry: path.resolve(__dirname, '../src/index.js'),
        // 出口
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '../dist')
        }
    }
    if (isDev) {
        return merge(base, dev);
    } else {
        return merge(base, prod);
    }
}