<template>
  <div>

      <navbar></navbar>
      <ul class="u1">
        <li v-for="data in looplist">
        <img :src="data.img"/>
        </li>
      </ul>
      
        <div class="nav">
          <img src="../assets/playtw.png" class="img1" />
          <img src="../assets/list.png" class="img2" />
          <img src="../assets/bag.png" class="img3" />
          <img src="../assets/buy.png" class="img4" />
        </div>
      
      <ul class="u2">
        <li v-for="data in datalist">
          <img :src="data.img"/>
        </li>
       </ul> 

      
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';

import axios from "axios";
import { Indicator } from 'mint-ui';

import navbar from "@/components/common/navbar";
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);

import router from "@/router";

export default {

  name: 'home',

  data() {
    return {
      
      looplist:[],
      datalist:[]
    }
  },

  methods:{
    handleClick(){
      //js 实现路由跳转 ---> 编程式导航
      //
      //router.push(`/detail/${index}`); // /detail/
    
      router.push(`/choose`);
    }
  },


  mounted (){
    //数据请求
    //https://m.maizuo.com/v4/api/billboard/home?__t=1514532132963
    
    Indicator.open('加载中...');
    axios.post("/igoeasy/home/data","platform=all&area=tw&version=1.0.1&sign=2f202824eed4762ea14dc25adc49a29f").then(res=>{
       // 后端响应数据的位置
      this.looplist = res.data.result.activityList;

      Indicator.close();
    })

    // https://m.maizuo.com/v4/api/film/now-playing?__t=1514533608807&page=1&count=5

    // axios.post("/look/list","memberToken=&pageNum=1&pageSize=20").then(res=>{
    //   console.log(res.data); // 后端响应数据的位置
    
    //   this.datalist = res.data.list;
    // })
    axios.post("/igoeasy/home/data","platform=all&area=tw&version=1.0.1&sign=2f202824eed4762ea14dc25adc49a29f").then(res=>{
       // 后端响应数据的位置
      this.datalist = res.data.result.themeList;

      Indicator.close();
    })

    //
    // Promise.all([axios.get("/v4/api/billboard/home?__t=1514532132963"),
    //   axios.get("/v4/api/film/now-playing?__t=1514533608807&page=1&count=5")
    //   ]).then(res=>{
    //   console.log(res);
    // })
  },
  components:{
    "swipe":Swipe,
    "swipe-item":SwipeItem,
    "navbar":navbar,
  }
}
</script>


<style lang="scss" scoped>

  .u1{
    li{
      padding-bottom:10px;
      // width: 100%;
      img{
        width: 100%;
      }
    }
  }

  .u2{
    li{
      padding-bottom:10px;
      // height:266px;
      // width: 100%;
      img{
        width: 100%;
      }
    }
  }
  .nav{
    width:100%;
    height:87px;
    position: relative;
    // background:#0ff;
    .img1{
      position: absolute;
      top:5px;
      left: 45px;
    }
    .img2{
      position: absolute;
      top:5px;
      left: 170px;
    }
    .img3{
      position: absolute;
      top:5px;
      left: 295px;
    }
    .img4{
      position: absolute;
      top:5px;
      left: 412px;
    }

  }

  .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;

  img{
    width: 100%;
  }
}


</style>

<style  lang="scss">

.active{
  background-color: red;
}

*{
  margin:0px;
  padding:0px;
}

html,body{
  width:100%;
  height:100%;
}

li{
  list-style: none;
}

section{
  position:relative;
  top:50px;
}

</style>