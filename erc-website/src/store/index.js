import { createStore } from 'vuex'

export default createStore({
  state: {
    cursorEnlarged: false,
    cursorNegative: false
  },
  mutations: {
    // for cursors - handling animation
    makeCursorEnlarged: (state) => {
      state.cursorEnlarged = true
    },
    makeCursorNegative: (state) => {
      state.cursorNegative = true
    },
    makeCursorNormal: (state) => {
      state.cursorEnlarged = false
      state.cursorNegative = false
    }
  },
  actions: {},
  modules: {}
})
