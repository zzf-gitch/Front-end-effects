<template>
  <div
    class="BlurEffect"
    :style="{
      background:
        currentIndex == 0
          ? 'linear-gradient(130deg,#3a4676,#7183b5,#849cc0)'
          : currentIndex == 1
          ? 'linear-gradient(230deg,#260607,#586470,#314061)'
          : currentIndex == 2
          ? 'linear-gradient(330deg,#ab86b2,#ca92af,#815e57,#d663b4)'
          : currentIndex == 3
          ? 'linear-gradient(130deg,#4c3a2c,#9084b8,#ec826d,#645e77)'
          : '',
    }"
  >
    <div class="img">
      <div
        class="Img"
        v-for="(item, index) in ImgArr"
        :style="{ filter: currentIndex == index ? 'blur(0px)' : 'blur(10px)' }"
        :key="index"
        @mouseenter="mouseenter(item, index)"
      >
        <img :src="item.img" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
const ImgArr = ref([
  {
    img: require("../assets/1.jpg"),
  },
  {
    img: require("../assets/2.jpg"),
  },
  {
    img: require("../assets/3.jpg"),
  },
  {
    img: require("../assets/4.jpg"),
  },
]);
const currentIndex = ref(null);
const mouseenter = (v, i) => {
  currentIndex.value = i;
};
</script>

<style scoped>
.BlurEffect {
  width: 100%;
  height: 100%;
  position: relative;
}
.img {
  width: 45%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); /* 50%为自身尺寸的一半 */
}
.Img {
  width: 45%;
  height: 45%;
  padding: 10px;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all 0.25s;
  filter: blur(0px);
}
.Img:hover {
  transition: all 0.25s;
  transform: scale(1.2);
}
.Img img {
  width: 100%;
  height: 100%;
}
</style>