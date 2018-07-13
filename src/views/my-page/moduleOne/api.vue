<template>
  <div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: []
    };
  },
  mounted () {
    this.testApi();
  },
  methods: {
    testApi () {
      this.get('/portal-web/role/list.json')
        .then(e => {
          if (e.result === '1') {
            this.data = e.data;
            console.log(e.data);
          }
        });
      // .catch(e => { console.log(e.msg); });
    }
  }
};
</script>
