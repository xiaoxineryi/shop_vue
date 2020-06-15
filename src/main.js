import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router/index.js'
import './styles/font-awesome-4.7.0/css/font-awesome.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index.js';
import axios from 'axios'
import api from './request/api.js'

Vue.prototype.$api = api;
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
