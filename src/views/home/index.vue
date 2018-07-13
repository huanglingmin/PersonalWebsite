<template>
  <div>
    <layout></layout>
  </div>
</template>
<script>
// import Cookies from 'js-cookie';
import layout from '../../components/layout';
import { mapState, mapActions } from 'vuex';
export default {
  mounted() {
    // let username = Cookies.get('username');
    // let password = Cookies.get('password');
    // console.log(username, '用户名');
    // console.log(password, '密码');
    console.log(this.helloWord);
    // this.getInfo();
  },
  components: {
    layout
  },
  methods: {
    ...mapActions(['getInfo'])
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
