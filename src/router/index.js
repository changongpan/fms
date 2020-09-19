import Vue from 'vue'
import VueRouter from 'vue-router'

const Bsa = () => import('views/bsa/Bsa')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/bsa'
  },
  {
    path: '/bsa',
    component: Bsa
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
