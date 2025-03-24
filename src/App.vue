<template>
  <router-view v-if="isRouteshow"/>
</template>

<script setup>
import { ref , reactive , onMounted ,nextTick , provide } from 'vue'
const isRouteshow = ref(true)

const reload = () => {
  isRouteshow.value = false
  nextTick(() => {
    isRouteshow.value = true
  })
}
provide('reload',reload)
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body,
html {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
