<template>
  <div class="hover">
      <div class="afterImg" @click="file"></div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
const store = useStore()
const router = useRouter()
const route = useRoute()
const file = () => {
    router.push({name:"fire",params:{text:'张卓飞'}})
}
const arr = ref({"CODE":"单位代码","NAME":"单位全称","SHORT_NAME":"单位简称"})
const obj = JSON.stringify(arr.value)
console.log(obj);
console.log(JSON.parse(obj));
const CODE = JSON.parse(obj).CODE
console.log(CODE);
</script>

<style scoped>
.hover {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.afterImg{
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    background: url(../assets/mv.jpg) center / cover;
}
.afterImg::before, .afterImg::after{
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
}
.afterImg::before{
    background: rgba(0, 0, 0, 0.6);
}
.afterImg::after{
    background: inherit;
    clip-path: circle(0% at 50% 50%);
    transition: all 0.5s;
}
.afterImg:hover::after{
    background: inherit;
    clip-path: circle(50% at 50% 50%);
    transition: all 0.5s;
}
</style>