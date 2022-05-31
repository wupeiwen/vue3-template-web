<!--
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-04-08 14:39:29
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-04-21 14:41:36
 * @FilePath: \tea-garden-web\src\components\no-data.vue
 * @Description: 描述
-->
<template>
  <div
    class="no-data"
    :style="{ width: `${width}px`, height: `${height}px` }"
  ></div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 281
    },
    height: {
      type: Number,
      default: 309.5
    }
  }
}
</script>

<style lang="scss">
.no-data {
  background-image: url("/public/image/common/bg-null.png");
  background-size: cover;
}
</style>
