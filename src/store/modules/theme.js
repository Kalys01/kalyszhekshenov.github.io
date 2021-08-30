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
      else
        commit('SET_THEME', 'light')
    },
    TOGGLE_THEME( {commit} ) {
      switch (localStorage.theme) {
        case 'light':
          commit('SET_THEME', 'dark')
          break;
      
        default:
          commit('SET_THEME', 'light')
          break;
      }
    },
  },

  getters: {
    GET_THEME(state) {
      return state.theme;
    }
  }
}