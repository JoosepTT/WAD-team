import { createStore } from 'vuex'

export default createStore({
  strict: true,

  state: {
    account: {userName: "Maria Saar", userEmail: "maria.saar@ut.ee"},
    postsList: [
      {id:1, author: "Maria Saar", date: "2024-10-22T14:25:30Z", text_content: "Just visited this town in southern Estonia.", likes: 13, comments: 3, bookmarks: 2, comment_child_id: 0},
      {id:2, author: "Peeter Põhi", date: "2024-10-23T08:20:10Z", text_content: "Anyone knows in which room is the lab today?", likes: 0, comments: 1, bookmarks: 0, comment_child_id: 0}
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
