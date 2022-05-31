/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 11:34:22
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 15:26:53
 * @FilePath: \clues-web\src\util\router.js
 * @Description: vue-router相关配置
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import systemLogin from '@/pages/system-login.vue'
import statusInfo from '@/pages/status-info.vue'

const routes = [
  {
    path: '/',
    redirect: '/system-login'
  },
  // 登录页面
  {
    path: '/system-login',
    name: 'systemLogin',
    component: systemLogin
  },
  // 状态信息页面
  {
    path: '/status-info/:code',
    name: 'statusInfo',
    component: statusInfo
  },
  // 未知路由
  {
    path: '/:pathMatch(.*)*',
    redirect: '/status-info/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
