<template>
	<div>
		
		<img src="../assets/choose.png"/>
		<p class="p1" @click = "handleClickLeft()">台湾</p>
    <p class="p2">韩国</p>
    <p class="p3">日本</p>
    <p class="p4">国内</p>
	</div>
</template>

<script>
import router from "@/router";
export default {

  name: 'choose',

  data () {
    return {
    	
    }
  },

  methods:{
    handleClickLeft(){
      //js 实现路由跳转 ---> 编程式导航
      //
      //router.push(`/detail/${index}`); // /detail/
    
      router.push(`/tw`);
    }
  }

}
</script>

<style lang="scss" scoped>

     *{
        margin:0px;
        padding:0px;
      }

      html,body{
        width:100%;
        height:100%;
      }

     img{
     	width: 100%;
      height: 100%;
     }

     p{
      width:257px;
      height:45px;
      position: absolute;
     }

     .p1{
      background:#999697;
      text-align: center;
      line-height: 45px;
      top: 55.3%;
      left: 25.1%;
      color:white;
     }

     .p2{
      background:#999697;
      text-align: center;
      line-height: 45px;
      top: 65.2%;
      left: 25.1%;
      color:white;
     }

     .p3{
      background:#999697;
      text-align: center;
      line-height: 45px;
      top: 75.1%;
      left: 25.1%;
      color:white;
     }

    .p4{
      background:#FA4558;
      text-align: center;
      line-height: 45px;
      top: 88.7%;
      left: 25.1%;
      color:white;
     }

</style>

