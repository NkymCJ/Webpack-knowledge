# 开发

此笔记的工具仅用于开发环境

1. 追踪错误和警告

    + 使用 source map: ``` devtool: 'inline-source-map' ```

    + 更多参数参考 GITHUB

        [source map GITHUB](https://www.webpackjs.com/configuration/devtool/)

2. 开发工具 - 使用观察模式

    使用: package.json 的 scripts 配置添加 ``` "watch": "webpack --watch" ```，文件一旦修改并保存后会自动编译，需要手动运行

3. 开发工具 - webpack-dev-server

    + 安装: npm install webpack-dev-server -D

    + 使用:

        ```
        devServer:{
            contentBase:'./dist',
            compress: true,
            port: 9000
        },
        ```

    + 更多参数参考 GITHUB

        [webpack-dev-server GITHUB](https://www.webpackjs.com/configuration/dev-server/)

4. 开发工具 -  webpack-dev-middleware

5. 示例

    详见demo\development