<template>
    <div class="webRtc">
        <h1 class="gradient-text">WebRTC 实时视频预览</h1>
        <div class="video-container">
            <video ref="localVideo" autoplay muted playsinline></video>
        </div>
        <el-button type="primary" @click="toggleVideoStream">
            {{ isVideoPlaying ? '停止视频' : '启动视频' }}
        </el-button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const localVideo = ref(null);
const stream = ref(null);
const isVideoPlaying = ref(false);

// 启动网络摄像头流
const startVideoStream = async () => {
    try {
        // API:https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia
        stream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        localVideo.value.srcObject = stream.value;
        isVideoPlaying.value = true;
    } catch (error) {
        console.error('访问网络摄像头出错：', error);
        alert('无法访问网络摄像头。请检查权限。');
    }
};

// 停止网络摄像头流
const stopVideoStream = () => {
    if (stream.value) {
        // API:https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream/getTracks
        stream.value.getTracks().forEach(track => track.stop());
        localVideo.value.srcObject = null;
        isVideoPlaying.value = false;
    }
};

// 切换网络摄像头状态
const toggleVideoStream = () => {
    isVideoPlaying.value ? stopVideoStream() : startVideoStream();
};

</script>

<style scoped>
.webRtc {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>