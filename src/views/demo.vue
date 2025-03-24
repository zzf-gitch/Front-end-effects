<template>
    <div class="demo">
        <el-button @click="add">设置cookie</el-button>
        <el-button @click="obtain">获取cookie</el-button>
        <el-button @click="del">删除cookie</el-button>
        <el-button @click="addS">设置sesstore</el-button>
        <el-button @click="obtainS">获取sesstore</el-button>
        <el-button @click="delS">删除sesstore</el-button>
        <el-button type="primary" @click="User">面向用户</el-button>
        <el-button type="primary" @click="Enterprise">面向企业</el-button>
        <el-button type="primary" @click="params">vue-router新版本params传值跳转</el-button>
        <div>{{CooKie}}</div>
        <div>{{Sesstores}}</div>
        <YearPicker
          :yearRange="yearRange"
          :key="`${yearRange[0]}_${yearRange[1]}`"
          @yearChanged="handleYearChanged">
        </YearPicker>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from 'vue'
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
import Cookies from "js-cookie";
import { sesstore } from "../utils/sesstore";
const User = () => {
    router.push({name:"User",params:{id:'user',name:'U'}})
}
const Enterprise = () => {
    router.push({name:"User",params:{id:'enterprise',name:'E'}})
}
const params = () => {
    router.push({name:"ValueTransmission",state:{params:{id:"FCG0ZEGT291U28QQJG"}}})
}
const yearRange = ref([2021,2022])
const handleYearChanged = (val) => {
  console.log(val)
  yearRange.value = val
}
const userInfo = reactive({
  name:"周星驰",
  age:"未知",
  habby:"功夫",
  sex:"男"
})
const num = ref(2)
const Hours = ref(new Date().getTime() + num.value * 60 * 1000)
console.log(Hours.value)
const add = () => {
  Cookies.set('userInfo', JSON.stringify(userInfo), { expires: 0.00138889, path: '/' , domain: 'localhost'}); //可以通过配置path,为当前页创建有效期7天的cookie
}
const CooKie = ref('')
const obtain = () => {
  let cookie = JSON.parse(Cookies.get('userInfo'))
  console.log(cookie)
  CooKie.value = cookie.name
}
const del = () => {
  Cookies.remove('userInfo',{path:"/"})
}

const Sesstores = ref('')
const addS = () => {
  sesstore.set('UserInfo', userInfo , 2)
}
const obtainS = () => {
  let v = sesstore.get('UserInfo')
  console.log(v)
  Sesstores.value = v.age
}
const delS = () => {
  sesstore.remove('UserInfo')
}
onMounted(() => {
  if(Cookies.get('userInfo')) {
    CooKie.value = JSON.parse(Cookies.get('userInfo')).name
  }
  if(sesstore.get('UserInfo')) {
    Sesstores.value = sesstore.get('UserInfo').age
  }
})
</script>

<style scoped>
.demo {
    width: 100%;
    height: 100%;
}
</style>
