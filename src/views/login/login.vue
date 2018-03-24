<template>
  <div class="login">
    <transition name="fade">
      <div class="content">
        <p class="title">欢迎登录</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="30px" class="demo-ruleForm">
          <el-form-item label="" prop="username">
            <el-input type="text" v-model="ruleForm.username" auto-complete="off" size="small" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="ruleForm.password" @keydown.enter.native="submitForm('ruleForm')" auto-complete="off" size="small" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')" size="small" class="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
  </div>
</template>

<script>
import Cookies from 'js-cookie';
export default {
  data() {
    var validateusername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    var validatepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: 'Admin',
        password: ''
      },
      rules: {
        username: [
          { validator: validateusername, trigger: 'blur' }
        ],
        password: [
          { validator: validatepassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          Cookies.set('username', this.ruleForm.username);
          Cookies.set('password', this.ruleForm.password);
          this.$router.push({ name: 'home' });
        } else {
          return false;
        }
      });
    }
  },
  mounted() {

  }
};
</script>

<style lang="less" scoped>
@import url('./login');
</style>
