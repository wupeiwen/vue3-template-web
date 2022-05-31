/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-31 11:03:58
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 15:36:33
 * @FilePath: \clues-web\src\util\storeModules\system-login.js
 * @Description: 系统登录
 */
import { post } from '@/util/http.js'
export default {
  state: {
    userInfo: ''
  },
  mutations: {
    setUserInfo (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const { data } = await post({ url: '/Login', params: { user_account: payload.username, password: payload.password } })
        commit('setUserInfo', data)
        // 前往首页
        // location.hash = '#/'
      } catch (error) {
        console.log(error)
      }
    }

  }
}
