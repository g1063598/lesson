const webpack = require('webpack');
const path = require('path');
module.exports = {
    // 入口
    entry: {
        // bundle 打包
        'tqb-date-picker':'./app/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        // __dirname 绝对路径， node 常量
        path: path.resolve('./dist')
    },
    module: {
        // 加载器 import .js babel-loader
        // babel编译的功能
        // stylus stylus-loader
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: ["babel-loader"]
            },
            {
                test: /\.hbs/,
                exclude: /node_modules/,
                loader: "handlebars-loader"
            }
        ]
    },
    externals: {
        'jquery': 'jQuery'
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules|dist|build|docs|css/,
        poll: 1000
    }
}