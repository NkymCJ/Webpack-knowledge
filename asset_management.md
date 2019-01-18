# 管理资源

## 加载 CSS

1. 加载 css，安装 style-loader 和 css-loader

    ``` npm install style-loader css-loader -D ```

    使用:

    ``` import './style.css' ```

    *当该模块运行时，含有 CSS 字符串的 style 标签，将被插入到 html 文件的 head 标签中*

2. 加载图片，安装 file-loader

    ``` npm install file-loader -D ```

    使用:

    在 JS 文件中引用图片时，
    ``` import myImage from './my-image.png' ```，图片将被处理并输出到 output 目录

    在 CSS 文件中引用图片时，css-loader 跟它类似的过程

3. 加载数据，需要安装 csv-loader 和 xml-loader (补充: JSON是内置的，所以如果只是它就不需要安装了)

    ``` npm install csv-loader xml-loader -D ```

    使用:

    ``` import Data from './data.xml' ```

4. 在 webpack.config.js 配置文件中 的 module 配置

    *webpack 根据正则表达式，来确定应该查找哪些文件，并将其提供给指定的 loader，进行相应的处理*

    ```
    module: {
        rules: [{
                // CSS
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                // 图片
                test: /\.(png|svg|jpg|git)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // 字体文件
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                // csv 数据
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                // xml 数据
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
    ```