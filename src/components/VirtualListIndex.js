import VirtualList from './VirtualList.vue'

const virtualList = {
    install (app) {
        app.component('VirtualList',VirtualList)
    }
}

export default virtualList