<template>
  <div class="speak">
    <div class="S">
      <el-input @keyup.enter="peak" v-model="speak" />
      <el-button class="button" type="primary" @click="peak">朗读</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const speak = ref("");
const peak = () => {
    const txt = new SpeechSynthesisUtterance(speak.value)
    txt.rate = 1
    txt.volume = 1.5
    window.speechSynthesis.speak(txt)
}
const companyId = reactive({
  'YH':'123456789',
  'HQ':'987654321'
})
console.log(companyId);
const list = () => {
  let a = ['YH']
  let b = ''
  a.map(item => {
  b = companyId[item]
  console.log(b);
  })
}
list()
</script>

<style scoped>
.speak {
  width: 100%;
  height: 100%;
}
.S{
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button{
    margin-left: 10px;
}
</style>
