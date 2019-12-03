import Vue from 'vue'
import router from './router'
import App from '../src/components/home/home'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
