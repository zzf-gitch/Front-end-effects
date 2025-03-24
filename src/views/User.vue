<template>
  <div class="User">
    <div v-if="id === 'enterprise'">欢迎来到【面向企业】页面！</div>
    <div v-if="id === 'user'">欢迎来到【面向用户】页面！</div>
    <div class="e" ref="move"></div>
    <template v-for="(item, index) in Data" :key="index">
      <p>{{ item.id }}</p>
      <p>{{ item.name }}</p>
      <p>{{ item.province }}</p>
      <p></p>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

// 使用 Mock
var Mock = require("mockjs");
var data = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      "name|1-6": "Hello",
      "province|4-8": {
        110000: "北京市",
        120000: "天津市",
        130000: "河北省",
        140000: "山西省",
        310000: "上海市",
        320000: "江苏省",
        330000: "浙江省",
        340000: "安徽省",
      },
    },
  ],
});
// 输出结果
const Data = ref([]);
Data.value = data.list;
console.log(Data.value);
// console.log(JSON.stringify(data, null , 1))
// console.log(data);
const route = useRoute();
const id = ref("");
id.value = route.params.id;
console.log(route.params.id);
console.log(route.params.name);
onBeforeRouteUpdate((route) => {
  console.log(route);
  id.value = route.params.id;
});
const arr = ref([1, 2, 3, 4, 5, 6, 7, 8, 9]);
const num = ref(0);
const init = () => {
  arr.value.reverse().push(num.value);
  return arr.value;
};
console.log(init().reverse());
// const arr = ref([1,2,3,4,5,6,7,8,9])
// const init = () => {
//     arr.value.unshift(num.value)
//     console.log(arr.value);
// }
// init()
const move = ref(null);
const flag = ref(true);
const left = ref(0);
//当前执行时间
const nowTime = ref(0);
//记录每次动画执行结束的时间
const lastTime = ref(Date.now());
//我们自己定义的动画时间差值
const diffTime = ref(40);

const render = () => {
  if (flag.value == true) {
    if (left.value >= 100) {
      flag.value = false;
    }
    move.value.style.left = ` ${left.value++}px`;
  } else {
    if (left.value <= 0) {
      flag.value = true;
    }
    move.value.style.left = ` ${left.value--}px`;
  }
};

//requestAnimationFrame效果
const animloop = () => {
  //记录当前时间
  nowTime.value = Date.now();
  // 当前时间-上次执行时间如果大于diffTime，那么执行动画，并更新上次执行时间
  if (nowTime.value - lastTime.value > diffTime.value) {
    lastTime.value = nowTime.value;
    render();
  }
  requestAnimationFrame(animloop);
};
animloop();
</script>

<style scoped>
.User {
  width: 100%;
  height: 100%;
  position: relative;
}
.e {
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  left: 50%;
  top: 50%;
  zoom: 3;
}
</style>
