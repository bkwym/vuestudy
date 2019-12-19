<template>
    <div>
        <h1>Account 组件</h1>
          <router-link to="/account/login"> 子组件登陆</router-link>
        <router-link to="/account/register">子组件注册</router-link>
        <router-view></router-view>

    </div>
</template>
<script>

</script>
<style  scoped>

div{
background-color: yellowgreen
}

</style>