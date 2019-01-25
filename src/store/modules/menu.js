import axios from '../../axios'
import Vue from 'vue'
import router from '../../router'
const vue = new Vue()
export default {
  namespaced: true,
  state: {
    all: [],
    top: [],
    bottom: [],
    loading: false
  },
  actions: {
    getMenu ({commit}, type = "") {  
      commit('setLoading', true)
      axios.get('/menu/' + type).then(res => {
        // res.data.res就是我们的数据
        commit('setMenu', {
          type,
          menu: res.data.res
        })
        commit('setLoading', false)

      })
    },
    delMenu ({commit}, {index, id, type}) {
      // axios.delete('/menu/id')
      console.log(index, id, type)
      axios.delete('/menu/1').then(res => {
        // 提示删除成功
        vue.$message.success('删除成功')
        // 如果成功
        commit('delMenu', {index, type})
      })
    },
    editItem ({commit}, item) {
      // item.id
      axios.put('/menu/id', item).then(res => {
        // console.log(res.data)
        commit('editItem', item)
        // 跳转回/
        router.push('/')
        vue.$message.success('修改成功')
      })
    }
  },
  mutations: {
    setMenu (state, {menu, type}) {
      let t = type || 'all'
      state[t] = menu
    },
    delMenu (state, {index, type}) {
      state[type].splice(index, 1)
    },
    editItem (state, item) {
      // 根据id找到对应的对象
      state.all.unshift(item)

      /* const i = state[item.type].find(i => i.id === item.id)
      i = item */
    },
    setLoading (state, status) {
      state.loading = status
    }
  }
}