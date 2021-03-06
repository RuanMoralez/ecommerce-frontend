import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios'

Vue.config.productionTip = false
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
