<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 14:39:30
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-04-18 14:59:57
 * @FilePath: \tea-garden-web\src\pages\system-login.vue
 * @Description: 系统登录页
-->
<template>
  <div class="system-login">
    <div class="inner">
      <i class="login-logo" />
      <i class="login-name" />
      <span class="login-label-username">账号</span>
      <input class="login-input-username" type="text" v-model="username" />
      <span class="login-label-password">密码</span>
      <input class="login-input-password" type="password" v-model="password" />
      <span class="login-button" @click="login({ username, password })"
        >登录</span
      >
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('system-login', ['login'])
  }
}
</script>

<style lang="scss">
.system-login {
  background: #eff7f8;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .inner {
    background: #ffffff;
    border-radius: 35px;
    width: calc(100% - 80px);
    height: calc(100% - 49.5px);
    margin: 25px 40px 24.5px 40px;
    position: relative;
    .login-logo {
      display: block;
      position: absolute;
      left: 560px;
      top: 74px;
      width: 70.5px;
      height: 57px;
      background-image: url("/public/image/system-login/icon-system-logo.png");
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .login-name {
      display: block;
      position: absolute;
      left: 575.5px;
      top: 139px;
      width: 50px;
      height: 29.5px;
      background-image: url("/public/image/system-login/icon-system-name.png");
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    @mixin login-label {
      font-size: 20px;
      font-family: PingFang SC-Medium, PingFang SC;
      font-weight: 500;
      color: #089bab;
      line-height: 23px;
    }
    .login-label-username {
      @include login-label;
      position: absolute;
      left: 371px;
      top: 243.5px;
    }
    .login-label-password {
      @include login-label;
      position: absolute;
      left: 371px;
      top: 349px;
    }
    @mixin login-input {
      font-size: 20px;
      font-family: PingFang SC-Regular, PingFang SC;
      font-weight: 400;
      color: #121a2d;
      width: 449px;
      height: 51px;
      line-height: 51px;
      border-top: 0;
      border-right: 0;
      border-bottom: 1px solid #121a2d;
      border-left: 0;
    }
    .login-input-username {
      @include login-input;
      position: absolute;
      left: 371px;
      bottom: 430px;
    }
    .login-input-password {
      @include login-input;
      position: absolute;
      left: 371px;
      bottom: 326px;
    }
    .login-button {
      position: absolute;
      left: 370px;
      bottom: 175.5px;
      width: 458px;
      height: 50px;
      background: #089bab;
      font-family: PingFang SC-Bold, PingFang SC;
      font-weight: bold;
      color: #ffffff;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>
