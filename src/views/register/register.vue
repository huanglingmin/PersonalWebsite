<template>
<div class="register">
  <transition name="fade">
      <div class="content">
        <p class="title">注册帐号</p>
        <el-form label-position="right" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="30px" class="demo-ruleForm">
          <el-form-item label="" prop="iphone">
            <el-input prefix-icon="el-icon-phone-outline" type="text" v-model="ruleForm.iphone" auto-complete="off" size="small" placeholder="手机号" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="" prop="username">
            <el-input prefix-icon="el-icon-document" type="text" v-model="ruleForm.username" auto-complete="off" size="small" placeholder="用户名" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input prefix-icon="el-icon-view" type="password" v-model="ruleForm.password" @keydown.enter.native="submitForm('ruleForm')" auto-complete="off" size="small" maxlength="20" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')" size="small" class="submit">注册</el-button>
          </el-form-item>
        </el-form>
      </div>
    </transition>
</div>
</template>

<script>
export default {
  name: 'register',
  data () {
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
        iphone: '15770903097',
        username: '',
        password: '1234523'
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
    register () {
      const params = {
        iphone: this.ruleForm.iphone,
        username: this.ruleForm.username,
        password: this.ruleForm.password
      };
      this.post('/register', params)
        .then(e => {
          if (e.status === 200) {
            this.$message.success(e.msg);
          } else {
            this.$message.error(e.msg);
          }
        })
        .catch(e => { });
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.register();
          this.$router.push({ name: 'login' });
        } else {
          return false;
        }
      });
    }
  },
  mounted () {}
};
</script>

<style lang="less" scoped>
@import url("./register");
</style>
