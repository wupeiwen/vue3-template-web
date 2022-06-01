<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 14:39:30
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-06-01 10:47:23
 * @FilePath: \information-web\src\pages\system-login.vue
 * @Description: 系统登录页
-->
<template>
  <div class="system-login">
    <section class="form">
      <section class="title">{{ env.VUE_APP_SYSTEM_NAME }}</section>
      <el-form label-width="60px">
        <el-form-item prop="account" label="账号">
          <el-input v-model="form.account" placeholder="请输入账号" />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input
            type="password"
            v-model="form.password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item prop="code" label="验证码">
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
            style="width: 140px; margin-right: 14px"
          />
          <el-image :src="base64" />
        </el-form-item>
        <el-button style="margin-top: 10px;width: 100%" type="primary" @click="login">
          登录
        </el-button>
      </el-form>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('system-login', ['form', 'base64']),
    env () {
      return process.env
    }
  },
  methods: {
    ...mapActions('system-login', ['getCode', 'login'])
  },
  created () {
    this.getCode()
  }
}
</script>

<style lang="scss">
.system-login {
  background: #eff7f8;
  height: 100%;
  position: relative;
  .title {
    font-size: 30px;
    font-weight: bold;
    color: #0050a0;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .form {
    width: 400px;
    height: 350px;
    position: absolute;
    left: calc(50% - 200px);
    top: calc(50% - 175px);
    background: #ffffff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    border: 1px solid #d1d5d9;
    padding: 30px 30px;
    box-sizing: border-box;
  }
}
</style>
