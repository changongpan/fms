<template>
  <div id="login">
    <el-form :model="newLogin" :rules="loginRules" ref="newLogin" label-width="25%">
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名（公司邮箱）"
                  prefix-icon="el-icon-user" clearable @focus="clearErr('username')" v-model="newLogin.username"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" placeholder="请输入密码（区分大小写）"
                  prefix-icon="el-icon-key" clearable @focus="clearErr('password')" v-model="newLogin.password"
                  onkeyup="this.value=this.value.replace(/\s+/g,'')"></el-input>
      </el-form-item>
      <el-form-item >
        <el-alert style="line-height: 10px"
          :title="loginErr" type="error" :closable="false" show-icon v-if="loginErr">
        </el-alert>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogin('newLogin')" style="width: 46%">登录</el-button>
        <el-button type="warning" @click="reset('newLogin')" style="margin-left:8%; width:46%">重填</el-button>
      </el-form-item>
      <el-form-item>
        <el-checkbox label="七天内记住密码" :value="newLogin.isRemember === '1'" @change="val => $set(newLogin,'isRemember',val ? '1' : '0')"></el-checkbox>
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
          isRemember: false,
        },
        loginRules: {
          username: [{required: true, message: '用户名不能为空', trigger: 'blur'}],
          password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
        },
        loginErr: ''
      }
    },
    methods: {
      //点击输入框，警告消息消失
      clearErr(prop) {
        setTimeout(()=>{
          this.$refs['newLogin'].clearValidate(prop);
          this.loginErr=''
        },100)
      },
      //提交登录信息
      submitLogin(newLogin) {
        this.$refs[newLogin].validate((valid) => {
          if (valid) {
            this.login();
          } else {
            return false;
          }
        });
      },
      //登录
      login() {
        dataPost(
          'home/myHome',
          this.newLogin
        ).then(res => {
          if (res.data==='success') {
            this.$cookies.set('username',this.newLogin.username,'7d');
            this.$cookies.set('password',this.newLogin.password,'7d');
            this.$cookies.set('isRemember',this.newLogin.isRemember,'7d');
            this.$refs['newLogin'].resetFields();
            this.newLogin.isRemember=false;
            this.$store.commit('setLogin',true);
            this.$emit('isLogin');
          } else {
            this.loginErr = '用户名或者密码错误';
            return false;
          }
        }).catch(err => {
          this.loginErr = '网络连接错误，请检查网络';
          return false;
        })
      },
      reset(newLogin) {
        this.$refs[newLogin].resetFields();
        this.loginErr=''
      }
    },
    mounted() {
      this.newLogin.username = this.$cookies.get('username')
      this.newLogin.password = this.$cookies.get('password')
      this.newLogin.isRemember = this.$cookies.get('isRemember')
    }
  }
</script>

<style scoped>
  .el-form{
    padding-top: 8%;
    margin-left: 25%;
  }
  .el-form-item{
    width: 50%;
  }
</style>
