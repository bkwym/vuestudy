const path = require('path');
//安装 在内存生成页面的插件npm i html-webpack-plugin -D   然后导入包
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  entry:path.join(__dirname,'/src/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:'development',
  plugins:[
    new htmlWebpackPlugin({ //创建 一个在 内存中生成页面的 插件 
      template:path.join(__dirname,'./src/index.html'),//指定  模板页面,会根据指定的模板页面去生成内存的页面
      filename:"index.html"
    })
  ],
  module:{//此节点   用于匹配所有第三方模板的 加载器 
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']}// 配置处理 .css文件的第三方loader  规则
    ]

  }
};