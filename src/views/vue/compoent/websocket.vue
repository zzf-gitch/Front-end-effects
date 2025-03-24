<template>
    <div class="contarien">
        <div class="button">
            <div class="bu" @click="WebSocketTest">
                <span>WebSocket</span>
            </div>
            <div class="bu" @click="close">
                <span>关闭当前连接</span>
            </div>
        </div>

        <div v-for="(item,index) in content" :key="index" class="web">
            <span v-html="item"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { successmessage, warningmessage, errormessage } from '@/api/message.js'

const content = ref([])
const websocket = ref(null)
const WebSocketTest = () => {
    if ('WebSocket' in window) {
        successmessage('您的浏览器支持 WebSocket交互！')
        websocket.value = new WebSocket("ws://121.40.165.18:8800")

        websocket.value.onopen = () => {
            let data = '发送数据'
            websocket.value.send(data)
            successmessage('数据发送中......')
        }

        websocket.value.onmessage = (res) => {
            if (res.isTrusted) {
                console.log(res.data);
                content.value.push(res.data)
                successmessage('数据已接收......')
            }
        }

        websocket.value.onerror = () => {
            warningmessage('连接失败......')
        }

        websocket.value.close = () => {
            successmessage('连接已关闭......')
        }

    } else {
        errormessage('您的浏览器不支持 WebSocket交互！')
    }
}

const close = () => {
    websocket.value.close = () => {
        successmessage('连接已关闭......')
    }
    content.value = []
}
</script>

<style scoped>
.contarien {
    width: 100%;
    height: 100%;
}

.button {
    width: 100px;
    height: 20px;
    background-color: skyblue;
    color: white;
}

.bu {
    width: inherit;
    height: inherit;
    background-color: inherit;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.web {
    margin-top: 50px;
}
</style>