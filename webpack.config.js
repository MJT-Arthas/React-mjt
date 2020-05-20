const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

//创建插件实例
// const htmlPlugin = new HtmlWebPackPlugin({
//     template: path.join(__dirname, './src/index.html'),//源文件
//     filename: 'index.html'
// })
module.exports = {
    mode: 'development',
    plugins: [//插件数组
        new HtmlWebPackPlugin({ //创建一个在内存中生成html页面插件的配置对象
            template: path.join(__dirname, './src/index.html'),    //指定模版页面生成内存中的hmtl
            filename: 'index.html'   //指定生成的页面名称


        })
    ],
    module: {
        //第三方文件的配置规则
        rules: [
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            //{ test: /\.css$/, use: ['style-loader', 'css-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }
            { test: /\.css$/, use: ['style-loader','css-loader' ]},// 打包处理css样式表
            // { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader' ]},
            { test: /\.ttf|woff|woff2|eot|svg$/,use:'url-loader'},//打包处理字体文件
            { test: /\.scss$/, use: ['style-loader', { loader: 'css-loader?modules',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'}}},'sass-loader'] },
            // { test: /\.scss$/, use: ['style-loader', 'sass-loader?modules&localIdentName=[path][name]-[local]-[hash:5]'] }
        ]
    },
    resolve: {
        extensions: ['.js', ".jsx", ".json"],//省略后缀
        alias: {
            '@': path.join(__dirname, './src')//@表示src这一层
        }
    }
}