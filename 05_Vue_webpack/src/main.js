// 导入jquery
//这种方式浏览器无法解析的，使用wenpack  处理后才能被正常解析,新版本的webpack  要添加 -o
//webpack .\src\main.js -o .\dist\bundle.js 
import $ from 'jquery'
//处理css文件   需要安装插件   npm  i style-loader css-loader -D
//然后再配置文件中配置module 
import './css/index.css'

$(function(){
    $('li:odd').css("backgroundColor","pink");
    $('li:even').css("backgroundColor",function(){
        return  "#"+"D93422"
    })
})