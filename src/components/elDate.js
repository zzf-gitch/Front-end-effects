import eldate from './el-date.vue'

const elDate = {
    install(Vue) {
        Vue.component("YearPicker",eldate)
    }
}

export default elDate
