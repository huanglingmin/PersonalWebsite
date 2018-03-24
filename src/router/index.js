import Vue from 'vue';
import Router from 'vue-router';
// 按需加载
const home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
});
