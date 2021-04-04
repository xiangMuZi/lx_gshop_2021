/*
*  路由器对象模块【将Pages下的路由组件管理起来，可以直接通过路径访问】
*/
import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../Pages/Msite/Msite'
import Search from '../Pages/Search/Search'
import Order from '../Pages/Order/Order'
import Profile from '../Pages/Profile/Profile'
import Login from '../Pages/Login/login'

//声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite,
      /*控制Footer的显示隐藏*/
      meta:{
        showFooter: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    }
  ]
})
