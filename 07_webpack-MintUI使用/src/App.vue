

<template>
    <div>
        <h3>
            这是路由组件 
        </h3>


        <router-link to="/account"> Account</router-link>
        <router-link to="/goodsList">GoodsList</router-link>
        <router-view></router-view>
        <br />  
        <mt-button type="danger" @click='show'>danger</mt-button>

        
    </div>

</template>

<script>

    import { Toast } from 'mint-ui';

    export default{
        data(){
            return {};
        },
        methods:{
            show(){
                console.log('App.vue中的show()');
                Toast({
                    message:'点击了click',
                    position:'bottom',
                    duration:1000,
                    iconClass:'glyphicon glyphicon-heart'
                });
            }
        }
    }

</script>

<style></style>