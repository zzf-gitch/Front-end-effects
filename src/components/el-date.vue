<template>
  <div class="year-range-picker">
    <el-date-picker
        v-model="startYear"
        type="year"
        placeholder="选择开始年"
        class="year-picker"
        @change="changeStartYear"
        format="YYYY"
        value-format="YYYY"
    >
    </el-date-picker>
    <span class="range-word"> 至 </span>
    <el-date-picker
        v-model="endYear"
        type="year"
        placeholder="选择结束年"
        class="year-picker"
        @change="changeEndYear"
        format="YYYY"
        value-format="YYYY"
    >
    </el-date-picker>
  </div>
</template>


<script setup>
import { ref , onMounted , defineProps , defineEmits } from 'vue'
  // 接收父组件传入的数据
const props = defineProps({
  yearRange: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['yearChanged'])
const startYear = ref('')
const endYear = ref('')
onMounted(() => {
  console.log(props.yearRange[0])
  // 初始化自身变量
  startYear.value = String(props.yearRange[0]);
  endYear.value = String(props.yearRange[1]);
})
const changeStartYear = (val) => {
  console.log(val)
  // 开始年份大于结束年份，调换
  if (Number(startYear.value) > Number(endYear.value)) {
    startYear.value = endYear.value;
    endYear.value = val;
    console.log(startYear.value , endYear.value)
  }
  // 将改动传回父组件
  emit("yearChanged", [Number(startYear.value), Number(endYear.value)]);
}
const changeEndYear = (val) => {
  console.log(val)
  // 开始年份大于结束年份，调换
  if (Number(startYear.value) > Number(endYear.value)) {
    endYear.value = startYear.value;
    startYear.value = val;
    console.log(startYear.value , endYear.value)
  }
  emit("yearChanged", [Number(startYear.value), Number(endYear.value)])
}
</script>


<style scoped>
.year-range-picker {
  color: black;
  text-align: center;
  font-size: 18px;
}

.range-word {
  margin-left: 10px;
  margin-right: 10px;
}

.year-range-picker .year-picker {
  max-width: 160px;
}
</style>
