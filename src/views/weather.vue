<template>
  <div class="weather">
    <el-form-item label="查询的城市">
      <el-input
        v-model="city"
        placeholder="请输入城市名字"
        @keyup.enter="getlist"
      />
    </el-form-item>
    <el-form-item label="查询的区域">
      <el-input
        v-model="area"
        placeholder="请输入区域名字"
        @keyup.enter="getlist"
      />
    </el-form-item>
    <el-button :loading="Loading" type="primary" @click="getlist"
      >点击查询</el-button
    >

    <el-table v-if="tableData.length > 0" :data="tableData" border style="width: 100%;margin-top:20px;">
      <el-table-column prop="riqi" label="日期" width="auto" />
      <el-table-column prop="tianqi" label="天气" width="auto" />
      <el-table-column prop="wendu" label="温度" width="auto" />
      <el-table-column prop="pm" label="空气质量" width="auto" />
      <el-table-column prop="fengdu" label="风度" width="auto" />
    </el-table>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { search } from "../api/APIJ.js";

const city = ref("");
const area = ref("");
const Loading = ref(false);
const tableData = ref([])

const getlist = async () => {
  Loading.value = true;
  let params = {
    msg: city.value,
    type: area.value,
  };
  const res = await search(params);
  console.log(res)
  Loading.value = false;
  tableData.value = res.data
};

// getlist()
</script>

<style scoped>
.weather {
  width: 100%;
  height: 100%;
}
</style>
