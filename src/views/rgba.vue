<template>
  <div class="rgba">
    <el-button type="primary" @click="change" v-if="!active">子组件</el-button>

    <Transition>
        <!-- <Rchild v-if="active" @close="close" type="normal"/> -->
        <Rchild v-if="active" @close="close" type="yellow"/>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, markRaw } from "vue";
import Rchild from './Rchild.vue'
const active = ref(false)
const change = () => {
    active.value = true
}
const close = (v) => {
    console.log(v);
    active.value = v
}
</script>

<style scoped>
.rgba {
  width: 100%;
  height: 100%;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
