
import Vue from 'vue'
//第一步先安装veu-router     npm i vue-router -S
//再导入包
import VueRouter from 'vue-router'
//使用这种模式要手动安装一下    
Vue.use(VueRouter)

import account from  './main/Account.vue'
import goodslist from  './main/Goodslist.vue'


import  loginson from  './subcoms/login1.vue'
import register from  './subcoms/register.vue'


var router=new  VueRouter({
    routes:[
        {path:'/account',component:account,
        children:[
            {path:'login',component:loginson},
            {path:'register',component:register}
        ]
    
    },
        {path:'/goodslist',component:goodslist}
    ]
})


export default router