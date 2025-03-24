<template>
  <div class="fire">
      <video class="video" src="../assets/fire.mp4" autoplay muted loop></video>
      <div class="text">{{text}}</div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter()
const route = useRoute()
// console.log(history.state.params.text);
console.log(route.params.text);
const text = ref(route.params.text)
</script>

<style scoped>
.fire {
  width: 100%;
  height: 100%;
  color: black;
  font-size: 10em;
  font-weight: bold;
  font-family: '隶书';
}
.video{
  width: 100%;
  height: 100%;
}
.text{
    position: absolute;
    inset: 0;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    mix-blend-mode: screen;
}
</style>