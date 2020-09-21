import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('components/content/login/Login')
const Home = () => import('views/home/Home')
const Inquiry = () => import('views/inquiry/Inquiry')
const Order = () => import('views/order/Order')
const Route = () => import('views/route/Route')
const Opt = () => import('views/opt/Opt')
const Finance = () => import('views/finance/Finance')
const Partner = () => import('views/partner/Partner')
const Company = () => import('views/company/Company')
const Guide = () => import('views/guide/Guide')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/inquiry',
    component: Inquiry
  },
  {
    path: '/oder',
    component: Order
  },
  {
    path: '/route',
    component: Route
  },
  {
    path: '/opt',
    component: Opt
  },
  {
    path: '/finance',
    component: Finance
  },
  {
    path: '/partner',
    component: Partner
  },
  {
    path: '/company',
    component: Company
  },
  {
    path: '/guide',
    component: Guide
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
