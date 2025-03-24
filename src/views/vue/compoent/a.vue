<template>
    <div class="b">
        <div class="ship">
            <template v-for="(item, index) in mergeList" :key="index">
                <h1 class="h" :style="{ 'color': item.status ? 'black' : item.color }">{{ item.name }}</h1>
            </template>
        </div>

        <VirtualList>
        </VirtualList>

        <div class="div_img">
            <img src="../../../assets/zzf.png" alt="">
            <div class="img">
                <span>aaa</span>
            </div>
        </div>

        <template v-for="(row,i) in url" :key="i">
            <a :href="row.item" download>下载</a>
        </template>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
const url = reactive([
    {
        item: './pdftest.pdf'
    }, {
        item: './王者荣耀后台管理系统.pdf'
    }, {
        item: './test.pdf'
    }
])
const arr = ref([
    {
        name: "Develop.",
    },
    {
        name: "Preview.",
    },
    {
        name: "Ship.",
    }
])
const mergeList = computed(() => {
    if (arr.value) {
        arr.value.map(item => {
            item.status = true
            return item
        })
    }
    return arr.value
})
const times = ref(null)
const time = async () => {
    times.value = (mergeList.value.length * 6000) / 3000
    const timer = setInterval(() => {
        if (times.value > 1) {
            times.value--
        } else {
            clearInterval(timer)
        }
    }, 1000)
    for (let i = 0; i < mergeList.value.length; i++) {
        await new Promise((res, rej) => {
            const timer = setTimeout(() => {
                res(i)
            }, 2000)
        }).then(res => {
            mergeList.value[res].status = false
            console.log(mergeList.value[res].name);
            mergeList.value[res].color = mergeList.value[res].name == 'Develop.' ? '#00ccdd' : mergeList.value[res].name == 'Preview.' ? '#f50586' : '#faa635'
            console.log(mergeList.value[res].color);
        })
    }
}

onMounted(() => {
    time()
})
</script>

<style scoped>
.b {
    width: 100%;
    height: 100%;
}

.div_img {
    width: 200px;
    height: 300px;
    position: relative;
    box-sizing: border-box;
}

.div_img img {
    position: absolute;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.img {
    position: absolute;
    inset: 0;
    z-index: 2;
    backdrop-filter: blur(10px);
}

.ship {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}

.h {
    transition: all .5s;
}
</style>