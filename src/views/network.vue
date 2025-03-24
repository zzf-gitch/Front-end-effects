<template>
    <div class="container">
      <div class="item" :style="{ backgroundColor: isOnline ? '#266fff' : 'red' }">
        <p>网络状态：{{ isOnline ? netWorkStatus.effectiveType : '离线' }}</p>
        <p>延迟：{{ isOnline ? netWorkStatus.rtt + 'ms' : '离线' }}</p>
        <p>带宽：{{ isOnline ? netWorkStatus.downlink + 'mb/s' : '离线' }}</p>
        <p>手机状态：{{ isOnline ? netWorkStatus.type : '离线' }}</p>
      </div>
    </div>
  </template>
   
  <script setup>
  import { da } from 'element-plus/es/locale'
import { ref, reactive, watch, onBeforeMount } from 'vue'
   
  const netWorkStatus = reactive({
    effectiveType: null,
    rtt: null,
    downlink: null,
    type: null
  })
  const isOnline = ref(true)
   
  navigator.connection.addEventListener('change', function (e) {
    // 适用于手机兼容性需要自己验证一下
    //console.log(navigator.connection.type); (pc端没有这个type属性,兼容性有问题不适用与苹果safari浏览器，苹果其他浏览器没试)
    updateNetWorkStatus(e.target)
  })
   
  window.addEventListener('online', () => {
    isOnline.value = true
  })
  window.addEventListener('offline', () => {
    isOnline.value = false
  })
   
  function updateNetWorkStatus(data) {
    netWorkStatus.effectiveType = data.effectiveType
    netWorkStatus.rtt = data.rtt
    netWorkStatus.downlink = data.downlink
    // 只有手机端支持type属性，PC端不支持
    netWorkStatus.type = data.type
  }
   
  onBeforeMount(() => {
    updateNetWorkStatus(navigator.connection)
  })
  </script>
   
  <style scoped>
  .container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item {
      width: 200px;
      color: #fff;
      height: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    }
  </style>