import * as types from './mutation-types';
export default {
  [types.GET_INFO] (state, data) {
    state.info = data;
  },
  [types.CHANGE_DATA] (state, data) {
    state.helloWord = data;
  }
};
