import Vue from 'vue';
import App from './App.vue';

import Ionic from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import { IonicVueRouter } from '@ionic/vue';

Vue.config.productionTip = false
Vue.use(IonicVueRouter);
Vue.use(Ionic);

const router = new IonicVueRouter({
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: () => import('./components/HomePage'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About'),
    }
  ]
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');