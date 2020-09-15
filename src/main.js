import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Login from 'components/content/login/Login'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import {dataGet} from "network/request";
import {dataPost} from "network/request";

dataGet('home/testdata',
  {
    id: 100,
    name: 'wangwu'
}).then(res => {
  console.log(res);
})
  .catch(err => {
    console.log(err);
  })

dataPost('home/testdata',{
    id:101,
    name: {
      n1:'nzzn1',
      n2:'nzzn2'
    }
}).then(res => {
  console.log(res);
})
  .catch(err => {
    console.log(err);
  })

// request({
//   url:'home/testdata',
//   params:{
//     id:100,
//     name:'wangwu'
//   }
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//
// request({
//   url:'home/testdata',
//   method:'post',
//   data: {
//     id:101,
//     name: {
//       n1:'nzzn1',
//       n2:'nzzn2'
//     }
//   }
// })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   })
