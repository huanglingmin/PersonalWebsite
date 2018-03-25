import Vue from 'vue';
import Vuex from 'vuex';
import Public from './Public/';
import List from './List/';
Vue.use(Vuex);
let Store = new Vuex.Store({
  modules: {
    Public,
    List
  }
});
export default Store;
