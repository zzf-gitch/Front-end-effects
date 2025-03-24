<template>
    <div class="Card">
        <template v-for="(item, index) in ImgArr" :key="index">
            <div class="card">
                <img :src="item.Coversrc" alt="" class="cover">
                <img :src="item.Titlesrc" alt="" class="title">
                <img :src="item.Herosrc" alt="" class="hero">
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const ImgArr = ref([
    {
        Coversrc: require('../../../assets/cover1.jpeg'),
        Titlesrc: require('../../../assets/title1.png'),
        Herosrc: require('../../../assets/hero1.webp')
    },
    {
        Coversrc: require('../../../assets/cover2.jpeg'),
        Titlesrc: require('../../../assets/title2.png'),
        Herosrc: require('../../../assets/hero2.webp')
    },
])
</script>

<style scoped>
.Card {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 200px;
    height: 300px;
    margin: 0 50px;
    transform: translateY(-50%);
    position: relative;
    cursor: pointer;
}

.card img {
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.5s;
}

.cover {
    position: absolute;
    inset: 0;
    height: 100%;
    z-index: 1;
}

.hero {
    position: absolute;
    inset: 0;
    height: 100%;
    z-index: 2;
    opacity: 0;
}

.title {
    position: absolute;
    z-index: 3;
    bottom: 0;
}

.card:hover .cover {
    transform: perspective(500px) rotateX(25deg);
    box-shadow: 0 35px 35px -8px rgba(0, 0, 0, 0.75);
}

.card:hover .hero {
    opacity: 1;
    transform: perspective(500px) translate3d(0, -50px, 50px);
}

.card:hover .title {
    transform: perspective(500px) translate3d(0, -25px, 50px);
}
</style>