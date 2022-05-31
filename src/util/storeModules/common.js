/*
 * @Author: wupeiwen <javapeiwen2010@gmail.com>
 * @Date: 2022-04-06 14:25:14
 * @LastEditors: wupeiwen <javapeiwen2010@gmail.com>
 * @LastEditTime: 2022-05-31 15:29:02
 * @FilePath: \clues-web\src\util\storeModules\common.js
 * @Description: 描述
 */
import { get } from '@/util/http.js'
export default {
  state: {
    dicts: []
  },
  getters: {
    // 通过字典项parent_id查询包含的字典项
    getDictByParentId: (state) => (id) => {
      const dict = state.dicts.filter((item) => {
        if (item.parent_id === id) {
          return item
        } else {
          return ''
        }
      })
      return dict
    },
    // 通过字典项id查询字典项名称
    getDictItemNameById: (state) => (id) => {
      const dictItem = state.dicts.find((item) => {
        return item.id === id
      })
      if (dictItem) {
        return dictItem.name
      } else {
        return id
      }
    }
  },
  mutations: {},
  actions: {
    async getDicts ({ state }) {
      try {
        const { data } = await get({ url: '/DictList' })
        state.dicts = data.sort((a, b) => {
          return a.id - b.id
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
