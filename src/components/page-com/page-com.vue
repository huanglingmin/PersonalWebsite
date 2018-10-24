<template>
  <div class="page">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="count"
      :page-size="pageSize"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ['count', 'pageSize'],
  methods: {
    handleCurrentChange (val) {
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
