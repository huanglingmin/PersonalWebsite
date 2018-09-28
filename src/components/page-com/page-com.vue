<template>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="3"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['count'],
  methods: {
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
      this.$emit('handleCurrentChange', val);
    }
  }
};
</script>

<style scoped>
.page {
  margin-top: 30px;
  text-align: center;
}
</style>
