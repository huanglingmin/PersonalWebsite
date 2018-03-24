import Vue from 'vue';
import Vuex from 'vuex';
import Pub from './Public/';
Vue.use(Vuex);
let Store = new Vuex.Store({
  modules: {
    Pub
  }
});
export default Store;
