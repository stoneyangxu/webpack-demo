const webpack = require('webpack')

module.exports = {
    entry: __dirname + '/app/index.js', // 入口文件
    output: {
        path: __dirname + '/public', // 输入路径
        filename: 'bundle.js' // 打包文件名
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: './public',
        inline: true
    }
}