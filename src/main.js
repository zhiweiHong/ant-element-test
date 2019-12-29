// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './components/global.less'
import elementUI from 'element-ui'
import { changeThemeColor } from '../src/utils/themeColorClient'

import '../src/assets/css/index.scss'

Vue.config.productionTip = false

// mount axios Vue.$http and this.$http
Vue.use(VueAxios)
Vue.use(elementUI)
new Vue({
  router,
  store,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')
changeThemeColor('#13c2c2').then(t => console.log(t))
