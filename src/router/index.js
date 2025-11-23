import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'

// routes contains all the pages in the application:
const routes = [
    {path: '/', name: 'home', component: HomeView},
    {path: '/add-post',  name: 'addpost',  component: PostView}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
