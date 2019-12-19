


import './css/index.css'





var parent = {
    foo() {
      console.log("Hello from the Parent");
    }
  }
   
  var child = {
    foo() {
      super.foo();
      console.log("Hello from the Child");
    }
  }
   
  Object.setPrototypeOf(child, parent);
  child.foo(); 
//webpack默认只支持一部分ES6新语法, 一些语法或者更高级的ES7语法是不支持的
//所以 需要借助第三方的loader 来处理高级的语法
//当第三方loader把高级语法转为低级语法后   会把结果交给webpack  webpack会打包到bundle.js中
//可以借助Babel 将高级语法转为低级语法

//可以使用以下两套命令，安装Babel 去实现相关的loader功能 

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