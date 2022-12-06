import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入全局样式
import './assets/css/global.css'

import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

import { _get , _post } from "./utils/request";

//axios封装
Vue.prototype.$request = {
  get:_get,
  post:_post
}


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
