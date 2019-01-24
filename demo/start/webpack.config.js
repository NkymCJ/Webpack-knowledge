const path = require('path');
module.exports = {
    mode: 'development', // 开发模式
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};