
<template>

    <div id="app">
        <h1>这是定义在xxx.vue中的组件----{{msg}}</h1>
    </div>

</template>


<script>

    export default{
        data(){
            return {
                msg:"11111"
            }
        },
        methods:{
            show(){
                console.log("调用了login.vue组件中的 show 方法")
            }
        }
    }

</script>


<style>
</style>