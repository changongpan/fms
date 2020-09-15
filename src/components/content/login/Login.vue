<template>
  <div id="login">
    <p><input type="text" name="username"></p>
    <p><input type="password" name="password"></p>
    <button @click="tt">{{isLogin}}</button>
  </div>

</template>

<script>
  export default {
    name: "Login",
    props: {
      isLogin:{
        type: Boolean,
        default:true
      }
    },
    data() {
      return {
        myData:this.isLogin
      }
    },
    methods:{
      construct(){
        console.log(this.isLogin);
      },
      tt(){
        console.log(this.myData);
      }
    }
  }

</script>

<style scoped>

</style>
