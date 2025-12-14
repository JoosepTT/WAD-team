import { createStore } from 'vuex'

export default createStore({
  strict: true, // state can be changed only through mutations
  state: {
    account: {},
    posts: [],
  },
  getters: {
    allPosts: (state) => {
      return [...state.posts].sort((a, b) => new Date(b.date) - new Date(a.date)) // Sorteeri uuem eespool
    },
    getAccount: (state) => {
      return state.account
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setAccount(state, account) {
      state.account = account
    },
    clearAccount(state) {
      state.account = {}
    }
  },
  actions: {
    async authenticate() {
      try {
        const res = await fetch('http://localhost:3000/api/auth', { credentials: 'include' });
        const data = await res.json()
        return data.authenticated
      } catch (err) {
        console.log(err.message);
      }
      return false
    },
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('http://localhost:3000/api/posts/', { credentials: true })
        const data = await response.json()
        commit('setPosts', data)
      } catch (err) {
        console.log(err.message)
      }
    },
    async logIn({commit}, {email, password}) {
      try {
        const res = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          credentials: 'include',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email, password})
      })
        const data = await res.json()
        if (!res.ok) return false
        commit('setAccount', {
          id: data.id,
          email: data.email,
          username: data.username
        })
        console.log(this.state.account)
        return true
      } catch (err) {
        return false
      }
    },
    async logOut({ commit }) {
      await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
        credentials: 'include',
      })
      commit('clearAccount')
    }
  }
})
