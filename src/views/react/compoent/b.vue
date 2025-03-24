<template>
    <div class="b">
        react页面
        <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
                {{ text }}
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <template v-for="(item, index) in arr" :key="index">
                        <el-dropdown-item :style="currentIndex == index ? `background-color:#ecf5ff;color:#659eff` : ''"
                            :command="index" @click="ChangeColor(index)">{{ item.name }}</el-dropdown-item>
                    </template>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        <div>
            <span>排序：</span><span v-for="(item, index) in numberArr" :key="index">{{ item?.name ? item.name : item.age
            }}<span v-if="index !== numberArr.length - 1">、</span></span>
        </div>

        <div class="div_img">
            <img class="img" src="../../../assets/zzf.png" />
        </div>

        <div class="triangle">

        </div>

        <div class="container">
            <span class="line-top"></span>
            <span class="line-right"></span>
            <span class="line-bottom"></span>
            <span class="line-left"></span>
            <span class="css">css流光效果</span>
        </div>

        <h1 class="vite">
            <span>Vite 官方中文文档</span>
        </h1>
    </div>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref, reactive, onMounted, inject } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore()
const router = useRouter()
const route = useRoute()
const arr = ref([
    {
        name: '升序'
    },
    {
        name: '降序'
    },
    {
        name: 'pdf测试1'
    },
    {
        name: 'pdf测试2'
    },
    {
        name: 'pdf测试3'
    },
    {
        name: 'reload'
    }
])

const text = ref('升序')
const currentIndex = ref(0)
const handleCommand = (command) => {
    text.value = command
    switch (command) {
        case 0:
            return text.value = '升序'
        case 1:
            return text.value = '降序'
        case 2:
            return text.value = 'pdf测试1'
        case 3:
            return text.value = 'pdf测试2'
        case 4:
            return text.value = 'pdf测试3'
        case 5:
            return text.value = 'reload'
    }
}

const reload = inject('reload')
// const numberArr = ref([
//     {
//         age: 2
//     },
//     {
//         age: 1
//     },
//     {
//         age: 4
//     },
//     {
//         age: 5
//     },
//     {
//         age: 7
//     },
//     {
//         age: 6
//     },
//     {
//         age: 3
//     },
//     {
//         age: 8
//     },
//     {
//         age: 10
//     },
//     {
//         age: 9
//     }
// ])

const numberArr = ref([
    {
        name: 'Apple'
    },
    {
        name: 'E'
    },
    {
        name: 'P'
    },
    {
        name: 'L'
    },
    {
        name: 'O'
    },
    {
        name: 'B'
    },
    {
        name: 'F'
    },
    {
        name: 'H'
    },
    {
        name: 'C'
    },
    {
        name: 'V'
    },
    {
        name: 'D'
    },
    {
        name: 'G'
    },
    {
        name: 'M'
    },
    {
        name: 'J'
    },
    {
        name: 'K'
    },
    {
        name: 'I'
    },
    {
        name: 'N'
    },
    {
        name: 'X'
    },
    {
        name: 'S'
    },
    {
        name: 'Zippo'
    },
    {
        name: 'T'
    },
    {
        name: 'U'
    },
    {
        name: 'R'
    },
    {
        name: 'Q'
    },
    {
        name: 'Y'
    },
    {
        name: 'S'
    }
])

const ascendingOrder = (a, b) => {
    if (numberArr.value[0]?.name) {
        if (a.name < b.name) {
            return -1
        } else if (a.name == b.name) {
            return 0
        } else {
            return 1
        }
    } else if (numberArr.value[0]?.age) {
        return a.age - b.age
    }
}

const Descending = (a, b) => {
    if (numberArr.value[0]?.name) {
        if (a.name > b.name) {
            return -1
        } else if (a.name == b.name) {
            return 0
        } else {
            return 1
        }
    } else if (numberArr.value[0]?.age) {
        return b.age - a.age
    }
}

const Sort = () => {
    numberArr.value.sort(store.state.sort.active ? ascendingOrder : Descending)
}

const ChangeColor = (i) => {
    currentIndex.value = i
    if (i === 0) {
        store.commit('ascendingOrder', true)
        Sort()
    } else if (i === 1) {
        store.commit('Descending', false)
        Sort()
    } else if (i === 2) {
        window.open(require('../../../../public/pdftest.pdf'))
    } else if (i === 3) {
        window.open(require('../../../../public/王者荣耀后台管理系统.pdf'))
    } else if (i === 4) {
        window.open(require('../../../../public/test.pdf'))
    } else {
        reload()
    }
}

const changeTab = (a = 1) => {
    return a
}

const demo = () => {
    let v = changeTab()
    console.log(v);
}

onMounted(() => {
    demo()
    let numLen = (numberArr.value.length * 6000) / 3000
    const timer = setInterval(() => {
        if(numLen > 0) {
            numLen--
            let times
            times = 100 / numLen
            if(times !== Infinity) {
                console.log(times.toFixed(2));
            }
        } else {
            clearInterval(timer)
        }
    },1000)
})
</script>
<style scoped>
.b {
    width: 100%;
    height: 100%;
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
}

.el-dropdown-link {
    color: #22a5f1;
}

.div_img {
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #2c3e50;
    border-radius: 50%;
}

.img {
    --s: 100px;
    --c1: #c02942;
    --c2: #ecd078;

    width: var(--s);
    height: var(--s);
    cursor: pointer;
    transition: 0.5s;
    outline: 5px solid;
    border-radius: 50%;
}

.img:hover {
    transform: scale(1.35);
}

.triangle {
    width: 0px;
    height: 0px;
    border-top: 200px solid skyblue;
    border-right: 200px solid transparent;
}

.container {
    width: 400px;
    height: 400px;
    position: relative;
    border: 1px solid #0e96e7;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom,black, #0e96e7, black);
}

.css {
    color: white;
}

.line-top {
    position: absolute;
    width: 80px;
    height: 1px;
    top: -1px;
    left: 0;
    background: linear-gradient(to right, #0e96e7, #fff);
    border-radius: 50%;
    animation: left_to_right 4s 0s linear infinite;
}

.line-top::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 11px;
    background: linear-gradient(to right, transparent, #0e96e7, #fff);
    left: 0;
    top: -5px;
    filter: blur(4px);
    z-index: -1;
}

.line-right {
    position: absolute;
    width: 1px;
    height: 0;
    top: 0;
    right: -1px;
    background: linear-gradient(#0e96e7, #fff);
    animation: top_to_bottom 4s 3s linear infinite;
}

.line-right::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #0e96e7, #fff);
    left: -5px;
    top: 0;
    filter: blur(4px);
    z-index: -1;
}

.line-bottom {
    position: absolute;
    width: 0;
    height: 1px;
    bottom: -1px;
    right: 0;
    background: linear-gradient(to left, #0e96e7, #fff);
    border-radius: 50%;
    animation: right_to_left 4s 6s linear infinite;
}

.line-bottom::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 11px;
    background: linear-gradient(to left, transparent, #0e96e7, #fff);
    left: 0;
    top: -5px;
    filter: blur(4px);
    z-index: -1;
}

.line-left {
    position: absolute;
    width: 1px;
    height: 0;
    bottom: 0;
    left: -1px;
    background: linear-gradient(to top, #0e96e7, #fff);
    animation: bottom_to_top 4s 9s linear infinite;
}

.line-left::before {
    content: "";
    position: absolute;
    width: 11px;
    height: 100%;
    background: linear-gradient(to top, transparent, #0e96e7, #fff);
    left: -5px;
    top: 0;
    filter: blur(4px);
    z-index: -1;
}


@keyframes left_to_right {
    0% {
        width: 0;
        left: 0;
    }

    25% {
        left: 0;
        width: 80px;
    }

    75% {
        left: calc(100% - 80px);
        width: 80px;
    }

    100% {
        left: 100%;
        width: 0;
    }
}

@keyframes top_to_bottom {
    0% {
        top: 0;
        height: 0;
    }

    25% {
        top: 0;
        height: 80px;
    }

    75% {
        top: calc(100% - 80px);
        height: 80px;
    }

    100% {
        top: 100%;
        height: 0;
    }
}

@keyframes right_to_left {
    0% {
        right: 0;
    }

    25% {
        width: 80px;
        right: 0;
    }

    75% {
        width: 80px;
        right: calc(100% - 80px);
    }

    100% {
        right: 100%;
        width: 0;
    }
}

@keyframes bottom_to_top {
    0% {
        bottom: 0;
    }

    25% {
        bottom: 0;
        height: 80px;
    }

    75% {
        height: 80px;
        bottom: calc(100% - 80px);
    }


    100% {
        height: 0;
    }

}


.vite {
    font-size: 30px;
    line-height: 2;
}

.vite span {
    background: linear-gradient(to right, #ec695c, #61c) no-repeat right bottom;
    background-size: 0 2px;
    transition: background-size 1300ms;
}

.vite span:hover {
    background-position-x: left;
    background-size: 100% 2px;
}
</style>