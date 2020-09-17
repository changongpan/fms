<template>
  <div id="login">
    <p><input type="text" name="username" v-model="loginData.username" placeholder="输入公司邮箱"></p>
    <p><input type="password" name="password" v-model="loginData.password" placeholder="输入密码"></p>
    <div v-if="loginNote"><p>{{loginNote}}</p></div>
    <button @click="login">登录</button>
  </div>
</template>

<script>
  import {dataPost} from "network/request";

  export default {
    name: "Login",
    data() {
      return {
        loginData: {
          username: '',
          password: '',
        },
        loginNote: ''
      }
    },
    methods: {
      login() {
        dataPost(
          'home/testdata',
          this.loginData
        ).then(res => {
          if (res.data == 'success') {
            this.loginNote = ''
            this.$emit('isLogin')
          } else {
            this.loginNote = '用户名或者密码错误'
          }
        }).catch(err => {
          this.loginNote = '网络连接错误，请检查网络'
        })
      }
    }
  }

</script>

<style scoped>

</style>
