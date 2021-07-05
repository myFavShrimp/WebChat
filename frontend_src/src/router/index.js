import { createRouter, createWebHashHistory } from 'vue-router'
import Chat from '../views/Chat.vue'
import History from '../views/History.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
