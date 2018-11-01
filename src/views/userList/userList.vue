<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;text-align:center"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="createdAt"
        label="日期"
        header-align="center">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        header-align="center">
      </el-table-column>
      <el-table-column
        prop="iphone"
        label="手机号"
        header-align="center">
      </el-table-column>
      <el-table-column
      label="操作"
      header-align="center">
      <div slot-scope="scope">
        <el-button size="mini" @click="delUser(scope.row.id)">删除</el-button>
      </div>
      </el-table-column>
    </el-table>
    <page-com :count="params.count" :pageSize="params.pageSize" @handleCurrentChange="handleCurrentChange"/>
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
      params: {
        count: 0,
        pageNum: 1,
        pageSize: 10
      }
    };
  },
  mounted () {
    this.getUserList();
  },
  methods: {
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex % 2) {
        // return 'warning-row';
        return 'success-row';
      } else {
        return '';
      }
    },
    handleCurrentChange (val) {
      this.params.pageNum = val;
      this.getUserList();
    },
    // 删除用户
    delUser (id) {
      console.log(id);
      this.post('/delUserList', { id })
        .then(res => {
          this.getUserList();
          this.$message.success(res.msg);
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    },
    getUserList () {
      this.get('/userList', this.params).then((res) => {
        this.tableData = res.data.rows;
        this.params.count = res.data.count;
      });
    }
  }
};
</script>

<style lang="less">
@import url("./userList");
</style>
