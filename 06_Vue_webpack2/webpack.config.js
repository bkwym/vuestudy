


const path=require("path");

const htmlWebPackPlugin=require('html-webpack-plugin');

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
        })
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
            //第一：npm i babel-core babel-loader babel-plugin-transform-runtime -D
            //第二：npm i babel-preset-env babel-preset-stage-0 -D
            //然后在webpack的配置文件，在rule配置数组中，添加一个新的匹配规则,
            //{test:/\.js$/,use:'babel-loader',exclude:/node_modules/ }
            //排除掉node_modules的原因如下,  不排除的话Babel会把node_module中所有的第三方包都打包编译，这样会非常消耗性能,
            //打包速度很慢，同时,打包完成后也无法运行
            //最后  在项目的根目录中新建一个叫做    .babelrc  的Babel配置文件(json格式文件,不能些注释，字符串必须双引号)
                    // {
                    //     "presets":["env","stage-0"],
                    //     "plugins":["transform-runtime"]
                    // }

                    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
          ]
    }
}