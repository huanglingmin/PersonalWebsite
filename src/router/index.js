import Vue from 'vue';
import Router from 'vue-router';
// 按需加载
const home = r => require.ensure([], () => r(require('@/views/home')), 'home'); /** 主页面 */
const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login');/** 登录页 */
const textEditor = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/text-editor')), 'textEditor');/** 富文本编辑器 */

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {path: 'text-editor', name: 'text-editor', component: textEditor}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});
