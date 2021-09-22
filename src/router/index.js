import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Quiz from '../views/Quiz.vue'
import Main from '../views/Main.vue'
import hocthuat from '../views/hocthuat.vue'
import nghethuat from '../views/nghethuat.vue'
import thethao from '../views/thethao.vue'
import xahoi from '../views/xahoi.vue'
import mcq from '../views/mcq.vue'
import Quizzes from '../views/Quizzes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/quizzes',
    name: 'Quizzes',
    component: Quizzes
  },
  {
    path: '/1000-ngay-o-ams',
    name: '1000-ngay-o-ams',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Quiz.vue')
  },
  {
    path: '/mcq',
    name: mcq,
    component: mcq
  },
  {
    path: '/hocthuat',
    name: 'hocthuat',
    component: hocthuat
  },
  {
    path: '/nghethuat',
    name: 'nghethuat',
    component: nghethuat
  },
  {
    path: '/thethao',
    name: 'thethao',
    component: thethao
  },
  {
    path: '/xahoi',
    name: 'xahoi',
    component: xahoi
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
