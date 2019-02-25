import Vue from 'vue'//引入vue
import Router from 'vue-router'//引入路由
import Home from './views/Home.vue'//引入组件
import store from './store'//引入状态管理
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/adcontent',
      name: 'adcontent',
      component: () => import('./views/adContent.vue')
    },
    {
      path: '/login',
      name: "login",
      component: () => import('./views/login.vue')
    },
    {
      path: "/register",
      name: 'register',
      component: () => import('./views/register.vue')
    },
    {
      path: "/writeAd",
      name: "writeAd",
      component: () => import('./views/writeAd.vue'),
      //路由守卫-->进入写广告必须登录
      beforeEnter(to, from, next) {
        let status = store.getters.islogin;
        if (!status) {
          alert("先登录")

        } else {
         next()
        }
      }
    }
    , {
      path: "*",
      redirect: "/"
    }
  ]
})
