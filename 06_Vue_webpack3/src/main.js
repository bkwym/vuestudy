//   在webpack 构建的项目中  使用 Vue 进行开发 


//import Vue  from  '../node_modules/vue/dist/vue.js'
import Vue  from  'vue'//这种方式导入的Vue包不完整，要在webpack.config中配置以下
// resolve:{
//     alias:{
//         //修改默认Vue包被导入的路径
//         "vue$":"vue/dist/vue.js"
//     }
// }


import login from  './login.vue'
//要处理 .vue的文件，需要相关的loader
//npm i vue-loader vue-template-complier -D
//在配置文件中  添加 {test:/\.vue$/,use:"vue-loader"} 
//同时还需要引入    const  vueLoaderPlugin=require('vue-loader/lib/plugin')
//                 new vueLoaderPlugin()


var  vm=new Vue({
    el:"#app",
    data:{
        msg:"webpack Vue"
    },
    // components:{
    //     login
    // },
    // render:function(createElements){
    //     return createElements(login)
    // }
    //render默认会将el 元素的内容清空后再重写
    //可以简写为 
    render: c => c(login)
})


//如何在webpack 中使用 Vue
//1：安装 vue包    npm i vue -s 
//2: 由于在 webpack 中,推荐使用 .vue  模板文件来定义组件，所以需要安装能解析这种loader包
//   npm i vue-loader vue-template-complier -D
        //在配置文件中  添加 {test:/\.vue$/,use:"vue-loader"} 
        //同时还需要引入    const  vueLoaderPlugin=require('vue-loader/lib/plugin')
        //                 new vueLoaderPlugin()
//3:在 main.js中,导入组件模块    import Vue from 'vue'
//  同时需要在webpack.config.js中做如下配置 
        // resolve:{
        //     alias:{
        //         //修改默认Vue包被导入的路径
        //         "vue$":"vue/dist/vue.js"
        //     }
        // }
//4：定义一个.vue结尾的组件   其中由 template  script  style 组成
//5：导入定义的这个组件    import  login from './login.vue'
//6:创建vm的实例    var  vm=new  Vue({el:"#app",render:c=>c(login)})
//7:在页面中创建一个id 为app的元素 ，来作为vm实例要控制的区域






//使用export default和export向外暴露成员的区别 

import cont,{stars,time as ntime} from '../src/test.js'

console.log(cont);
console.log(stars+" "+ntime);

