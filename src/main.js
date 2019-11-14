import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import GlobalProperties from './plugins/GlobalProperties'

Vue.config.productionTip = false
Vue.use(GlobalProperties)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
