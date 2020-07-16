import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueResource from 'vue-resource';


Vue.config.productionTip = false
Vue.use(VueResource);


import Header from '@/components/Header'
Vue.component("header-app", Header);


import Country from '@/components/Country'
Vue.component("country-app", Country);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
