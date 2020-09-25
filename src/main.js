import {
  createProvider
} from './vue-apollo'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './registerServiceWorker'
import './assets/scss/main.scss';
import {
  BootstrapVue
} from 'bootstrap-vue';

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')