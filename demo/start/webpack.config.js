const path = require('path');
module.exports = {
    mode: "none", // 不使用任何模式，正常配置
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};