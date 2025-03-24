<template>
    <div class="menu">
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" active-text-color="#fff"
            background-color="#001529" text-color="#ffffffb3" :unique-opened="true" :collapse-transition="false" router>
            <template v-for="(item, index) in arr" :key="index">
                <el-sub-menu v-if="item.children" :index="item.path">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>{{ item.name }}</span>
                    </template>
                    <template v-for="(row, i) in item.children" :key="i">
                        <el-sub-menu v-if="row.children" :index="item.path">
                            <template #title>
                                <el-icon>
                                    <icon-menu />
                                </el-icon>
                                <span>{{ row.title }}</span>
                            </template>
                        </el-sub-menu>
                        <el-menu-item v-else :index="row.path">
                            <el-icon>
                                <icon-menu />
                            </el-icon>
                            <span>{{ row.title }}</span>
                        </el-menu-item>
                    </template>
                </el-sub-menu>
                <el-menu-item v-else :index="item.path">
                    <el-icon>
                        <Setting />
                    </el-icon>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>
  
<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {
    ref,
    defineEmits,
    defineProps,
    nextTick,
    reactive,
    onMounted,
    watch,
    computed,
    onUnmounted,
    onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { menuList } from '../api/api.js'
const router = useRouter()
const route = useRoute()
const arr = ref([])
const getlist = async () => {
    const { data } = await menuList()
    console.log(data);
    arr.value = data.list
}
onMounted(() => {
    getlist()
})
</script>
  
<style scoped>
.menu {
    width: 100%;
    height: 100%;
}
/* .el-menu{
    width: 100%;
    height: 100%;
} */
</style>
  