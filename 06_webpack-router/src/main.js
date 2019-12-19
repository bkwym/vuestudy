
import Vue from 'vue'


import app from './App.vue'

import  router from  './Router.js'

var  vm=new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router
})