export default new Vuex.Store({
  state: {
    theme: {}
},
mutations: {
    SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.theme = theme;
    }
},
  actions: {},
  modules: {
      theme
  },
})