import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  NavBar,
  Toast

} from 'vant'

import 'flex.css';


Vue.config.productionTip = false

Vue.use(NavBar)
Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
