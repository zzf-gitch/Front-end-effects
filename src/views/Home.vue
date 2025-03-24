<template>
  <div class="home">
    <div class="common-layout">
      <el-container>
        <el-aside width="200px">
          <menu_demo />
        </el-aside>
        <el-container>
          <el-header>
            <div ref="darkSwitchRef">
              <el-switch v-model="toTheme" active-text="暗色" inactive-text="亮色" @change="updateThemeMode" />
            </div>
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <!--          <el-footer></el-footer>-->
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import menu_demo from '../components/menu.vue'
import {
  ref,
  defineEmits,
  defineProps,
  nextTick,
  reactive,
  onMounted,
  watch,
  computed,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { useTheme } from '@/utils/useTheme.js'
const { theme , toggleTheme , doWithTransition } = useTheme()
const toTheme = ref(theme.value === 'dark' ? true : false)

const darkSwitchRef = ref(null)
const updateThemeMode = (val) => {
  doWithTransition(
    () => toggleTheme(val),
    darkSwitchRef.value?.querySelector?.('.el-switch__action'),
    !val
  );
}
const router = useRouter()
const route = useRoute()
</script>

<style scoped>
.home {
  width: 100vw;
  height: 100vh;
  color: var(--text-color);
  background: linear-gradient(to bottom, var(--bg1), var(--bg2));
}

.common-layout {
  width: 100%;
  height: 100%;
}

.el-container {
  width: 100%;
  height: 100%;
}
.el-header{
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-aside {
  height: 100%;
}
</style>
