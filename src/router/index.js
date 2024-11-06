import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/index.vue'
import Washing from '../views/WashingMachine.vue'
import ProgramTest from '../views/ProgrammingTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: "/washing-machine",
    name: "washing-machine",
    component: Washing
  },
  {
    path: "/programming-test",
    name: "programming-test",
    component: ProgramTest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
