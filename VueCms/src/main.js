//入口文件  


// console.log('项目开始了');
import Vue from 'vue'
import app from './App.vue'

//导入mui样式
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'

//按需导入mint-ui组件
//导入mint-ui样式
import 'mint-ui/lib/style.css'
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)


var vm=new Vue({
    el:"#app",
    data:{},
    render:c=>c(app)
})

