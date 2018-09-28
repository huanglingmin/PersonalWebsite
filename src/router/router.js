// 懒加载
const home = r => require.ensure([], () => r(require('@/views/home')), 'home'); /** 主页面 */
const login = r => require.ensure([], () => r(require('@/views/login/login')), 'login');/** 登录页 */
const register = r => require.ensure([], () => r(require('@/views/register/register')), 'register');/** 注册页 */
const userList = r => require.ensure([], () => r(require('@/views/userList/userList')), 'userList');/** 用户列表 */
const textEditor = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/text-editor')), 'textEditor');/** 富文本编辑器 */
const sortTable = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/sort-table')), 'sort-table');/** 表格拖动 */
const api = r => require.ensure([], () => r(require('@/views/my-page/moduleOne/api')), 'api');/** 表格拖动 */

export const redirect = { path: '/', redirect: '/login' };
export const Login = { path: '/login', name: 'login', title: '登录页', component: login };
export const Register = { path: '/register', name: 'register', title: '注册页', component: register };
// export const otherRouter = {};
export const appRouter = [
  {
    path: '/',
    name: 'userList',
    title: '帐号管理',
    component: home,
    children: [
      { path: 'userList', name: 'userList', title: '用户列表', component: userList }
    ]
  },
  {
    path: '/',
    name: 'home',
    title: '一些插件',
    component: home,
    children: [
      { path: 'text-editor', name: 'text-editor', title: '富文本编辑', component: textEditor },
      { path: 'sort-table', name: 'sort-table', title: '表格拖动', component: sortTable }
    ]
  },
  {
    path: '/',
    name: 'home',
    title: '封装',
    component: home,
    children: [
      { path: 'api', name: 'api', title: 'api封装', component: api }
    ]
  }
];
export const routes = [
  // otherRouter,
  redirect,
  Login,
  Register,
  ...appRouter
];
