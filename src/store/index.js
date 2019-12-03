import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mapTree: null,
  },
  mutations: {
    mapTree(state, value) {
      state.mapTree = value
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
