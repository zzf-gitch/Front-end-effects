<template>
      <div class="Card">
          <img draggable="false" ref="card">
      </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const card = ref(null)

const init = () => {
    const url = new URL(location.href)
    console.log(url);
    const type = url.searchParams.get('type') || 'L'
    console.log(type);
    card.value.src = `./${type}.png`
    console.log(card.value.src);
}
onMounted(() => {
    init()
})
</script>

<style scoped>
.Card{
    width: 100%;
    height: 100%;
}
img {
    width: 500px;
    height: 400px;
}
</style>
