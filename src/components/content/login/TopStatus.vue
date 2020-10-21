<template>
  <div id="top-status">
    <div id="top-left"><span>{{companyName}}</span></div>
    <div id="top-center">{{nowTime}}</div>
    <div id="top-right"><i class="el-icon-user"></i><span id="username">{{username}}</span></div>
  </div>
</template>

<script>
  import TimeSetting from "../../../commonJS/dateTime";

  export default {
    name: "TopStatus",
    props: {
      username: {
        String,
        default: '请登录'
      },
      companyName: {
        String,
        default: '重庆瀚达国际货运代理有限公司'
      }
    },
    data() {
      return {
        nowTime: '',//当前时间
      }
    },
    methods: {
      getTime(){
        this.nowTime=TimeSetting.getFullDate()
      }
    },
    created() {
       setInterval(this.getTime,1000);
    }
  }
</script>

<style scoped>
  #top-status {
    flex: 1;
    display: flex;
    color: white;
    line-height: 38px;
    font-size: 13px;
  }

  #top-left {
    flex: 1;
    padding-left: 20px;
  }

  #top-center {
    flex: 1;
    text-align: center;
  }

  #top-right {
    flex: 1;
    text-align: right;
  }

  #username {
    display: inline-block;
    width: 80px;
    text-align: left;
    margin-left: 8px;
  }
</style>
