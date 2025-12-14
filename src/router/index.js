import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPostView from '../views/AddPostView.vue'
import SinglePostView from '../views/SinglePostView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
    {
      path: '/',
        name: 'HomeView',
        component: () =>
            import ("../views/HomeView.vue")
    },
    {
      path: '/api/AddPostView',
      name: 'AddPostView',
      component: AddPostView
    },
    {
        path: "/api/SinglePostView/:id",
        name: "SinglePostView",
        component: SinglePostView,
    },
    {
      path: '/LoginView',
      name: 'LoginView', 
      component: LoginView
    },
    { //will route to AllPosts view if none of the previous routes apply
      path: '/:catchAll(.*)',
      name: 'HomeView',
      component: HomeView
    }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL), // works without having to configure a server
  routes
})

export default router