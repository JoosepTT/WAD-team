import { createStore } from 'vuex'

// store holds application global state (user data and list of posts)
export default createStore({
  strict: true, // state can be changed only through mutations

  state: {
    account: {
        userName: "Maria Saar",
        userEmail: "maria.saar@ut.ee"
    },
    posts: []
  },
  getters: {
      allPosts: (state) => {
          return [...state.posts].sort((a, b) =>
              new Date(a.date) - new Date(b.date)
          )
      }
  },
  mutations: {
      SET_POSTS(state, posts) {
          state.posts = posts
      },
      ADD_NEW_POST(state, post) {
          state.posts.unshift(post)
      },
      INCREMENT_LIKE(state, postId) {
          const post = state.posts.find(p => p.id === postId)
          if (post) post.likes += 1
      },
      RESET_ALL_LIKES(state) {
          state.posts.forEach(p => (p.likes = 0))
      }
  },
  actions: {
      async loadPosts({ commit }) {
          try {
              const res = await fetch('/json/posts.json')
              const data = await res.json()
              commit('SET_POSTS', data)
          } catch (err) {
              console.error("Couldn't load posts: ", err)
          }
      },

      addNewPost({commit, dispatch}, post) {
          commit('ADD_NEW_POST', post)
          // await dispatch('savePostsToJson')

          /*
          // saving to local storage
          const existing = JSON.parse(localStorage.getItem('newPosts') || '[]')
          existing.unshift(post) // uusim eespool
          localStorage.setItem('newPosts', JSON.stringify(existing))

          // adding immediately to Vuex
          commit('ADD_POST', post)
          */
      },

      async likePost({ commit, dispatch }, postId) {
          commit('INCREMENT_LIKE', postId)
          // await dispatch('savePostsToJson') // only if server accepts PUT
      },

      async resetAllLikes({ commit, dispatch }) {
          commit('RESET_ALL_LIKES')
          // await dispatch('savePostsToJson')
      },

      /*
      // saves all posts in store back to public/json/posts.json
      async savePostsToJson({ state }) {
          try {
              await fetch('/json/posts.json', {
                  method: 'PUT', // or POST (if server supports)
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(state.posts, null, 2)
              })
          } catch (err) {
              console.error("Couldn't save to json" , err)
          }
      }
      */
  }
})
