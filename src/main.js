/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-03-21 11:34:22
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 15:09:28
 * @FilePath: \clues-web\src\main.js
 * @Description: 主入口文件
 */
import { createApp } from 'vue'
import App from '@/App.vue'
import registerComponents from '@/util/registerComponents'
import router from '@/util/router'
import store from '@/util/store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import '@/assets/style/global.scss'

const app = createApp(App)
registerComponents(app)
app.use(store)
app.use(router)
app.use(ElementPlus, { locale: zhCn })
app.mount('#app')
