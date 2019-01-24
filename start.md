# 起步

## 在网页中会引用哪些常见的静态资源
+ JS

    - .js .ts .coffee .jsx

+ CSS

    - .css .less .sass(新版: .scss)

+ Images

    - .jpg .png .git .bmp .svg

+ Fonts

    - .svg .ttf .eot .woff .woff2

+ 模板文件

    - .ejs .jade .vue

## 网页中引入的静态资源多了以后有什么问题？

1. 网页加载速度慢，发起很多二次请求
2. 要处理错综复杂的依赖关系

## 如何解决上述两个问题

1. 合并、压缩、精灵图、图片的base64编码
2. 可以使用之前学过的requireJS、也可以使用webpack解决各个包之间的复杂依赖关系

## 什么是webpack？

前端的一个项目构建工具，基于Node.js 开发出来的一个前端工具

## webpack 官网

1. [webpack官网](https://webpack.github.io/)
2. [webpack起步](https://www.webpackjs.com/guides/)

## 安装方式
1. 运行 npm i webpack -g 全局安装webpack。运行 npm i webpack-cli -g 全局安装webpack-cli
2. 局部安装 去掉 -g

## 起步

```

1. npm init -y
    -y 是跳过简单设置，生成package.json文件
    文件内容
    {
        "name": "start",
        "version": "1.0.0",
        "description": "start",
        // "main": "index.js", // 移除入口
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "NkymCJ",
        "license": "ISC",
        "private": true //因为案例是私有，所以加上，控制台就不会报 warn:no repository field
    }

2. 安装 webpack 和 webpack-cli:(局部安装方式)
    npm install webpack webpack-cli -D
    或 npm install webpack webpack-cli --save-dev
    
3. 安装资源并导入
    1. 安装
    npm install lodash -D
    // 或 npm install lodash --save-dev
    2. 导入
    import _ form 'lodash'
    // 或 const _ = require('lodash)

4. 打包
    1. webpack .\src\main.js -o .\dist\bundle.js
        
        这是新版的打包命令，旧版没有 -o

        在windows 系统中，路径需为 \

    2. npx webpack 

        没有配置文件 webpack.config.js 时，默认输出成 main.js 文件

    3. npx webpack --config webpack.config.js

        当有配置文件 webpack.config.js 时，可以省略 --config webpack.config.js，此处是为了表明可以使用任何的配置文件

        文件内容
        const path = require('path');
        module.exports = {
            mode: 'development', // 开发模式
            entry: './src/index.js',
            output: {
                filename: 'bundle.js', // 输出文件名为 bundle.js
                path: path.resolve(__dirname, 'dist')
            }
        };

    4. NPM 脚本，在有 webpack.config.js 配置文件的基础上，在 package.json 文件 的 scripts 下 增加 "build":"webpack"。用 npm run build 来替代 npx 命令。参数加法如上
    
5. 示例
详见demo\start

```