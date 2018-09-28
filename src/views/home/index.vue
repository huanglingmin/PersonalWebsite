<template>
  <div>
    <layout></layout>
  </div>
</template>
<script>
// import Cookies from 'js-cookie';
import layout from '../../components/layout';
import { mapState, mapActions } from 'vuex';
import qs from 'qs';
export default {
  mounted () {
    // let username = Cookies.get('username');
    // let password = Cookies.get('password');
    // console.log(username, '用户名');
    // console.log(password, '密码');
    console.log(this.helloWord);
    // this.getInfo();
    // this.testAPI();
  },
  components: {
    layout
  },
  methods: {
    ...mapActions(['getInfo']),
    testAPI () {
      const params = {
        name: 'huanglingmin',
        password: 123456,
        age: 25
      };
      this.post('/', qs.stringify(params))
        .then(res => {
          if (res.status === 200) {
            console.log(res);
          }
        }).catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    ...mapState({
      helloWord: state => state.Public.helloWord
    })
  }
};
</script>

<style lang="less" scoped>
</style>
