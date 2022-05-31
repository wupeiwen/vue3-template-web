<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 14:38:02
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-04-18 14:59:41
 * @FilePath: \tea-garden-web\src\pages\status-info.vue
 * @Description: 状态信息 403 404 500
-->
<template>
  <div class="status-info">
    <div class="status-bg" :class="[`bg-${code}`]"></div>
    <span class="status-button">返回首页</span>
  </div>
</template>

<script>
export default {
  computed: {
    code () {
      return this.$route.params.code
    }
  },
  methods: {
    handleClickButton () {
      location.hash = '#/base-list'
    }
  }
}
</script>

<style lang="scss">
.status-info {
  height: 100%;
  background: #ffffff;
  position: relative;
  .status-bg {
    width: 490px;
    height: 281px;
    position: absolute;
    left: 395px;
    top: 213.5px;
  }
  .bg-403 {
    background-image: url("/public/image/status-info/bg-403.png");
    background-size: cover;
  }
  .bg-404 {
    background-image: url("/public/image/status-info/bg-404.png");
    background-size: cover;
  }
  .bg-500 {
    background-image: url("/public/image/status-info/bg-500.png");
    background-size: cover;
  }
  .status-button {
    width: 278px;
    height: 50px;
    background: #089bab;
    border-radius: 15px 15px 15px 15px;
    text-align: center;
    line-height: 50px;
    position: absolute;
    left: 501.5px;
    top: 565px;
    font-size: 14px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #ffffff;
  }
}
</style>
