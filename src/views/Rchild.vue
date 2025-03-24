<template>
  <div :class="['Rchild--' + type]">
    <el-button type="primary" v-if="!active" @click="close">父组件</el-button>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, markRaw , defineEmits } from "vue";
const active = ref(false)
const emits = defineEmits('close')
const props = defineProps({
  type:{
    type: String,
    default: "normal",
  }
})
const close = () => {
    active.value = true
    emits('close',false)
}
</script>

<style scoped>
.Rchild {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.Rchild--normal {
  width: 100%;
  height: 100%;
  background-color: aqua;
}
.Rchild--yellow {
  width: 100%;
  height: 100%;
  background-color: yellow;
}
</style>
