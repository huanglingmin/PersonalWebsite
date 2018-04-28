/**
 * actions中的方法,需要在入口文件出调用一遍
 * 调用一遍之后将数据缓存在store中,全局可用
 */
import api from '@/api/index';
import * as types from './mutation-types.js';
export default {
  getInfo ({ commit }) {
    api.get('/wechatshop-user-service/customer/arealist')
      .then(e => {
        if (e.status === 200) {
          commit(types.GET_INFO, e.data);
        }
      })
      .catch(e => {
        console.error(e.msg);
      });
  },
  changeData ({ commit }) {
    commit(types.CHANGE_DATA, 'data change success');
  }
};
