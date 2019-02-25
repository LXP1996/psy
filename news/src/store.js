import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //状态管理
  state: {
     islogin:false,
     currentUsername:"psy"
  },
  //获取状态
  getters:{
     islogin:state=>state.islogin,
     currentUsername:state=>state.currentUsername
  },
  //修改状态
  mutations: {

  },
  //修改状态
  actions: {

  },
  //模块化开发
  modules:{

  }
})
