import Vue from 'vue'
import VueRouter from 'vue-router'

import store from "@/store";

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

// const AddFlight = () => import('views/route/AddFlight')
// const CurrentFlight = () => import('views/route/CurrentFlight')
// const HistoryFlight = () => import('views/route/HistoryFlight')
// const AWBManage = () => import('views/route/AWBManage')
// const AirRate = () => import('views/route/AirRate')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login,
    name:'Login',
    meta:{
      title:'登录'
    }
  },
  {
    path: '/home',
    component: Home,
    name:'Home',
    meta:{
      title:'首页'
    }
  },
  {
    path: '/route',
    component: Route,
    // children: [
    //   {
    //     path: 'currentflight',
    //     component: CurrentFlight
    //   },
    //   {
    //     path: 'historyflight',
    //     component: HistoryFlight
    //   },
    //   {
    //     path: 'awbmanage',
    //     component: AWBManage
    //   },
    //   {
    //     path: 'airrate',
    //     component: AirRate
    //   }
    // ],
    name:'Route',
    meta:{
      title:'航线'
    }
  },
  {
    path: '/inquiry',
    component: Inquiry,
    name:'Inquiry',
    meta:{
      title:'询价'
    }
  },
  {
    path: '/order',
    component: Order,
    name:'Order',
    meta:{
      title:'订单'
    }
  },
  {
    path: '/opt',
    component: Opt,
    name:'Opt',
    meta:{
      title:'操作'
    }
  },
  {
    path: '/finance',
    component: Finance,
    name:'Finance',
    meta:{
      title:'财务'
    }
  },
  {
    path: '/partner',
    component: Partner,
    name:'Partner',
    meta:{
      title:'合作伙伴'
    }
  },
  {
    path: '/company',
    component: Company,
    name:'Company',
    meta:{
      title:'我的公司'
    }
  },
  {
    path: '/guide',
    component: Guide,
    name:'Guide',
    meta:{
      title:'工作指南'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.state.isLogged) next({name: 'Login'})
  else next()
  document.title= to.meta.title
})

export default router
