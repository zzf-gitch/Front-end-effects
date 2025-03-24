<template>
  <div class="sride">
      <template v-for="(item,index) in arr" :key="index">
        <div class="sride_one" :style="{'background-color':item.color,'margin-bottom': index === arr.length - 1 ? '30px' : '0px'}" v-side>{{item.id}}</div>
      </template>
  </div>
</template>

<script setup>
import { ref , reactive , onMounted } from 'vue'
const arr = ref([
  {
    id:1,
    color:"#fda4a0"
  },
  {
    id:2,
    color:"#ffd88b"
  },
  {
    id:3,
    color:"#22c138"
  },
  {
    id:4,
    color:"#fda4a0"
  },
  {
    id:5,
    color:"#ffd88b"
  },
  {
    id:6,
    color:"#22c138"
  }
])

const Change = () => {
  let arr = ['喜羊羊','沸羊羊','懒羊羊','暖羊羊','美羊羊']
  let key = Math.floor(Math.random() * arr.length)
  setTimeout(() => {
    Change()
    // console.log(arr[key]);
  },1000)
}

onMounted(() => {
  Change()
  let weakMap = new WeakMap()
  let v = '你好'
  let OTwo = {}
  let o = weakMap.set(OTwo,v)
  console.log(o)

  let O = weakMap.get(OTwo)
  console.log(O)

  const stateArr = ['喜羊羊','沸羊羊','懒羊羊','暖羊羊','美羊羊']
  let x = stateArr.toString().replace('沸羊羊','振作').split(',')
  // let x = stateArr.toString().replaceAll('沸羊羊','振作').split(',')
  if(x.indexOf('振作') > -1) {
    x.unshift('变态')
  }
  console.log(x);
})
</script>

<style scoped>
.sride{
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center; /* 水平和垂直居中 */
  overflow: hidden;
  overflow-y: scroll;
}
.sride_one{
  width: 700px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 50px;
  color: white;
  font-weight: 700;
}
</style>
