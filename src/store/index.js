import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged:false,
    username:'',
    password:''
  },
  mutations: {
    setLogin(state,param){
      state.isLogged = param;
      state.username = param.username
      console.log(state);
    }
  },
  actions: {
  },
  modules: {
  }
})
