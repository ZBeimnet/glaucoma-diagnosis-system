import { createStore } from 'vuex'

// Create a new store instance.
const store: any = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state: any) {
      state.count++
    }
  }
})

export default store