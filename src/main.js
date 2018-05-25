import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {tween} from 'popmotion'
import element from 'element-ui'

Vue.use(tween)
Vue.use(element)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
