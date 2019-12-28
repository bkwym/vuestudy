<template>
        <div>
                <ul class="mui-table-view">
                       
                        
                        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
                            <router-link :to="'/home/newinfo/'+item.id">
                                <img class="mui-media-object mui-pull-left" :src='item.img_url'>
                                <div class="mui-media-body">
                                        <h1>{{item.title}}</h1>
                                        <p class='mui-ellipsis'>
                                            <span>{{item.add_time | dateFormat}}</span>
                                            <span>点击：{{item.click}}次</span>
                                        </p>
                                </div>
                            </router-link>
                        </li>
        
                    </ul>
        </div>
      </template>
      
      <script>
import {Toast} from 'mint-ui'

        export default{
            data(){
                return{
                    newslist:[]
                }
            },
            created(){
                this.getnewslist();
            },
            methods:{
                getnewslist(){
                    this.$http.get('api/getnewslist').then(result=>{
                        var body=result.body;
                        if(body.status===0)
                        {
                            this.newslist=body.message;
                        }
                        else{
                            Toast('加载新闻列表失败');
                        }
                    })
                }
            }
        }


      </script>
      
      <style  lang="scss" scoped>
      .mui-table-view{
          li{
              h1{
                  font-size:14px;
              }
              .mui-ellipsis{
                  font-size: 12px;
                  color: #226aff;
                  display: flex;
                  justify-content: space-between;
              }
          }
      }
      </style>