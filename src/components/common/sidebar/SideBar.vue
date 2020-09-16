<template>
  <div class="side-bar" >
      <div class="side-bar-item" v-for="flight in flightList">
        <div class="side-bar-item-font">{{flight}}</div>
        <div class="side-bar-item-img"><img src="~assets/img/common/arrow-left.svg" alt=""></div></div>
 </div>
</template>

<script>
  export default {
    name: "SideBar",
    props: {
      flightList: ''
    },
    created() {
      console.log(this.flightList);
    }
  }
</script>

<style scoped>
  .side-bar {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 142px;
    background-color: #e9f5fd;
  }
  .side-bar-item{
    flex: 0;
    flex-basis: 50px;
    font-size: 16px;
    line-height: 50px;
    color: #ffffff;
    background-color: #72879c;

    display: flex;
  }
  .side-bar-item:hover{
    background-color: #00a2e4;
  }
  .side-bar-item-font{
    flex: 1;
  }
  .side-bar-item-img{
    flex: 1 ;
    position: relative;
  }
  img{
    position: absolute;
    height: 30%;
    top:17px;
    right: 18px;
  }
</style>
