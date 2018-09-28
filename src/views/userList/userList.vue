<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="createdAt"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="iphone"
        label="手机号">
      </el-table-column>
    </el-table>
    <page-com :count="count" @handleCurrentChange="handleCurrentChange"/>
  </div>
</template>

<script>
import pageCom from '@/components/page-com/page-com.vue';
export default {
  name: 'user_list',
  components: { pageCom },
  data () {
    return {
      tableData: [],
      count: 0,
      params: {
        pageNum: 1,
        pageSize: 3
      }
    };
  },
  mounted () {
    this.getUserList();
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    handleCurrentChange (val) {
      this.params.pageNum = val;
      this.getUserList();
    },
    getUserList () {
      this.get('/user_list', this.params).then((res) => {
        this.tableData = res.rows;
        this.count = res.count;
      });
    }
  }
};
</script>

<style lang="less">
@import url("./userList");
</style>
