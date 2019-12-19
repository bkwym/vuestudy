
import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'

import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'


import app from './App.vue'

import  router from  './Router.js'





Vue.use(MintUi)


var  vm=new Vue({
    el:"#app",
    data:{},
    render:c=>c(app),
    router
})