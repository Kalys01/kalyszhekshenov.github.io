export default {
  state: {
    navLinks: [
      { name: "Home", to: "/" },
      { name: "Contact", to: "/contact" },
      { name: "About", to: "/about" }
    ]
  },
  mutations: {
  },
  actions: {
  },

  getters: {
    links(state) {
      return state.navLinks
    }
  }
}