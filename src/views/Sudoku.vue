<template>
  <div class="contaner">
    <div class="img-contaire">
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
      <div class="img-item"></div>
    </div>
    <p class="P">绘梨衣</p>
  </div>
</template>

<script setup>
import { ref , defineEmits , defineProps , nextTick , reactive , onMounted , watch , computed , onUnmounted , onBeforeUnmount , inject } from "vue";
</script>

<style scoped>
.contaner {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to right, #1bc1ab, #1ea7c3, #4091c5, #8b6ba0, #cc447f, #e64766);
}
.img-contaire {
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  cursor: pointer;
}
.img-item {
  box-shadow: inset 0 0 0 1px #fff;
  transition: all 0.5s;
  background-size: 100% 100%;
  background: url(../assets/mv.jpg);
  position: relative;
}
.img-item:nth-child(3n + 1) {
  background-position-x: 0;
  left: -20px;
}
.img-item:nth-child(3n + 2) {
  background-position-x: -100%;
  left: 0;
}
.img-item:nth-child(3n) {
  background-position-x: -200%;
  left: 20px;
}
.img-item:nth-child(n + 7) {
  background-position-y: -200%;
  top: 20px;
}
.img-item:nth-child(-n + 6) {
  background-position-y: -100%;
  top: 0;
}
.img-item:nth-child(-n + 3) {
  background-position-y: 0;
  top: -20px;
}
.img-contaire:hover .img-item {
  top: 0;
  left: 0;
  transition: 0.5s;
}
.P{
  margin-top: 50px;
  font-size: 60px;
  font-family: '隶书';
  text-shadow: 0 -2px #fff,
  2px -2px #fff,
  2px 0 #fff,
  2px 1px #fff,
  0 2px #fff,
  -2px 2px #fff,
  -2px 0 #fff,
  -2px -2px #fff;
}
</style>
