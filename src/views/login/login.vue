<template>
  <div class="login">
    <transition name="fade">
      <div class="content">
        <p class="title">欢迎登录</p>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="30px" class="demo-ruleForm">
          <el-form-item label="" prop="iphone">
            <el-input prefix-icon="el-icon-phone-outline" type="text" v-model="ruleForm.iphone" auto-complete="off" size="small" placeholder="手机号" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input prefix-icon="el-icon-view" type="password" v-model="ruleForm.password" @keydown.enter.native="submitForm('ruleForm')" auto-complete="off" size="small" maxlength="20" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item style="margin-bottom: 0;">
            <el-button type="success" @click="submitForm('ruleForm')" size="small" class="submit">登录</el-button>
          </el-form-item>
        </el-form>
        <el-button type="text" class="register" @click="$router.push({ name: 'register' });">注册</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
// import Cookies from 'js-cookie';
export default {
  name: 'login',
  data () {
    const validatepassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        iphone: '',
        password: ''
      },
      rules: {
        iphone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          {
            pattern: /^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
            message: '请输入正确的手机账号',
            trigger: 'blur'
          }
        ],
        password: [
          { validator: validatepassword, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    login () {
      const params = {
        iphone: this.ruleForm.iphone,
        password: this.ruleForm.password
      };
      this.post('user/login', params)
        .then(e => {
          this.$message.success(e.msg);
          this.$router.push({ name: 'home' });
        })
        .catch(e => {
          this.$message.error(e.msg);
        });
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
          // Cookies.set('iphone', this.ruleForm.iphone);
          // Cookies.set('password', this.ruleForm.password);
        } else {
          return false;
        }
      });
    }
  },
  mounted () {

  }
};
</script>

<style lang="less" scoped>
@import url("./login");
</style>
