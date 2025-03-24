<template>
  <div class="turntable" ref="turntable">
    <div
      class="myTurntable"
      :style="{ transform: rotateAngles, transition: rotateTransition }"
    >
      <canvas id="canvas" ref="canvans">
        当前浏览器版本过低，请使用其他浏览器尝试
      </canvas>
      <div class="prize-container">
        <div
          v-for="(item, index) in prizeData"
          class="item"
          :key="index"
          :style="getRotateAngle(index)"
        >
          <slot name="header" :item="item"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, defineEmits, defineProps, onMounted , defineExpose } from "vue";
const emits = defineEmits(["endRotation"]);
const props = defineProps({
  prizeData: {
    required: true,
  },
  rotateCircle: {
    default: 6,
  },
  turntableStyleOption: {
    default: () => {
      return {
        // 背景色
        prizeBgColors: [],
        // 转盘的外边框颜色
        borderColor: "#199301",
      };
    },
  },
  duringTime: {
    default: 4.5,
  },
});
console.log(props.prizeData);
// 初始化圆形转盘canvas
const init = () => {
  // 开始绘画
  const canvas = canvans.value;
  console.log(canvas);
  // 各种数据
  const data = props.turntableStyleOption;
  console.log(data);
  const prizeNum = props.prizeData.length;
  const { prizeBgColors, borderColor } = data;
  const ctx = canvas.getContext("2d");
  const canvasW = (canvans.value.width = turntable.value.clientWidth); // 画板的高度
  console.log(canvasW);
  const canvasH = (canvans.value.height = turntable.value.clientHeight); // 画板的宽度
  console.log(canvasH);
  // translate方法重新映射画布上的 (0,0) 位置
  ctx.translate(0, canvasH);
  // rotate方法旋转当前的绘图，因为文字适合当前扇形中心线垂直的！
  ctx.rotate((-90 * Math.PI) / 180);
  // 圆环的外圆的半径
  const outRadius = canvasW / 2;
  // 圆环的内圆的半径
  const innerRadius = 0;
  const baseAngle = (Math.PI * 2) / prizeNum; // 计算每个奖项所占角度数
  ctx.clearRect(0, 0, canvasW, canvasH); //去掉背景默认的黑色
  ctx.strokeStyle = borderColor; // 设置画图线的颜色
  for (let index = 0; index < prizeNum; index++) {
    const angle = index * baseAngle;
    ctx.fillStyle = prizeBgColors[index]; //设置每个扇形区域的颜色
    ctx.beginPath(); //开始绘制
    // 标准圆弧：arc(x,y,radius,startAngle,endAngle,anticlockwise)
    ctx.arc(
      canvasW * 0.5,
      canvasH * 0.5,
      outRadius,
      angle,
      angle + baseAngle,
      false
    );
    ctx.arc(
      canvasW * 0.5,
      canvasH * 0.5,
      innerRadius,
      angle + baseAngle,
      angle,
      true
    );
    ctx.stroke(); //开始链线
    ctx.fill(); //填充颜色
    ctx.save(); //保存当前环境的状态
  }
};
// 开始转动的角度
const startRotateDegree = ref(0);
const rotateAngles = ref(0);
const rotateTransition = ref("");
const canvans = ref(null);
const turntable = ref(null);
// 根据index计算每一格要旋转的角度的样式
const getRotateAngle = (index) => {
  const angle =
    (360 / props.prizeData.length) * index + 180 / props.prizeData.length;
  return {
    transform: `rotate(${angle}deg)`,
  };
};

// 转动起来
const rotate = (index) => {
    console.log(typeof index);
  // 运转时长
  const duringTime = props.duringTime;
  const rotateAngle =
    startRotateDegree.value +
    props.rotateCircle * 360 +
    360 -
    (180 / props.prizeData.length + (360 / props.prizeData.length) * index) -
    (startRotateDegree.value % 360);
  startRotateDegree.value = rotateAngle;
  console.log(typeof rotateAngle);
  rotateAngles.value = `rotate(${rotateAngle}deg)`;
  rotateTransition.value = `transform ${duringTime}s cubic-bezier(0.250, 0.460, 0.455, 0.995)`;
  setTimeout(() => {
    emits("endRotation");
  }, duringTime * 1000 + 500);
};
defineExpose({ rotate })
const 振作 = ref('振作')
const Sevehty = ref(70)
Sevehty.value = '振作'
console.log(振作.value === Sevehty.value);
onMounted(() => {
  init();
});
</script>

<style scoped>
.turntable {
  position: absolute;
  left: 0;
  top: 0;
  text-align: center;
  transform: translateZ(0);
}
.myTurntable {
  //position: absolute;
  left: 190%;
  top: 65%;
  width: 100%;
  height: 100%;
}
.prize-container {
  position: absolute;
  left: 25%;
  top: 0;
  width: 50%;
  height: 50%;
}
.item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform-origin: center bottom;
}
</style>
