<template>
    <div class="opacity">
        <div class="content">
            <h1>BadHandsome</h1>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed, watch } from 'vue'
</script>

<style scoped>
.opacity{
    background: url(../assets/bj.png) no-repeat;
    background-size: cover;
    background-position: center;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
}
.content{
    background: rgb(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
}
.content h1 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12vw;
    background: url(../assets/bj.png) no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-text-stroke: 1px #fff;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
}

</style>