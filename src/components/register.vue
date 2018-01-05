//template 包含html 模版的内容
<template>
<div>
  
   账号： <input type="text" v-model="email" placeholder="请输入账号"><br>
   密码：<input type="password" v-model="password"  placeholder="请输入密码"><br>
   昵称：<input type="text" v-model="username" placeholder="请输入昵称"><br>
   <button  type="submit" @click="handleClick(email,password,username)">注册</button>
 
</div>
</template>
<script>
import axios from "axios";
import router from "@/router";

export default {
  name:'register',
  data(){   //局部组件的data状态必须是函数形式
      return{
    email:'',
    password:'',
    username:''
      }
    },
      methods:{
        handleClick(email,password,username){
          console.log(email,password);
        axios.post(`/register/validate`,{
        email:this.email,
        password:this.password,
        username:this.username
        }).then(res=>{
          console.log(res.data);
          })
        }
      }
  }
</script>
<style scoped>

</style>