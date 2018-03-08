// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import 'normalize.css'
import axios from 'axios'
import api, { domain } from './js/api.js'

import './assets/css/style.css'
import './less/index.less'
Vue.use(ElementUI)

// 配置默认域名, 这样请求的时候就不用在url里每次手动加域名了
axios.defaults.baseURL = domain;
// 因为我们调用的接口跨域了, 默认情况下接口给我们设置cookie无效
axios.defaults.withCredentials = true;
// 把axios和api添加到Vue原型
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

new Vue({
  el: '#app',
  router,
  components:{App},
  
  template:'<App/>'
  })
