# 管理输出

1. 更新入口起点(1. 修改入口起点名称 ``` app:'./src/index.js' ```。2. 修改 output 可以根据入口起点名称动态生成 bundle 名称 ``` filename:'[name].bundle.js' ```)，重新 build 之后，生成 app.bundle.js，但 html 页面引用的脚本链接资源没有改变

    解决方法:(使用 HtmlWebpackPlugin)

    + 安装: ``` npm install HtmlWebpackPlugin -D ```

    + 使用: 

        ```
        const HtmlWebpackPlugin = require('html-webpack-plugin');
        .
        .
        .
        plugins: [
            new HtmlWebpackPlugin()
        ]
        ```

    + 缺点:

        会默认生成 index.html，用新生成的替换原来的

    + [HtmlWebpackPlugin GITHUB](https://github.com/jantimon/html-webpack-plugin)

2. 清理 /dist 文件夹

    由于一些过去的其他东西遗留下来，所以构建前最好清理 /dist 文件夹，保证只会生成用到的文件

    解决方法:(使用 clean-webpack-plugin)

    + 安装: ``` npm install clean-webpack-plugin -D ```

    + 使用:

        ```
        const CleanWebpackPlugin = require('clean-webpack-plugin');
        .
        .
        .
        plugins: [
            new CleanWebpackPlugin(['dist']),
        ]
        ```

3. 示例
详见demo\output_management