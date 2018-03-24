<template>
  <div class="content">
    <div class="topBar">
      <div class="logo">
        <span>PersonalWebsite</span>
      </div>
      <div class="userInfo">
        <span>您好 {{username}}</span>
        <span class="userImg icon-users2" @click="ExitLogin"></span>
      </div>
    </div>
    <div class="leftMenu">
      <el-row class="tac">
        <el-col :span="24">
          <el-menu default-active="" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="rgb(73, 80, 96)" text-color="#fff">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  data() {
    return {
      username: ''
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ExitLogin() {
      console.log('退出');
    }
  },
  mounted() {
    this.username = Cookies.get('username');
    let password = Cookies.get('password');
    console.log(password);
  }
};
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  .leftMenu {
    overflow: hidden;
    width: 200px;
    min-height: 1000px;
    height: 100%;
    background: rgb(73, 80, 96);
  }
  .topBar {
    width: 100%;
    height: 56px;
    background-color: #fff;
    line-height: 56px;
    .logo{
      width: 200px;
      height: 56px;
      float: left;
      background: rgb(73, 80, 96);
      color: #6e6e6e;
      span{
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        margin-left: 20px;
      }
    }
    .userInfo {
      color: #666;
      float: right;
      margin-right: 30px;
      cursor: pointer;
      .userImg {
        vertical-align: middle;
        font-size: 30px;
      }
    }
  }
}
</style>
