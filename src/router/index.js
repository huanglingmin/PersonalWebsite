import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './router';
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
