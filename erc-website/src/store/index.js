import { createStore } from 'vuex'
import cursorModule from './modules/cursor'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    cursor: cursorModule
  }
})
