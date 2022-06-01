/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-31 11:03:58
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-06-01 11:07:53
 * @FilePath: \vue3-template\src\util\storeModules\system-login.js
 * @Description: 系统登录
 */
import { get, post } from '@/util/http.js'
export default {
  state: {
    form: {
      account: '',
      password: '',
      code: ''
    },
    base64: '',
    userInfo: ''
  },
  mutations: {
    setUserInfo(state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    async getCode({ state }) {
      try {
        const { data } = await get({ url: '/ImgCheck' })
        state.base64 = data
      } catch (error) {
        console.log(error)
      }
    },
    async login({ state }) {
      try {
        const { account, password, code: validCode } = state.form
        const { code, data, message } = await post({ url: '/Login', params: { account: account, password: password, code: validCode } })
        if (code === 1) {
          state.userInfo = data
          // 前往首页
          location.hash = '#/'
        } else {
          console.log(message)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
