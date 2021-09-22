import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import img from '@/assets/gradient.jpg';
import VueLazyload from 'vue-lazyload'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

Vue.use(VueToast);

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: img,
  loading: img,
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
