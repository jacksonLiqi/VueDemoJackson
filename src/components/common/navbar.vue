<template>
	<nav>
		<div class="left">
			<!-- <i class="iconfont icon-category" @click="handleClick()"></i> -->
			<slot></slot>
			<span @click="handleClick()">{{"全国 v"}}</span>
		</div>

		<div class="con">
			<input type="text" name="" value="商品搜索">
		</div>
			
		</div>

		<div class="right">
			
			<i class="iconfont icon-account"></i>
		</div>
	</nav>
</template>

<script>

import router from "@/router";
export default {

  name: 'navbar',

  data () {
    return {

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
  //1. 放问store中的数据
  // computed:{
  // 	 title(){
  // 	 	return this.$store.state.title;
  // 	 }
  // }
  // 2. 访问store 中数据
 
}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>

	nav{
		position:fixed;
		top:0px;
		left:0px;
		width: 100%;
		height: 7.35%;
		background-color: #FA4558;
		line-height: 50px;
		color:white;
		.left{
			float:left;
		}

		.right{
			float:right;
		}

		z-index:2;
	}

	nav .left span{ 
		margin-left:10px;
	}

	nav .con input{
		border-style: none;
		width:319px;
		height:30px; 
		margin-left: 20px;
		text-align:center;
	}

	nav .right{
		position: absolute;
		top:3px;
		right: 10px;
	}
</style>