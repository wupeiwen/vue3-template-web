<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 11:34:22
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 15:37:11
 * @FilePath: \clues-web\src\App.vue
 * @Description: 路由入口
-->
<template>
  <router-view/>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('common', ['getDicts'])
  },
  created () {
    // this.getDicts()
  }
}
</script>

<style lang="scss">
#app {
  transform: scale(1, 1);
  transform-origin: left top;
  width: 1280px;
  height: 800px;
}
</style>
