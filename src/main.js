// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
*  应用入口 js
*/
import Vue from 'vue'
import App from './App'
/*引入router路由器*/
import router from './router'


/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  //components: {App}, //映射组件标签
  //template: '<App/>',//指定需要渲染到页面的模板
  router
})
