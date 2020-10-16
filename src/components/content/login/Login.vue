<template>
  <div id="login">
    <el-form :model="newLogin" :rules="loginRules" ref="newLogin" label-width="100px">
      <el-form-item label="用户名" prop="username" style="width: 460px">
        <el-input placeholder="请输入用户名（公司邮箱）"
                  prefix-icon="el-icon-user" clearable @focus="clearErr('username')" v-model="newLogin.username"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" style="width: 460px">
        <el-input type="password" placeholder="请输入密码（区分大小写）"
                  prefix-icon="el-icon-key" clearable @focus="clearErr('password')" v-model="newLogin.password"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
      </el-form-item>
      <el-form-item style="width: 460px" v-if="">
        <el-alert
          title="错误提示的文案" type="error" show-icon>
        </el-alert>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login()" style="width: 166px">登录</el-button>
        <el-button type="warning" @click="reset('newLogin')" style="width: 166px">重填</el-button>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="七天内记住密码" v-model="newLogin.rememberPsd"></el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {dataPost} from "network/request";

  export default {
    name: "Login",
    data() {
      return {
        newLogin: {
          username: '',
          password: '',
          rememberPsd: false,
          loginRes:false
        },
        loginRules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        },
        loginNote: ''
      }
    },
    methods: {
      //点击输入框，警告消息消失
      clearErr(prop) {
        this.$refs['newLogin'].clearValidate(prop);
      },
      //登录
      login() {
        dataPost(
          'login/newlogin',
          this.newLogin
        ).then(res => {
          if (res.loginRes == 'success') {
            this.loginNote = ''
            this.$emit('isLogin')
          } else {
            this.loginNote = '用户名或者密码错误'
          }
        }).catch(err => {
          this.loginNote = '网络连接错误，请检查网络'
        })
      },
      reset(newLogin) {
        this.$refs[newLogin].resetFields();
      },
      focus() {
        setTimeout(() => {
          this.loginNote = ''
        }, 100)
      }
    },
    mounted() {
      this.newLogin.username = this.$cookies.get('username')
      this.newLogin.password = this.$cookies.get('password')
      this.newLogin.loginRes = this.$cookies.get('loginRes')
      console.log(this.newLogin.username);
      console.log(this.newLogin.password);
      console.log(this.newLogin.loginRes);
    }
  }
</script>

<style scoped>

</style>
