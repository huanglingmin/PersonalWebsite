import Vue from 'vue';
import Router from 'vue-router';
// 懒加载
const home = r => require.ensure([], () => r(require('@/views/home')), 'home'); /** 主页面 */
const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login');/** 登录页 */
const textEditor = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/text-editor')), 'textEditor');/** 富文本编辑器 */
const sortTable = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/sort-table')), 'sort-table');/** 表格拖动 */

Vue.use(Router);
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', name: 'login', title: '登录页', component: login },
  {
    path: '/',
    name: 'home',
    component: home,
    children: [
      { path: 'text-editor', name: 'text-editor', title: '富文本编辑', component: textEditor },
      { path: 'sort-table', name: 'sort-table', title: '表格拖动', component: sortTable }
    ]
  }
];
export default new Router({
  mode: 'history',
  base: '/',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
