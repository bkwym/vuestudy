<template>
  <div>

    <!-- 轮播图 -->
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="item in swiperlist" :key='item.id'>
      <img :src="item.img" :class="{'full':isfull}">
    </mt-swipe-item>
  </mt-swipe>

  </div>
</template>

<script>
    export default {
        props:["swiperlist","isfull"]
    }
</script>

<style lang="scss"  scoped>

    .mint-swipe{
      height: 200px;

      .mint-swipe-item{
         text-align: center;
         img{
           //width: 100%;
           height: 100%;
         }
       }

       .full{
           width: 100%;
       }
    }

    
</style>
