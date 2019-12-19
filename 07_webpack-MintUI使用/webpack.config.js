


const path=require("path");

const htmlWebPackPlugin=require('html-webpack-plugin');


const vueLoaderPlugin=require('vue-loader/lib/plugin')

module.exports={
    entry:path.join(__dirname,"./src/main.js"),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,"dist")
    },
    mode:"development",

    plugins:[//生成内存中默认页面
        new htmlWebPackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        }),
        new vueLoaderPlugin()
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},// 配置处理 .css文件的第三方loader  规则
            {test:/\.(jpg|png|bmp|gif|jpeg)$/,use:'url-loader?limit=283&name=[hash:8]-[name].[ext]'},
            //limit 给定图片大小,如果当前给定的值小于或等于图片大小，则图片不会被转成base64位编码格式,
            //否则图片则会被转成64 编码
            //为了防止重名  可以通过[hash:长度]的方式 来取8位长度的哈希值来区分

            // 也可以处理一些字体  
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},
            //使用Babel 来处理 将ES6的高级语法转换为webpack能识别的低级语法
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },

            { test:/\.vue$/, use:'vue-loader'}
          ]
    },
    resolve:{
        alias:{
            //修改默认Vue包被导入的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}