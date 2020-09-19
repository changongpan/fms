<template>
  <div id="login">
    <p><input type="text" name="username" v-model="loginData.username" placeholder="输入公司邮箱" @focus="focus"></p>
    <p><input type="password" name="password" v-model="loginData.password" placeholder="输入密码" @focus="focus"></p>
    <div v-if="loginNote">
      <p>
        <note>{{loginNote}}</note>
      </p>
    </div>
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
      },
      focus() {
        setTimeout(() => {
          this.loginNote = ''
        }, 100)
      }
    }
  }

</script>

<style scoped>
  #login {
    flex: 1;
    background-color: #eeeeee;
    position: fixed;
    height: 100vh;
    padding-top: 20vh;
    left: 0;
    right: 0;
  }

</style>
