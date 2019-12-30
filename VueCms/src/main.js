//入口文件  


// console.log('项目开始了');
import Vue from 'vue'

//加载路由组件 
import VueRouter from  'vue-router'
//注册路由
Vue.use(VueRouter)

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var car =JSON.parse(localStorage.getItem('car')||'[]');
const store = new Vuex.Store({
    state:{//this.$store.state.***
        car:car//将购物车中的商品用一个数组存储起来 
    },
    mutations:{//this.$store.commit('方法名','按需传递的唯一参数')
        addToCar(state,goodsinfo){
            var flag=false;//默认为在购物车中没有找到同样的商品 
            state.car.some(item=>{
                if(item.id===goodsinfo.id)//如果有相同  就数量累加 
                {
                    item.count+=parseInt(goodsinfo.count);
                    flag=true;
                    return true;
                }
            })
            if(!flag){//如果没有  这把商品添加到购物车中 
                state.car.push(goodsinfo);
            }

            localStorage.setItem("car",JSON.stringify(state.car))//将数据保存到本地存储
        },
        updateGoodsInfo(state,goodsinfo){
            state.car.some(item=>{
                if(item.id==goodsinfo.id)
                {
                    item.count=parseInt(goodsinfo.count);
                    return true;
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        },
        removeFromCar(state,id){
            state.car.some((item,i)=>{
                if(item.id==id){
                    state.car.splice(i,1);
                    return true;
                }
            })
            localStorage.setItem("car",JSON.stringify(state.car))
        },
        updateGoodsSelected(state,info){
            state.car.some(item=>{
                if(item.id==info.id)
                {
                    item.selected=info.selected;//也可以取反
                }
            })
            localStorage.setItem('car',JSON.stringify(state.car));
        }
    },
    getters:{//this.$store.getters.*****
        getAllCount(state){
            var  c=0;
            state.car.forEach(item => {
                c+=item.count
            });
            return c;
        },
        getGoodsCount(state){
            var co={};
            //循环本地保存的购物车商品数据,获取对应的商品数量
            state.car.forEach(item=>{
                co[item.id]=item.count
            })
            return co;
        },
        getGoodsSelected(state){
            var o={};
            state.car.forEach(item=>{
                o[item.id]=item.selected
            })
            return o;
        },
        getGoodsCountAndAmount(state){
            var o={
                count:0,
                amount:0
            }
            state.car.forEach(item=>{
                if(item.selected){
                    o.count+=item.count;
                    o.amount+=item.price*item.count
                }
            })
            return o;
        }
    }
})

//导入vue-resource组件  
import VueResource from 'vue-resource'
//注册
Vue.use(VueResource)




//设置全局的域名
Vue.http.options.root='http://www.liulongbin.top:3005/';

//  设置全局的post表单提交格式  application/x-www-form-urlencoded
Vue.http.options.emulateJSON=true;

//导入mui样式
import './libs/mui/css/mui.min.css'
import './libs/mui/css/icons-extra.css'

//按需导入mint-ui组件
//导入mint-ui样式
import 'mint-ui/lib/style.css'
//import {Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)

// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
//Vue.use(Lazyload);


import MintUI from 'mint-ui'
Vue.use(MintUI)


//Vue 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//下载并导入时间处理插件  npm i moment -S
import moment from 'moment'
//定义全局过滤器(时间格式处理)
Vue.filter('dateFormat',function(dateStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dateStr).format(pattern)
})

//导入路由组件 
import router from './Router.js'


import app from './App.vue'
// import { stat } from 'fs';

var vm=new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router,//挂载路由
    store//挂在Vuex
})

