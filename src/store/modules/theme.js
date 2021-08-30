export default {
  state: {
    theme: {}
  },
  mutations: {
      SET_THEME(state, theme) {
        state.theme = theme;
        localStorage.theme = theme;
      }
  },
  actions: {
    INIT_THEME( {commit} ) {
      const cachedTheme = localStorage.theme ? localStorage.theme : false;
      if(cachedTheme)
        commit('SET_THEME', cachedTheme)
      commit('SET_THEME', 'light')
    }
  },
  getters: {
  }
}