# 开发

此笔记的工具仅用于开发环境

1. 追踪错误和警告 

    + 问题: 由于生成 bundle 文件，所以很难发现错误是来源于之前的哪些脚本文件

    + 开发环境使用 source map: ``` devtool: 'inline-source-map' ```

    + 生产环境使用 source  map: ``` devtool: 'inline-source-map' ```

    + 更多参数参考 GITHUB

        [source map GITHUB](https://www.webpackjs.com/configuration/devtool/)

2. 开发工具 - 使用观察模式

    + 配置: package.json 的 scripts 配置添加 ``` "watch": "webpack --watch" ```

    + 使用: ``` npm run watch ```，不会结束，一直在观察文件

    + 特点: 文件一旦修改并保存后会自动编译

    + 缺点: 还需要手动运行

3. 开发工具 - webpack-dev-server

    + 安装: npm install webpack-dev-server -D

    + 配置: 
        
        package.json 的 scripts 配置添加 ``` "start": "webpack-dev-server --open" ```

        webpack.config.js 添加
        ```
        devServer:{
            contentBase:'./dist', // 根目录
            port: 5502 // 端口号
        },
        ```

    + 使用:

        ```npm run start```

    + 更多参数参考 GITHUB

        [webpack-dev-server GITHUB](https://www.webpackjs.com/configuration/dev-server/)

4. 开发工具 -  webpack-dev-middleware

    略

5. 示例
详见demo\development