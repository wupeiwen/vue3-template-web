/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 11:34:22
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-03-31 11:15:38
 * @FilePath: /tea-garden-web/src/util/store.js
 * @Description: vuex相关配置
 */
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// 读取./storeModules下的所有js文件并注册模块
const requireModule = require.context('./storeModules', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '')
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(fileName).default
  }
})

export default createStore({
  modules,
  plugins: [createPersistedState({ storage: window.localStorage })]
})
