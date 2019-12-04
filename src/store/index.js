import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapTree: null,
    savedMapTree: null,
  },
  mutations: {
    mapTree(state, value) {
      state.mapTree = value
    },
    savedMapTree(state, value) {
      state.savedMapTree = value
    }
  },
  getters: {
    mapTree(state) {
      return state.mapTree
    },
    savedMapTree(state) {
      return state.savedMapTree
    }
  },
  actions: {
    requestMapTree(state) {
      state.commit()
    }
  },
  modules: {
  }
})
