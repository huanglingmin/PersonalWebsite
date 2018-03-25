<template>
  <div>
    <layout></layout>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import layout from '../../components/layout';
export default {
  mounted() {
    let username = Cookies.get('username');
    let password = Cookies.get('password');
    console.log(username);
    console.log(password);
  },
  components: {
    layout
  }
};
</script>

<style lang="less" scoped>

</style>
