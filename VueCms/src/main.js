//入口文件  


// console.log('项目开始了');
import Vue from 'vue'

//加载路由组件 
import VueRouter from  'vue-router'
//注册路由
Vue.use(VueRouter)
//导入路由组件 
import router from './Router.js'


//导入vue-resource组件  
import VueResource from 'vue-resource'
//注册
Vue.use(VueResource)
//设置全局的域名
Vue.http.options.root='http://www.liulongbin.top:3005/';

//  设置全局的post表单提交格式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true;

import app from './App.vue'

//导入mui样式
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'

//按需导入mint-ui组件
//导入mint-ui样式
import 'mint-ui/lib/style.css'
import {Header,Swipe, SwipeItem,Button} from 'mint-ui'
Vue.component(Header.name,Header)

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


//下载并导入时间处理插件  npm i moment -S
import moment from 'moment'
//定义全局过滤器(时间格式处理)
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(pattern)
})



var vm=new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router//挂载路由
})

