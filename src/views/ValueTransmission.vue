<template>
  <div class="User">
    <div>
      <span>{{id}}</span>
      <div contenteditable class="div"></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();
const id = ref('');
id.value = history.state.params.id
console.log(id.value)
</script>

<style>
.div{
  width: 150px;
  height: auto;
  border: 2px solid rgba(0,0,0,0.8);
}
</style>