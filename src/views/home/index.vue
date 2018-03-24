<template>
  <div>
    <layout></layout>
    <textEditor></textEditor>
  </div>
</template>
<script>
import Cookies from 'js-cookie';
import layout from '../../components/layout';
import textEditor from '../../components/text-editor/text-editor';
export default {
  mounted() {
    let username = Cookies.get('username');
    let password = Cookies.get('password');
    console.log(username);
    console.log(password);
  },
  components: {
    textEditor,
    layout
  }
};
</script>

<style lang="less" scoped>

</style>
