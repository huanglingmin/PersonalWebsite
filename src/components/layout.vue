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
          <el-menu default-active="" class="el-menu-vertical-demo" @select="selectMenu" router @open="handleOpen" @close="handleClose" background-color="rgb(73, 80, 96)" text-color="#fff">
            <el-submenu v-for="item in menuList" :index="item.title" :key="item.title">
              <template slot="title">
                <i :class="item.icon"></i>
                <span class="title">{{item.title}}</span>
              </template>
              <el-menu-item v-for="subItem in item.children" :index="subItem.name" :key="subItem.title">{{subItem.title}}</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <!-- 子路由页面入口 -->
    <div class="context">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Cookies from 'js-cookie';
import { mapState, mapGetters } from 'vuex';
export default {
  data () {
    return {
      username: ''
    };
  },
  computed: {
    ...mapGetters(['menuList']),
    ...mapState({
      cityNode: stae => stae.Public.cityNode
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    },
    selectMenu (index) {
      console.log(index);
    },
    ExitLogin () {
      this.get('/outLogin')
        .then(e => {
          this.$message.success(e.msg);
          this.$router.push({ name: 'login' });
        })
        .catch(err => {
          this.$message.error(err.msg);
        });
    }
  },
  mounted () {
    // this.getWetherData();
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
    float: left;
    .title {
      font-size: 1rem;
    }
  }
  .topBar {
    width: 100%;
    height: 56px;
    background-color: #fff;
    line-height: 56px;
    z-index: 1000;
    .logo {
      width: 200px;
      height: 56px;
      float: left;
      background: rgb(73, 80, 96);
      color: #6e6e6e;
      span {
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
  .context {
    height: ~"calc(100% - 60px)";
    padding: 20px;
    position: relative;
    overflow: hidden;
    overflow-y: scroll;
  }
}
</style>
