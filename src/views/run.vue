<template>
  <div class="run">
    <el-button link type="primary" @click="CssSort">css排序</el-button>
    <div class="flex">
      <div class="order_one" :class="{ order_onective: order_onective }">
        <span>order_one</span>
      </div>
      <div class="order_two" :class="{ order_twoctive: order_twoctive }">
        <span>order_two</span>
      </div>
      <div class="order_three" :class="{ order_threective: order_threective }">
        <span>order_three</span>
      </div>
      <div class="order_four" :class="{ order_fourctive: order_fourctive }">
        <span>order_four</span>
      </div>
    </div>
    <div class="content" v-for="(item, index) in data" :key="index">
      <el-button type="primary" link size="small" @click="switchTab(item)">{{
        item.name
      }}</el-button>
    </div>
    <keep-alive>
      <transition mode="in-out" name="slide-right" appear>
        <component :is="componentId.TabComp"></component>
      </transition>
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, markRaw } from "vue";
import A from "./demo.vue";
import B from "./BlurEffect.vue";
import C from "./sride.vue";
const data = reactive([
  {
    name: "A组件",
    Comp: markRaw(A),
  },
  {
    name: "B组件",
    Comp: markRaw(B),
  },
  {
    name: "C组件",
    Comp: markRaw(C),
  },
]);
const componentId = reactive({
  TabComp: data[0].Comp,
});
const switchTab = (item) => {
  componentId.TabComp = item.Comp;
};
const order_onective = ref(false);
const order_twoctive = ref(false);
const order_threective = ref(false);
const order_fourctive = ref(false);
const CssSort = () => {
  order_onective.value = !order_onective.value;
  order_twoctive.value = !order_twoctive.value;
  order_threective.value = !order_threective.value;
  order_fourctive.value = !order_fourctive.value;
};

const qusition = (Arr) => {
  if (Arr.length <= 1) {
    return Arr;
  } else {
    const v = Arr[0];
    console.log(Arr.slice(1, 4));
    const less = Arr.slice(1, 4).filter((x) => {
      return x < v;
    });
    // console.log(less);
    const gretter = Arr.slice(1, 4).filter((x) => {
      return x > v;
    });
    console.log(gretter);
    return [...qusition(less), v, ...qusition(gretter)];
  }
};
const myArray = ref([1, 2, 3, 4, 5]);
const storeMy = qusition(myArray.value);
console.log(storeMy);

let arr = [0, 1, 2, 3, 4];
let arr1 = [5, 6, 7, 8, 9];
let arr2 = [...arr, ...arr1];
console.log(arr2);
let a = "你好";
let b = "hello";
let c = [...a, ...b];
console.log(c.join(""));
const str = '舔狗沸羊羊 舔狗振作 舔狗振作'
let txt = str.trim()
let text = txt.replace(/舔狗振作/g, '舔狗李飞龙')
console.log(text);
</script>

<style scoped>
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-right-enter-active {
  transition: all 0.3s ease;
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.slide-right-leave-active {
  transition: all 0.3s ease;
}

.run {
  width: 100%;
  height: 100%;
}

.flex {
  display: flex;
  width: auto;
  height: 50px;
  justify-content: space-between;
  gap: 20px;
  color: white;
}

.order_one {
  flex: 1;
  background: #409eff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order_two {
  flex: 1;
  background: #001529;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order_three {
  flex: 1;
  background: #d72aad;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order_four {
  flex: 1;
  background: #097a83;
  display: flex;
  align-items: center;
  justify-content: center;
}

.order_onective {
  order: 3;
}

.order_twoctive {
  order: 2;
}

.order_threective {
  order: 1;
}

.order_fourctive {
  order: 0;
}
</style>
