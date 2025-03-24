<template>
    <div class="echarts">
        <el-carousel :interval="3000" arrow="always">
            <el-carousel-item v-for="(item,index) in ImgArr" :key="index">
                <img :src="item.default" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script setup>
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
const router = useRouter()
const route = useRoute()
const ImgArr = ref([
    {
        default:require('../assets/images/1.jpg')
    },
    {
        default:require('../assets/images/2.jpg')
    },
    {
        default:require('../assets/images/3.jpg')
    },
    {
        default:require('../assets/images/4.jpg')
    },
    {
        default:require('../assets/images/5.jpg')
    },
    {
        default:require('../assets/images/6.jpg')
    },
    {
        default:require('../assets/images/7.jpg')
    },
    {
        default:require('../assets/images/8.jpg')
    },
    {
        default:require('../assets/images/9.jpg')
    },
    {
        default:require('../assets/images/10.jpg')
    },
    {
        default:require('../assets/images/11.jpg')
    },
    {
        default:require('../assets/images/12.jpg')
    },
    {
        default:require('../assets/images/13.jpg')
    },
    {
        default:require('../assets/images/14.jpg')
    },
    {
        default:require('../assets/images/15.jpg')
    },
    {
        default:require('../assets/images/16.jpg')
    },
    {
        default:require('../assets/images/17.jpg')
    },
    {
        default:require('../assets/images/18.jpg')
    },
    {
        default:require('../assets/images/19.jpg')
    },
    {
        default:require('../assets/images/20.jpg')
    },
    {
        default:require('../assets/images/21.jpg')
    },
    {
        default:require('../assets/images/22.jpg')
    },
    {
        default:require('../assets/images/23.jpg')
    },
    {
        default:require('../assets/images/24.jpg')
    },
    {
        default:require('../assets/images/25.jpg')
    },
    {
        default:require('../assets/images/26.jpg')
    },
    {
        default:require('../assets/images/27.jpg')
    },
    {
        default:require('../assets/images/28.jpg')
    },
])
</script>

<style scoped>
.echarts {
    width: 100%;
    height: 100%;
}
.el-carousel{
    width: 100% !important;
    height: 100% !important;
}
.el-carousel :deep(.el-carousel__container) {
    height: 100% !important;
}
img{
    width: 100%;
    height: 100%;
}
</style>