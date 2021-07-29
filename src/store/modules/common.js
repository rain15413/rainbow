const state = {
  collapsed: false
}

const mutations = {
  COLLAPSE (state) {
    state.collapsed = !state.collapsed
  },
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
