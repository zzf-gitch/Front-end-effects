import { createStore } from 'vuex'
import sort from './modules/sort.js'
export default createStore({
  modules: {
    sort // 排序数据的vuex
  }
})
