import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Dashboard from '@/components/Dashboard'
import Email from '@/components/Email'

Vue.config.productionTip = false
Vue.component('Dashboard', Dashboard)
Vue.component('Email', Email)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
