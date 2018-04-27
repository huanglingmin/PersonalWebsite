import * as types from './mutations-types';
export default {
  [types.GET_INFO] (state, data) {
    state.info = data;
  }
};
