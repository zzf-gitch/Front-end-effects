<template>
  <div id="app">
    <h1>剩余抽奖次数：{{ num }}</h1>
    <roundTurntable
      ref="roundTurndemo"
      :prizeData="prizeData"
      :rotateCircle="rotateCircle"
      :duringTime="duringTime"
      :turntableStyleOption="turntableStyleOption"
      @endRotation="endRotation"
      class="turntable"
    >
      <template #header="item">
        <div class="turntable-name">{{ item.item.prizeName }}</div>
        <div class="turntable-img">
          <img style="width:50px;height:50px" :src="item.item.prizeImg">
        </div>
      </template>
    </roundTurntable>
    <div @click="startRotation" class="pointer"></div>
  </div>
</template>

<script setup>
import { ref, reactive, defineEmits, defineProps, onMounted } from "vue";
import { successmessage , warningmessage } from '@/api/message.js'
import roundTurntable from "../components/roundTurndemo";
// 转盘上的奖品数据
const prizeData = ref([
  {
    id: 1,
    prizeName: "典韦",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg",
  },
  {
    id: 2,
    prizeName: "刘备",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg",
  },
  {
    id: 3,
    prizeName: "鲁班七号",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg",
  },
  {
    id: 4,
    prizeName: "米莱迪",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg",
  },
  {
    id: 5,
    prizeName: "沈梦溪",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg",
  },
  {
    id: 6,
    prizeName: "镜",
    prizeImg:
      "https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg",
  },
]);
// 转动的圈数
const rotateCircle = ref(6);
// 转动需要持续的时间（s）
const duringTime = ref(4.5);
// 转盘样式的选项
const turntableStyleOption = ref({
  // 背景色
  prizeBgColors: [
    "#001529",
    "#0a85d9",
    "#1ed76d",
    "#22a4f1",
    "#0f7681",
    "#ea1c27",
  ],
  // 转盘的外边框颜色
  borderColor: "#199301",
});
// 中奖的奖品的index
const prizeIndex = ref(-1);
// 用来锁定转盘，避免同时多次点击转动
const isLocking = ref(false);
// 剩余抽奖次数
const num = ref(10);
const roundTurndemo = ref();
const startRotation = () => {
  // 如果还不可以转动
  if (!canBeRotated()) {
    return false;
  }
  // 开始转动
  // 先上锁
  isLocking.value = true;
  // 设置在哪里停下，应该与后台交互，这里随机抽取0~5
  const index = Math.floor(Math.random() * prizeData.value.length);
  // 成功后次数减少一次
  num.value--;
  prizeIndex.value = index;
  // 告诉子组件，开始转动了
  console.log(index);
  roundTurndemo.value.rotate(index);
};
// 已经转动完转盘触发的函数
const endRotation = () => {
  // 提示中奖
  successmessage(`恭喜您获奖啦,您的奖品是：${prizeData.value[prizeIndex.value].prizeName}`)
  // 解锁
  isLocking.value = false;
};
// 判断是否可以转动
const canBeRotated = () => {
  if (num.value <= 0) {
    warningmessage("已经没有次数了！")
    return false;
  }
  if (isLocking.value) {
    return false;
  }
  return true;
};
</script>

<style scoped>
.turntable {
  position: absolute;
  left: calc(50% - 200px);
  top: calc(50% - 200px);
  width: 400px;
  height: 400px;
}
.turntable-name {
  /*background: pink;*/
  position: absolute;
  left: 10px;
  top: 20px;
  width: calc(100% - 20px);
  font-size: 26px;
  text-align: center;
  color: #fff;
}

.turntable-img {
  position: absolute;
  /*要居中就要50% - 宽度 / 2*/
  left: calc(50% - 80px / 2);
  top: 60px;
  width: 80px;
  height: 80px;

}
.turntable-img img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.pointer {
  position: absolute;
  left: calc(50% - 46px);
  top: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background-image: url("https://demosc.chinaz.net/Files/DownLoad/webjs1/201803/jiaoben5789/images/start.png");
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
