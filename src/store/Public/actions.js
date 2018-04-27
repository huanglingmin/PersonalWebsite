import api from '@/api/index';
export default {
  getInfo ({ commit }) {
    console.log('调用了');
    api.get('/wechatshop-user-service/customer/arealist')
      .then(e => {
        if (e.status === 200) {
          console.log(e.data);
        }
      })
      .catch(e => {
        console.error(e.msg);
      });
  }
};
