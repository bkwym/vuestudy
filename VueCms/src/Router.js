
import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import newlist from './components/news/newlist.vue'
import newinfo from './components/news/newinfo.vue'
import photolist from './components/photos/photolist.vue'
import photoinfo from './components/photos/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from  './components/goods/goodscomment.vue'




//设置路由 组件
var router=new  VueRouter({
    routes:[
         {path:'/',redirect:"/home"}
        ,{path:'/home',component:HomeContainer}
        ,{path:'/member',component:MemberContainer}
        ,{path:'/shopcar',component:ShopcarContainer}
        ,{path:'/search',component:SearchContainer}
        ,{path:'/home/newlist',component:newlist}
        ,{path:'/home/newinfo/:id',component:newinfo}
        ,{path:'/home/photolist',component:photolist}
        ,{path:"/home/photoinfo/:id",component:photoinfo}
        ,{path:'/home/goodslist',component:goodslist}
        ,{path:'/home/goodsinfo/:id',component:goodsinfo}
        ,{path:'/home/goodsdesc/:id',component:goodsdesc,name:'goodsdesc'}
        ,{path:'/home/goodscomment/:id',component:goodscomment,name:'goodscomment'}
        
    ],
    linkActiveClass:'mui-active'//覆盖默认选中高亮样式
})



export default router//将路由对象向外暴露