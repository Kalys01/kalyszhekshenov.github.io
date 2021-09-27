import Vue from 'vue'
import Vuex from 'vuex'
import theme from './modules/theme'
import navLinks from './modules/navLinks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    theme,
    navLinks,
  }
})
