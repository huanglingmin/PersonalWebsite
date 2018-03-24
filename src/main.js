// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import axios from 'axios';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/fonts/style.css';
// import 'assets/scss/reset.css';
// import 'assets/main.css';

Vue.config.productionTip = false;
Vue.use(router);
Vue.use(ElementUI);
let api = axios.create({});
Vue.prototype.api = api;

/* eslint-disable no-new */
// new Proxy(api, {
//   get (target, propKey, receiver) {
//     return function (...args) {
//       return target[propKey](...args)
//         .then((res) => {
//           const resData = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
//           return typeof resData.obj === 'string' ? JSON.parse(resData.obj) : resData.obj;
//         })
//         .catch((err) => {
//           throw err;
//         });
//     };
//   }
// });
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
