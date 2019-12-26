<template>
  <div>
    
    <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cateList" :key="item.id" @tap="getImgByCid(item.id)">
            {{ item.title }}
          </a>
        </div>
      </div>

    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>

  </div>
</template>


<script>

import mui from '../../libs/mui/js/mui.js'
import {Toast} from 'mint-ui'

export default {
    data(){
        return{
            cateList:[],//图片分类名称集合
            list:[]//图片集合
        }
    },
    created() {
       this.getphotocategory()
       this.getImgByCid(0)
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
        
    },
    methods: {
      getphotocategory(){//获取图片分类列表
          this.$http.get('api/getimgcategory').then(result=>{
              var body=result.body;
              if(body.status===0){
                  body.message.unshift({"title":"全部",id:0});
                  this.cateList=body.message;
              }else{
                  Toast("加载图片类型失败");
              }
          })
      },
      getImgByCid(id){
          //根据类别获取对应图片信息
            this.$http.get('api/getimages/'+id).then(result=>{
                if(result.body.status===0){
                    console.log(result.body.message)
                    this.list=result.body.message;
                }else{
                    Toast("加载图片失败");
                }
            })
      } 
    },
}
</script>

<style lang="scss" scoped>
    .stopTouch{
        touch-action: none;
    }

.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }

    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
}

</style>
