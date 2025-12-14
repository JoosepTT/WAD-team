import { createStore } from 'vuex'

export default createStore({
  strict: true, // state can be changed only through mutations
  state: {
    account: {
        userName: "Maria Saar",
        userEmail: "maria.saar@ut.ee"
    },
    posts: [],
  },
  getters: {
    allPosts: (state) => {
      return [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date)) // Sorteeri uuem eespool
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    clearAccount(state) {
      state.account = {}
    }
  },
  actions: {
      async fetchPosts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/api/posts/')
        const data = await response.json()
        commit('setPosts', data)
      } catch (err) {
        console.log(err.message)
      }
    }
  }
})
