<template>
  <div v-if="detailinfo">
     

     <swipe class="my-swipe"  >
      <swipe-item v-for="(data,index) in detailinfo" :key="data.id">
         <img :src="'http://image.buoumall.com/' +data.picture">
         <p>{{data.detail}}</p>
      
      </swipe-item>
      
    </swipe>
      
      
       
      
      
  </div>
</template>

<script>
require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
import axios from "axios";
import Vue from "vue";
import { Indicator } from 'mint-ui';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);


export default {

  name: 'detail',

  data () {
    return {
    detailinfo:[],
   
    }
  },

  mounted () {

    console.log(this.$route.params.id);

    axios.post('/look/detail',`memberToken=&lookId=${this.$route.params.id}`
   
)
  .then(res=>{
        console.log(res.data.data.lookDetails)
      this.detailinfo = res.data.data.lookDetails;

  })     
  }
}


</script>



<style lang="css" scoped>
img{
  display: block;
  vertical-align: middle;
	width: 100%;
  border:0;
}
*{
  padding:0;
  margin:0;
}
.my-swipe{

  height:600px;
  text-align: center;
}


</style>