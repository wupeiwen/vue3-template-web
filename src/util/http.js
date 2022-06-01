/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-01-20 13:57:49
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-06-01 11:01:37
 * @FilePath: \vue3-template\src\util\http.js
 * @Description: http封装
 */
import axios from 'axios'

// 基本路径
const baseUrl = process.env.VUE_APP_LOCATION

// 设置请求头
if (process.env.VUE_APP_MOCK_TOKEN) {
  axios.defaults.headers.common['X-Coding-Mock-Token'] = process.env.VUE_APP_MOCK_TOKEN
}
axios.defaults.headers.get['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

// 请求超时时间
// 2分钟
axios.defaults.timeout = 120000

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 10) {
      // 未登录状态跳转登录页
      location.hash = '#/system-login'
      return ''
    }
    return Promise.resolve(response)
  },
  error => {
    return Promise.reject(error.response)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export const get = ({ url, params, responseType }) => {
  return new Promise((resolve, reject) => {
    const options = { method: 'get', url: baseUrl + url }
    if (params) {
      options.params = params
    }
    if (responseType) {
      options.responseType = responseType
    }
    axios(options).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @param {Object} responseType [响应类型]
 * @param {Object} headers [请求头]
 *
 */
export const post = ({ url, params, responseType, headers }) => {
  return new Promise((resolve, reject) => {
    const options = { method: 'post', url: baseUrl + url, data: params }
    if (responseType) {
      options.responseType = responseType
    }
    if (headers) {
      options.headers = headers
    }
    axios(options)
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
