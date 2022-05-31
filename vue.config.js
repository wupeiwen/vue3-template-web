/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 11:34:22
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 14:54:34
 * @FilePath: \clues-web\vue.config.js
 * @Description: vue-cli配置
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig(() => {
  const option = {
    transpileDependencies: true,
    publicPath: '/',
    outputDir: './dist',
    lintOnSave: process.env.NODE_ENV !== 'production',
    runtimeCompiler: false,
    productionSourceMap: true,
    devServer: {
      open: process.platform === 'darwin',
      host: '0.0.0.0',
      port: 8080,
      proxy: {}
    }
  }
  // 数据接口代理
  // option.devServer.proxy[`${process.env.VUE_APP_LOCATION}`] = {
  //   target: process.env.VUE_APP_TARGET,
  //   changeOrigin: true
  // }
  return option
})
