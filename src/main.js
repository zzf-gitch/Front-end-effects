import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import virtualList from './components/VirtualListIndex.js'
import "xe-utils";
import VXETable from "vxe-table";
import './style/theme.css'
import "vxe-table/lib/style.css";
import ElDate from './components/elDate.js'
import directives from './utils/vSride'
function useTable(app) {
    app.use(VXETable);
  }
const app = createApp(App)
app.use(store)
app.use(router)
app.use(useTable)
app.use(directives)
app.use(ElDate)
app.use(virtualList)
app.use(ElementPlus)
app.mount('#app')
