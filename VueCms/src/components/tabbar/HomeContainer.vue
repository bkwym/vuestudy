<template>
  <div>

    <!-- 轮播图 -->
    <swiper :swiperlist="LunBoList" :isfull="true"></swiper>
    <!-- 九宫格 -->

    <ul class="mui-table-view mui-grid-view mui-grid-6 slide-stop-touch">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newlist">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photolist">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>
    </ul> 


  </div>
</template>

<script>
  //按需加载  mint-ui 的 Toast 模块 
  // import {Toast} from 'mint-ui'
  import swiper from  '../subcomponents/swiper.vue'
  export default {
    data(){
      return{
        LunBoList:[]//轮播图集合
      }
    },
    created(){//生命周期第二个函数  created  
      //此时data上的数据和methods的方法都已经被初始化了，可以调用了
      this.GetLunbo();
    },
    methods:{
      GetLunbo(){
        this.$http.get("api/getlunbo").then(result=>{
          var body=result.body;
          if(body.status===0){
            this.LunBoList=body.message;
          }
          else{
            Toast('加载轮播图失败');
          }
        })
      }
    },
    components:{
      swiper
    }
  }



</script>

<style lang="scss" scoped>
  .mui-grid-view.mui-grid-6 {
        background-color: #fff;
        border: none;
        img {
          width: 60px;
          height: 60px;
        }

        .mui-media-body{
          font-size: 13px;
        }
    }

    .mui-grid-view.mui-grid-6 .mui-table-view-cell {
      border: 0;
    }
</style>
