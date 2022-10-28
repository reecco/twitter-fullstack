import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SendTweet from '../components/SendTweet.vue'
import ViewTweet from '../components/ViewTweet.vue'
import SearchUser from '../components/SearchUser.vue'
import DeleteTweet from '../components/DeleteTweet.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/send',
    name: 'send',
    component: SendTweet
  },
  {
    path: '/view',
    name: 'view',
    component: ViewTweet
  },
  {
    path: '/search',
    name: 'search',
    component: SearchUser
  },
  {
    path: '/delete',
    name: 'delete',
    component: DeleteTweet
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
